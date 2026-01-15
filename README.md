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

## 🚀 How to Run

### 🖥 Backend (Server)

**1. Clone repository**
```
git clone https://github.com/your-username/library-management-system.git
```

**2. Go to backend directory**
```
cd backend
```

**3. Install dependencies**
```
npm install
```

**4. Run server**
```
npm start
```

**Server runs at:**  
http://localhost:3000

---

### 🌐 Frontend (Client)

**1. Go to frontend directory**
```
cd frontend
```

**Method 1: Open directly**
- Open `index.html` in your browser

**Method 2: Using Local Server**
```
python3 -m http.server 8000
```

**Open browser at:**  
http://localhost:8000

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body (JSON) |
|------|---------|------------|---------------------|
| GET | `/api/books` | Get all books | – |
| GET | `/api/books/:id` | Get book by ID | – |
| POST | `/api/books` | Create a new book | `{ "title": "Book 1", "author": "Author 1", "isbn": "1234567890", "status": "available" }` |
| PUT | `/api/books/:id` | Update book info | `{ "title": "Updated Title", "author": "New Author", "isbn": "0987654321", "status": "borrowed" }` |
| PATCH | `/api/books/:id/borrow` | Update book status → borrowed | – |
| PATCH | `/api/books/:id/return` | Update book status → available | – |
| DELETE | `/api/books/:id` | Delete a book | – |

---

## ✨ Features

- 📚 Add / Edit / Delete books  
- 🔄 Borrow & Return books  
- 🔍 Filter books by status  
  - All  
  - Available  
  - Borrowed  
- 📊 Statistics Dashboard  
- 📱 Responsive UI (Desktop & Mobile)

---

## 🖼 Screenshots

Insert application screenshots here
