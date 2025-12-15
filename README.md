# CV Parsing & Persona Generation Web App

This project is a full-stack web application built as part of a technical assignment.  
It demonstrates CV upload, LLM-based parsing, backend API design, database storage, and frontend integration.

---

## Goal of the Assignment

Build a web application that:

- Accepts a CV upload
- Extracts text from the CV
- Uses an LLM to convert unstructured CV text into a structured persona
- Stores the persona in a database
- Displays all personas
- Allows viewing details of a single persona

---

## Features Implemented

### Persona Creation
- Upload CV (PDF)
- Backend extracts text from the CV
- Text is sent to an LLM with a structured prompt
- LLM returns structured JSON
- Persona is saved to the database
- User is redirected to the persona detail page

### Persona Storage
- Personas are stored in MongoDB
- Multiple personas are supported
- Timestamps are recorded

### Persona List
- Displays all created personas
- Shows name and professional heading
- Clickable items to view persona details
- Button to generate a new persona

### Persona Detail
- Displays full persona information:
  - Name
  - Professional heading
  - Experience summary
  - Skills
  - Work experience
  - Education
  - Hobbies
- Button to navigate back to the persona list

---

## Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Multer
- pdfjs-dist
- OpenAI API
- MongoDB
- Mongoose

---

## Backend API Endpoints

### Upload CV & Create Persona
POST /api/v1/upload-cv

- Accepts CV file
- Extracts text from CV
- Sends text to LLM
- Saves persona to database
- Returns saved persona

---

### Get All Personas
GET /api/v1/personas

- Returns list of all personas

---

### Get Persona by ID
GET /api/v1/personas/:id

- Returns full persona details

---

## LLM Usage

- Uses OpenAI API
- Structured prompt to enforce JSON output
- Parses and validates JSON response
- Handles parsing and API errors

---

## Database

- Database: MongoDB
- ORM: Mongoose

Persona fields include:
- fullName
- email
- phone
- location
- professionalHeading
- experienceSummary
- skills
- education
- workExperience
- hobbies
- createdAt
- updatedAt

---

## UI Pages

- /upload : Upload CV and generate persona
- /personas : View all personas
- /personas/:id : View persona details

UI is intentionally simple and clean as per assignment requirements.

---

## How to Run the Project

### Clone Repository
git clone https://github.com/anshif-8590/ai-powered-cv-parsing-assignment.git
cd ai-powered-cv-parsing-assignment

### Backend Setup
cd backend
npm install

# Create a .env file inside the backend folder:
PORT=3003
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
Start backend server:npm start


### Frontend Setup
cd frontend
npm install

# Create a .env file inside the frontend folder:
REACT_APP_BACKEND_BASE_URL=http://localhost:3003
Start frontend:npm start