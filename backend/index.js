import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import pdfParse from "pdf-parse";
import dotenv from "dotenv";
import OpenAI from "openai";
import { YoutubeTranscript } from "youtube-transcript";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.static("."));

let knowledgeBase = "";

app.post("/upload-pdf", upload.single("file"), async (req, res) => {
  const data = await pdfParse(fs.readFileSync(req.file.path));
  knowledgeBase += data.text;
  res.json({ success: true });
});

app.post("/add-youtube", async (req, res) => {
  const transcript = await YoutubeTranscript.fetchTranscript(req.body.url);
  knowledgeBase += transcript.map(t => t.text).join(" ");
  res.json({ success: true });
});

app.post("/ask", async (req, res) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an economics teacher. Answer only from the provided content. Explain simply with examples and exam tips.\n\n" +
          knowledgeBase.slice(0, 12000)
      },
      { role: "user", content: req.body.question }
    ]
  });

  res.json({ answer: completion.choices[0].message.content });
});

app.post("/audio-dialogue", async (req, res) => {
  const { topic } = req.body;

  const dialogue = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Create a short teacher-student dialogue. Format:\nStudent: ...\nTeacher: ..."
      },
      { role: "user", content: topic }
    ]
  });

  const text = dialogue.choices[0].message.content;

  const audio = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: text
  });

  const buffer = Buffer.from(await audio.arrayBuffer());
  fs.writeFileSync("dialogue.mp3", buffer);

  res.json({
    dialogue: text,
    audioUrl: "http://localhost:5000/dialogue.mp3"
  });
});

app.post("/video-summary", async (req, res) => {
  const { topic } = req.body;

  const summary = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Create a video summary in JSON with fields: title, scenes[]. Each scene has visual and narration."
      },
      { role: "user", content: topic }
    ]
  });

  const script = JSON.parse(summary.choices[0].message.content);
  const narration = script.scenes.map(s => s.narration).join(" ");

  const audio = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: narration
  });

  fs.writeFileSync(
    "summary.mp3",
    Buffer.from(await audio.arrayBuffer())
  );

  res.json({
    script,
    audioUrl: "http://localhost:5000/summary.mp3"
  });
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
