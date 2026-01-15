# 📚 Library Management System  
## Client-Server Architecture

> **Bonus Exam – Client-Server Refactoring**

---

## 👤 Project Information

- **Student Name:** รัฐจิกาลณ์ กวงคำ  
- **Student ID:** 67543210063-3  
- **Course:** ENGSE207 – Software Architecture  
- **Exam Type:** Bonus Exam  

---

## 🏗️ Architecture Overview

### 🔹 Before: Layered Architecture
- ระบบเป็นแอปเดียว (Monolithic Application)
- Frontend, Business Logic และ Database อยู่รวมกัน
- โค้ดซับซ้อน แก้ไขและดูแลรักษายากเมื่อระบบขยายใหญ่

### 🔹 After: Client-Server Architecture
- แยกระบบออกเป็น 2 ส่วนอย่างชัดเจน
- เพิ่มความยืดหยุ่น ดูแลรักษาง่าย และรองรับการขยายระบบในอนาคต

#### 🔧 Backend (Server)
- Node.js + Express
- SQLite Database
- RESTful API
- ทำงานบน Virtual Machine (VM)

#### 🎨 Frontend (Client)
- HTML
- CSS
- JavaScript
- รันบนเครื่อง Local

#### 🔗 Communication
- Protocol: **HTTP**
- Data Format: **JSON**

---

## 📂 Project Structure

<img width="458" height="786" alt="image" src="https://github.com/user-attachments/assets/ed13cb55-6a27-4f0d-879e-45c8b67bd215" />

## ▶️ How to Run the Project
🖥️ Backend (Server – VM)
cd backend
npm install
npm start


- Server runs at:
- http://localhost:3000

## 🌐 Frontend (Client – Local)
- cd frontend

- Method 1: Open directly

- Open index.html in your browser

- Method 2: Using Local Server
- python3 -m http.server 8000


- Open browser at:
- http://localhost:8000

##🔌 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get book by ID
POST	/api/books	Create new book
PUT	/api/books/:id	Update book
DELETE	/api/books/:id	Delete book
PATCH	/api/books/:id/borrow	Borrow a book
PATCH	/api/books/:id/return	Return a book
✨ Features

Add / Edit / Delete books

Borrow & Return books

Filter books by status

All

Available

Borrowed

Statistics Dashboard

Responsive UI (Desktop & Mobile)

## 🖼️ Screenshots

Insert application screenshots here
