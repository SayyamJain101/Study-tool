import express from "express";
import cors from "cors";
import multer from "multer";
import pdfParse from "pdf-parse";
import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";
import { YoutubeTranscript } from "youtube-transcript";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

let knowledgeBase = "";

app.post("/upload-pdf", upload.single("file"), async (req, res) => {
  try {
    const data = await pdfParse(fs.readFileSync(req.file.path));
    knowledgeBase += data.text;
    res.json({ success: true, message: "PDF processed" });
  } catch (err) {
    res.status(500).json({ error: "PDF processing failed" });
  }
});

app.post("/add-youtube", async (req, res) => {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(req.body.url);
    const text = transcript.map(t => t.text).join(" ");
    knowledgeBase += text;
    res.json({ success: true, message: "YouTube transcript added" });
  } catch (err) {
    res.status(500).json({ error: "Transcript fetch failed" });
  }
});

app.post("/ask", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an economics teacher. Explain clearly using simple language, real-world examples, and exam tips. Answer strictly using the content provided.\n\n" +
            knowledgeBase.slice(0, 12000)
        },
        {
          role: "user",
          content: req.body.question
        }
      ]
    });

    res.json({
      answer: completion.choices[0].message.content
    });
  } catch (err) {
    res.status(500).json({ error: "AI response failed" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
