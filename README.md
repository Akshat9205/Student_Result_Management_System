<div align="center">

<!-- Title -->
<h1 style="
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #ff8a00, #e52e71, #7f00ff);
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Poppins', sans-serif;">
📚 Student Result Management App
</h1>

<!-- Subtitle -->
<h3 style="color:#666; font-weight:500;">
React App to Add • View • Edit • Delete Student Data  
</h3>

<!-- Banner -->
<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200" 
     style="border-radius:20px; box-shadow:0 4px 25px rgba(0,0,0,.2); margin:15px 0;"
/>

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/JSON Server-Backend-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/State-useState-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CRUD-Operations-success?style=for-the-badge" />
</p>

<hr style="width:70%; border:0; height:2px; background:linear-gradient(90deg,#ff8a00,#e52e71,#7f00ff);" />

</div>

---

# 🎯 **Project Goal**

Build an easy & clean React application that performs full CRUD on student results using:

✔ React Components  
✔ `useState` for all data  
✔ JSON Server (backend)  
✔ Fetch API for GET, POST, PUT, DELETE  

Each student record contains:  
**Name, Section, Marks, Grade**

---

# 📁 **Folder Structure**

📦 student-result-app/
│
├── 📄 db.json
│ ─ JSON Server database (stores student data)
│
├── 📂 src/
│ │
│ ├── 📂 components/
│ │ ├── 📄 StudentList.jsx — Shows all students + actions
│ │ ├── 📄 StudentForm.jsx — Add/Edit Student Form
│ │ └── 📄 StudentDetails.jsx — Detailed view of a student
│ │
│ ├── 📂 services/
│ │ └── 📄 studentService.js — All CRUD API calls
│ │
│ ├── 📄 App.jsx — Main logic & view switching
│ └── 📄 index.js — React entry point
│
├── 📂 public/ — Static files (HTML, logos)
├── 📄 package.json — Dependencies & scripts
└── 📁 node_modules/ — Auto-installed packages

---

# 🧩 **What Each Component Does**

## 📌 **StudentList.jsx**
- Shows all students
- Buttons included:
  - ✔ Load Students  
  - ✔ Add Student  
  - ✔ Edit  
  - ✔ Delete  
  - ✔ View Details  

---

## 📌 **StudentForm.jsx**
- Used for **Add + Edit**
- Fields:
  - Name  
  - Section  
  - Marks  
  - Grade  
- Controlled using only **useState**

---

## 📌 **StudentDetails.jsx**
- Shows complete info of a student
- Read-only screen

---

## 📌 **studentService.js**
Handles API requests:
- **GET** → Load students  
- **POST** → Add student  
- **PUT** → Edit student  
- **DELETE** → Remove student  

---

## 📌 **App.jsx**
- Stores all main states  
- Controls view switching:
  - Student List  
  - Add/Edit Form  
  - Details Screen  

---

# ⚡ **How Data is Handled (Without useEffect)**

Since students only know `useState`, all data loading happens manually:

✔ A **Load Students** button  
✔ After Add/Edit/Delete → show alert → user again clicks “Load Students”  
✔ API calls only inside:
- Button handlers  
- Form submit  

This keeps everything beginner-friendly.

---

# 🔄 **CRUD Flow**

### 1️⃣ **Create (Add)**
Fill form → Submit → Saved to JSON Server.

### 2️⃣ **Read (View List)**
Click **Load Students** → Table updates.

### 3️⃣ **Update (Edit)**
Click Edit → Form opens → Save changes → Updated.

### 4️⃣ **Delete**
Click Delete → Student removed.

### 5️⃣ **View Details**
Click View → Full details screen.

---

<div align="center">

<h2 style="font-weight:700; background:linear-gradient(90deg,#ff8a00,#e52e71,#7f00ff); -webkit-background-clip:text; color:transparent;">
💫 Happy Coding & All the Best! 💫
</h2>

</div>
