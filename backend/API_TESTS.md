# API Tests

## 1. Get All Books
\`\`\`bash
curl http://localhost:3000/api/books
\`\`\`

## 2. Get Book by ID
\`\`\`bash
curl http://localhost:3000/api/books/1
\`\`\`

## 3. Create Book
\`\`\`bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "isbn": "9780132350884"
  }'
\`\`\`

# ... (เพิ่ม tests อื่นๆ)