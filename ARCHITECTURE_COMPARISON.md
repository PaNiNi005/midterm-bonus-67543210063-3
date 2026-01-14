# Architecture Comparison

## Layered Architecture (Before)

Layered Architecture เป็นสถาปัตยกรรมที่แบ่งระบบออกเป็นหลายชั้น
เช่น Presentation Layer, Business Logic Layer และ Data Access Layer
แต่ทุกชั้นยังคงอยู่ภายในแอปพลิเคชันเดียวกัน

### Pros:
- โครงสร้างเข้าใจง่าย เหมาะสำหรับระบบขนาดเล็ก
- แยกความรับผิดชอบของแต่ละ Layer ชัดเจน
- เริ่มต้นพัฒนาได้เร็ว
- เหมาะกับการเรียนรู้แนวคิด Software Architecture เบื้องต้น

### Cons:
- Frontend และ Backend ผูกติดกันแน่น (Tight Coupling)
- ไม่สามารถแยก deploy Frontend และ Backend ได้
- ขยายระบบยากเมื่อจำนวนผู้ใช้เพิ่มขึ้น
- หากเปลี่ยน UI ต้องกระทบโค้ด Backend
- ไม่เหมาะกับระบบที่ต้องรองรับหลาย Client

---

## Client-Server Architecture (After)

Client-Server Architecture แยกการทำงานของระบบออกเป็น 2 ส่วนอิสระ
คือ Client (Frontend) และ Server (Backend) โดยสื่อสารกันผ่าน REST API

### Pros:
- แยก Frontend และ Backend อย่างชัดเจน (Loose Coupling)
- สามารถพัฒนาและ deploy แยกกันได้
- รองรับหลาย Client เช่น Web, Mobile หรือ API Consumer
- ดูแลรักษาและขยายระบบได้ง่าย
- เหมาะกับระบบจริงในระดับ Production

### Cons:
- โครงสร้างซับซ้อนกว่า Layered Architecture
- ต้องจัดการเรื่อง Network, CORS และ API Security
- ต้องออกแบบ API ให้มีมาตรฐาน
- ใช้เวลาในการพัฒนามากขึ้นในช่วงเริ่มต้น

---

## Changes Made

### 1. Separation
- แยกระบบออกเป็น 2 โปรเจกต์
  - Frontend (HTML, CSS, JavaScript)
  - Backend (Node.js, Express, SQLite)

### 2. Communication
- ใช้ REST API ในการสื่อสารระหว่าง Client และ Server
- ข้อมูลส่งผ่านรูปแบบ JSON

### 3. CORS
- เพิ่ม CORS Middleware ใน Backend
- อนุญาตให้ Frontend ที่รันคนละ origin ติดต่อกับ Server ได้

### 4. API Response Format
- ใช้รูปแบบ Response มาตรฐาน
```json
{
  "success": true,
  "data": {},
  "timestamp": "2026-01-xxTxx:xx:xxZ"
}

