📝 TaskFlow — Full Stack Todo Application
A modern full stack Todo application built using React.js, Node.js, Express.js, and MySQL.
The application allows users to manage tasks efficiently with features like adding, editing, deleting, marking completed/incomplete, dark mode, due dates, priorities, and search functionality.
🚀 Features
✅ Add Tasks
✅ Edit Tasks
✅ Delete Tasks
✅ Mark Tasks as Completed / Pending
✅ Due Dates
✅ Priority Levels
✅ Search Tasks
✅ Dark Mode
✅ Responsive UI
✅ Animated Particle Background
🛠️ Tech Stack
Frontend
React.js
CSS
React Icons
Axios
Backend
Node.js
Express.js
Database
MySQL
📂 Project Structure
Plain text
todo-app/
│
├── src/
│   ├── components/
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── styles/
│   │   └── components.css
│   │
│   ├── App.js
│   └── index.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── package.json
│
└── README.md
⚙️ Installation
1️⃣ Clone Repository
Bash
git clone <your-github-repo-link>
2️⃣ Install Frontend Dependencies
Bash
npm install
3️⃣ Install Backend Dependencies
Bash
cd backend
npm install
🗄️ MySQL Setup
Create database:
SQL
CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    priority VARCHAR(50),
    due_date DATE,
    completed BOOLEAN DEFAULT FALSE
);
▶️ Run Project
Start Backend
Bash
cd backend
npm start
Backend runs on:
Plain text
http://localhost:5000
Start Frontend
Open new terminal:
Bash
npm start
Frontend runs on:
Plain text
http://localhost:3000
🔄 Application Flow
Plain text
React Frontend
↓
Axios API Calls
↓
Express Backend APIs
↓
MySQL Database
↓
Response Returns
↓
React Updates UI
📌 CRUD Operations
Operation
Description
Create
Add Task
Read
Fetch Tasks
Update
Edit / Complete Task
Delete
Remove Task
🌙 UI Features
Dark Mode
Smooth Hover Effects
Animated Background Particles
Responsive Design
Modern Card UI
📖 Learning Outcome
Through this project, I learned:
Full Stack Development
React State Management
API Communication using Axios
Express.js Backend Development
MySQL Database Integration
CRUD Operations
Frontend-Backend Architecture
👨‍💻 Author
Adithya Sree
