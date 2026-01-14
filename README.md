# Library Management System - Client-Server Architecture

## Project Information
> Bonus Exam - Client-Server Refactoring
- **Student Name:** รัฐจิกาลณ์ กวงคำ  
- **Student ID:** 67543210063-3  
- **Course:** ENGSE207 Software Architecture  
- **Exam Type:** Bonus Exam  

---

## Architecture Overview

### Before: Layered Architecture
- ระบบเป็นแอปเดียว (Monolithic)
- Frontend, Business Logic และ Database อยู่รวมกัน
- แก้ไขและดูแลรักษายากเมื่อระบบขยายใหญ่

### After: Client-Server Architecture
- แยกระบบออกเป็น 2 ส่วนชัดเจน
- **Backend (Server):**
  - Node.js + Express
  - SQLite Database
  - REST API
- **Frontend (Client):**
  - HTML
  - CSS
  - JavaScript
- **Communication:** HTTP / JSON

---

## Project Structure

midterm-bonus-67543210063-3/
├── backend/ # Server (Run on VM)
│ ├── src/
│ ├── database/
│ ├── app.js
│ └── package.json
└── frontend/ # Client (Run on Local)
├── css/
│ └── style.css
├── js/
│ ├── api.js
│ ├── app.js
│ └── components/
│ ├── bookList.js
│ └── bookForm.js
└── index.html

yaml
คัดลอกโค้ด

---

## How to Run the Project

### Backend (Server - VM)
```bash
cd backend
npm install
npm start
Server runs at: http://localhost:3000

Frontend (Client - Local)
bash
คัดลอกโค้ด
cd frontend
# Open index.html directly in browser
# OR
python3 -m http.server 8000
Open browser: http://localhost:8000

API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get book by ID
POST	/api/books	Create new book
PUT	/api/books/:id	Update book
DELETE	/api/books/:id	Delete book
PATCH	/api/books/:id/borrow	Borrow a book
PATCH	/api/books/:id/return	Return a book

Features
Add / Edit / Delete books

Borrow & Return books

Filter books by status (All / Available / Borrowed)

Statistics dashboard

Responsive UI (Desktop & Mobile)

Screenshots