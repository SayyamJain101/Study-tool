Project - Study Tool
  
Name: Interactive Study Tool
Inspiration: NotebookLM
Description:
  An AI-powered interactive study assistant that helps students understand
  academic content through context-aware question answering. The tool processes
  PDF chapters and YouTube lecture transcripts and provides teacher-style,
  exam-oriented explanations grounded strictly in the provided material.

Links:
github: [https://github.com/YOUR-USERNAME/interactive-study-tool](https://github.com/SayyamJain101)

Features:
  - PDF chapter ingestion and processing
  - YouTube lecture transcript ingestion
  - Context-aware interactive question answering
  - Teacher-style explanations (simple, exam-oriented)
  - Two-person teacher–student audio dialogue (Text-to-Speech)
  - AI-generated video summary scripts with scene-wise breakdown
  - Audio narration for video summaries
  - NotebookLM-inspired grounded responses (no external hallucinations)

MVP_Scope:
Implemented:
  - Text-based interactive Q&A
  - Audio teacher–student dialogue
  - Video summary generation (script + narration audio)
  - Responsive web interface
  - End-to-end working demo
Notes: 
  Full video rendering (MP4 generation) is not included.
  The MVP focuses on content understanding, narration, and structure,
  which aligns with early-stage NotebookLM-style tools.

Tech_Stack:

Frontend:
  framework: Next.js
  language: TypeScript
  styling: Tailwind CSS v4

Backend:
  runtime: Node.js
  framework: Express.js

Ai_and_processing:
  - OpenAI API (LLM)
  - OpenAI Text-to-Speech (TTS)
  - PDF parsing
  - YouTube transcript extraction

Architecture:

Overview: 
  The frontend communicates with a backend API that processes
  PDFs and YouTube transcripts. Relevant content is used as context
  for AI-powered explanations, audio dialogue generation, and
  video summary narration.

Flow:
  - Frontend UI (Next.js)
  - Backend API (Express.js)
  - Knowledge ingestion (PDF + YouTube)
  - Context-aware AI processing
  - Text, audio dialogue, and video summary outputs

Setup:
Prerequisites:
  - Node.js (v18 or higher)
  - npm
  - OpenAI API key

Backend:
  steps:
    - cd backend
    - npm install
    - create .env file with OPENAI_API_KEY
    - node index.js
  runs_on: http://localhost:5000

Frontend:
  steps:
    - cd frontend
    - npm install
    - npm run dev
  runs_on: http://localhost:3000

Usage:
Steps:
  - Upload an economics chapter PDF
  - Add YouTube lecture links
  - Ask text-based questions
  - Generate teacher–student audio dialogue
  - Generate video summary scripts with narration audio

Limitations:
- No automatic MP4 video rendering
- No user authentication
- Single-user demo environment
- One knowledge base active at a time

Future_improvements:
- Full video generation (images + audio → MP4)
- Multi-chapter and multi-subject support
- User authentication and saved study sessions
- Dark mode and advanced UI personalization
- Exam-focused quick revision mode

Assignment_alignment:

Requirements_met:
  - Interactive study tool inspired by NotebookLM
  - Use of PDF chapters and YouTube videos as inputs
  - Interactive Q&A functionality
  - Audio-based explanations
  - Video-style summaries (script + narration)
  - Working MVP with deployable frontend and backend


Author:
Name: Sayyam Jain
Email: sayyamjain2022@gmail.com
Github: [https://github.com/YOUR-USERNAME](https://github.com/SayyamJain101)
Linkedin: [https://linkedin.com/in/YOUR-PROFILE](https://www.linkedin.com/in/sayyam-jain-b57871245/)

license:
type: Educational / Evaluation Use
