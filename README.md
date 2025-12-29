Project - Study Tool
  
name: Interactive Study Tool
inspiration: NotebookLM
description:
  An AI-powered interactive study assistant that helps students understand
  academic content through context-aware question answering. The tool processes
  PDF chapters and YouTube lecture transcripts and provides teacher-style,
  exam-oriented explanations grounded strictly in the provided material.

links:
github: [https://github.com/YOUR-USERNAME/interactive-study-tool](https://github.com/SayyamJain101)

features:
- PDF ingestion and processing (Economics chapters)
- YouTube lecture transcript ingestion
- Context-aware interactive Q&A
- Teacher-style explanations with simple language and examples
- NotebookLM-inspired grounded responses (no external hallucinations)

mvp_scope:
included:
  - PDF-based knowledge ingestion
  - YouTube transcript-based knowledge ingestion
  - Interactive student question answering
  - Teacher-style, exam-focused explanations
  - Responsive web interface
excluded:
  - Audio two-person dialogue (planned)
  - Video summaries (planned)
  - User authentication
  - Multi-user session management

tech_stack:

frontend:
  framework: Next.js
  language: TypeScript
  styling: Tailwind CSS v4
backend:
  runtime: Node.js
  framework: Express.js
ai_and_processing:
  - OpenAI API (LLM)
  - PDF parsing
  - YouTube transcript extraction

architecture:
flow:
  - Frontend (Next.js UI)
  - Backend API (Express.js)
  - PDF & YouTube transcript processing
  - Context-aware AI response generation

setup:
prerequisites:
  - Node.js (v18+ recommended)
  - npm
  - OpenAI API key
backend:
  steps:
    - cd backend
    - npm install
    - create .env file with OPENAI_API_KEY
    - node index.js
  runs_on: http://localhost:5000
frontend:
  steps:
    - cd frontend
    - npm install
    - npm run dev
  runs_on: http://localhost:3000

usage:
steps:
  - Upload an economics chapter PDF
  - Add YouTube lecture links
  - Ask questions related to the content
  - Receive teacher-style, context-grounded explanations

limitations:
- Audio dialogue is not included in the MVP
- Video summaries are not included in the MVP
- Single knowledge base per session
- Designed as a demo-scale application

future_improvements:
- Two-person teacher-student audio dialogue using TTS
- AI-generated video summaries for concepts and exam tips
- Multi-chapter and multi-subject support
- User authentication and saved study sessions
- Quick revision and exam-focused summary mode

assignment_alignment:
objectives_met:
  - NotebookLM-inspired interactive study experience
  - Use of PDF and YouTube content as knowledge sources
  - Interactive learning through AI-powered explanations
  - Working MVP with deployable frontend and backend
notes: 
  Audio dialogue and video summaries are documented as future enhancements
  beyond the MVP scope.

author:
name: Sayyam Jain
email: sayyamjain2022@gmail.com
github: [https://github.com/YOUR-USERNAME](https://github.com/SayyamJain101)
linkedin: [https://linkedin.com/in/YOUR-PROFILE](https://www.linkedin.com/in/sayyam-jain-b57871245/)

license:
type: Educational / Evaluation Use
