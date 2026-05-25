# 📝 TaskFlow — Full Stack Todo Application

A modern full stack Todo application built using **React.js**, **Node.js**, **Express.js**, and **MySQL**.

This application helps users manage daily tasks efficiently with features like adding, editing, deleting, marking completed/incomplete, due dates, priorities, dark mode, and search functionality.

---

# 🚀 Features

- ✅ Add Tasks
- ✅ Edit Tasks
- ✅ Delete Tasks
- ✅ Mark Tasks as Completed / Pending
- ✅ Due Dates
- ✅ Priority Levels
- ✅ Search Tasks
- ✅ Dark Mode
- ✅ Responsive UI
- ✅ Animated Particle Background

---

# 🛠️ Tech Stack

## Frontend
- React.js
- CSS
- Axios
- React Icons

## Backend
- Node.js
- Express.js

## Database
- MySQL

---

# 📂 Project Structure

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

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-github-repository-link>
```

---

## 2️⃣ Install Frontend Dependencies

```bash
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🗄️ MySQL Setup

Open MySQL and run:

```sql
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
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start Frontend

Open a new terminal and run:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🔄 Application Flow

```text
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
```

---

# 📌 CRUD Operations

| Operation | Description |
|----------|-------------|
| Create | Add Task |
| Read | Fetch Tasks |
| Update | Edit / Complete Task |
| Delete | Remove Task |

---

# 🌙 UI Features

- Dark Mode
- Hover Effects
- Animated Background Particles
- Responsive Design
- Modern Card Layout

---

# 📖 Learning Outcome

Through this project, I learned:

- Full Stack Development
- React State Management
- API Communication using Axios
- Backend Development using Express.js
- MySQL Database Integration
- CRUD Operations
- Frontend-Backend Architecture

---

# 👨‍💻 Author

Adhithya Sree
