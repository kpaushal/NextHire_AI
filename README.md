# 🚀 NextHire AI

> An AI-powered interview preparation platform designed to help candidates practice interviews, receive intelligent feedback, analyze performance, improve resumes, and track career preparation goals.

🌐 **Live Demo:** https://next-hire-ai-green.vercel.app

---

## 📌 About the Project

**NextHire AI** is a full-stack AI-powered interview preparation platform that simulates realistic technical and behavioral interviews.

The platform helps candidates prepare for job interviews through personalized interview questions, AI-generated follow-up questions, performance analytics, interview history, resume analysis, and goal tracking.

The objective of NextHire AI is to create a complete AI-driven career preparation ecosystem where users can continuously practice, analyze weaknesses, and improve their interview performance.

---

## ✨ Key Features

### 🤖 AI-Powered Mock Interviews
- Generate interview questions based on selected role and difficulty level
- AI-powered follow-up questions
- Personalized interview sessions
- Technical and behavioral interview preparation

### 🎙️ Voice-Based Interview Practice
- Voice recording support
- Speech-based answer practice
- Realistic interview experience
- Webcam monitoring support

### 💻 Coding Interview Environment
- Integrated code editor
- Multiple programming language support
- Code execution functionality
- Technical interview preparation

### 📊 Intelligent Dashboard
- Interview performance overview
- Progress tracking
- Performance analytics
- Recent interview activity
- Career preparation insights

### 🧠 AI Feedback System
- Interview answer evaluation
- Personalized performance feedback
- Strength and weakness identification
- Improvement recommendations
- Interview score analysis

### 📄 AI Resume Scanner
- Resume analysis
- Resume text extraction
- AI-powered resume feedback
- Improvement suggestions
- Interview preparation based on resume context

### 🎯 Career Goal Tracking
- Create preparation goals
- Organize goals by category
- Mark goals as completed
- Set priority goals
- Generate AI-powered preparation strategies

### 📜 Interview History
- View previous interview sessions
- Analyze historical performance
- Review interview feedback
- Track improvement over time

### 🔐 Secure Authentication
- User authentication powered by Clerk
- Protected dashboard routes
- Secure API authentication
- User-specific interview and goal data

### 🌙 Modern User Experience
- Responsive interface
- Dark theme
- Smooth page transitions
- Interactive animations
- Modern AI-focused UI

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- React Router
- Axios
- Clerk Authentication
- Recharts
- Monaco Editor
- React Three Fiber
- Three.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- Clerk Authentication Middleware
- AI API integrations

### Development & Deployment

- Git
- GitHub
- Vercel
- Render
- MongoDB Atlas

---

## 🏗️ Project Architecture

```text
NextHire_AI/
│
├── client/                      # React + Vite frontend
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── layouts/             # Application layouts
│   │   ├── lib/                 # Utility functions
│   │   ├── pages/               # Application pages
│   │   ├── services/            # API and service layer
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Node.js + Express backend
│   │
│   ├── src/
│   │   ├── config/              # Database configuration
│   │   ├── controllers/         # Business logic
│   │   ├── middlewares/         # Authentication and validation
│   │   ├── models/              # MongoDB models
│   │   ├── routes/              # REST API routes
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
├── README.md
└── ProjectPlan.md
```

---

## 🔄 Application Workflow

```text
User Registration / Login
          │
          ▼
      Dashboard
          │
          ▼
     Select Role
          │
          ▼
   Choose Difficulty
          │
          ▼
 AI Generates Questions
          │
          ▼
   Interview Session
          │
          ▼
 Submit User Answers
          │
          ▼
    AI Evaluation
          │
          ▼
 Performance Feedback
          │
          ▼
 Analytics & History
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- MongoDB Atlas account
- Clerk account
- Required AI API credentials

---

## 📥 Clone the Repository

```bash
git clone https://github.com/kpaushal/NextHire_AI.git
```

Move into the project:

```bash
cd NextHire_AI
```

---

## 💻 Frontend Setup

Move to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5001
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the development server:

```bash
npm run dev
```

The frontend will run on the local URL displayed by Vite.

---

## ⚙️ Backend Setup

Open another terminal and move to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create your server environment file using the variables required by your backend configuration.

Example:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key

CLIENT_URL=http://localhost:5173
```

> Use the exact environment-variable names expected by your server source code.

Start the backend:

```bash
npm start
```

If the project does not define a start script, use:

```bash
node src/server.js
```

---

## 🌐 Deployment

### Frontend

The frontend is deployed using Vercel.

Production URL:

```text
https://next-hire-ai-green.vercel.app
```

Recommended configuration:

```text
Root Directory: client
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Frontend production environment variables:

```env
VITE_API_URL=https://your-backend-url.onrender.com
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Backend

The backend can be deployed as a Render Web Service.

Recommended configuration:

```text
Root Directory: server
Build Command: npm install
Start Command: npm start
```

---

## 🔌 API Overview

The application includes API functionality for:

| Module | Functionality |
| --- | --- |
| Interview | Generate questions and submit interviews |
| Follow-up | Generate contextual follow-up questions |
| History | Retrieve previous interview sessions |
| Intelligence | Retrieve interview performance insights |
| Goals | Create, update, prioritize, and delete goals |
| Strategy | Generate AI-powered goal strategies |
| Resume | Analyze resume content |
| Analytics | Track user performance data |

---

## 🔒 Security Features

- Clerk-based authentication
- Protected frontend routes
- Bearer-token API authentication
- Authentication middleware
- Input validation middleware
- API rate limiting
- Centralized error handling
- Environment-based secret management

---

## 📈 Future Improvements

- Real-time AI voice interviewer
- Advanced resume ATS scoring
- Company-specific interview preparation
- DSA progress tracking
- Interview leaderboard
- AI-generated career roadmap
- Job recommendation engine
- Interview scheduling
- More detailed analytics
- Recruiter interview simulation
- Mobile application support

---

## 🎯 Project Vision

The long-term goal of **NextHire AI** is to become a complete AI-powered career preparation platform that helps candidates move through the entire preparation journey:

```text
Resume Preparation
        ↓
Skill Assessment
        ↓
AI Mock Interviews
        ↓
Coding Practice
        ↓
Performance Analysis
        ↓
Personalized Improvement Plan
        ↓
Job Readiness
```

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Paushal Kumar**

Full Stack Developer focused on building modern web applications using the MERN stack and integrating AI-powered features into practical software products.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐.

Your support helps motivate continued development and improvement of **NextHire AI**.

---

<p align="center">
  Built with ❤️ using React, Node.js, MongoDB and AI
</p>

<p align="center">
  <strong>NextHire AI — Practice Smarter. Interview Better. Get Hired.</strong>
</p>
