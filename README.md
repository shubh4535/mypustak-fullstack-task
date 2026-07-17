# MyPustak Full Stack Developer – 1 Hour Coding Challenge

## 📌 Project Overview

This project is a simple **Post Management Application** built as part of the **MyPustak Full Stack Developer Hiring Challenge**.

The application allows users to:

- View all posts
- Create a new post
- Delete a post

The backend is built using **FastAPI**, and the frontend is built using **React (Vite)**.

---

## 📁 Project Structure
MY PUSTAK TASK

├── backend
│ ├── main.py
│ ├── requirements.txt
│ └── venv
│
├── frontend
│ ├── src
│ ├── public
│ ├── package.json
│ └── vite.config.js
│
└── README.md


---

## 🚀 Technologies Used

### Backend

- FastAPI
- Pydantic
- Uvicorn

### Frontend

- React
- Vite
- JavaScript

---

## ✨ Features

### Backend

- GET /posts
- POST /posts
- DELETE /posts/{id}
- In-memory storage
- JSON responses
- Proper HTTP status codes

### Frontend

- Display all posts
- Create a new post
- Delete a post
- Loading state
- Basic validation
- Error handling

---

## ⚙️ Backend Setup

Navigate to the backend folder
    cd backend

Create virtual environment
    python -m venv venv


Activate virtual environment
    venv\Scripts\activate

Install dependencies
    pip install fastapi uvicorn


Run the server
    uvicorn main:app --reload


Backend runs at
    http://127.0.0.1:8000


---

## ⚙️ Frontend Setup

Navigate to frontend


cd frontend


Install dependencies


npm install


Run frontend


npm run dev


Frontend runs at


http://localhost:5173


---

## 📌 API Endpoints

### Get Posts


GET /posts


Returns all posts.

---

### Create Post


POST /posts


Request Body

```json
{
  "title": "Hello",
  "body": "My first post"
}
Delete Post

DELETE /posts/{id}


Deletes a post by its ID.

📝 Notes
No database is used.
Posts are stored in memory.
Restarting the backend clears all posts.

👨‍💻 Author

Shubham Singh

## Live Demo

Frontend:
https://mypustak-fullstack-task-dsvcauz95.vercel.app

Backend:
https://mypustak-backend-hzbu.onrender.com
