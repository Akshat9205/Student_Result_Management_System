# 🎓 Student Result Management System

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![JSON Server](https://img.shields.io/badge/JSONServer-0.17.3-orange?logo=json&logoColor=white)](https://github.com/typicode/json-server)

---

## 🌟 Project Overview

Welcome to the **Student Result Management System**!  
This is a **beginner-friendly, modern React application** that allows you to manage student results in a clean, intuitive interface.

✨ **Features:**  
- Add new students  
- View all students in a table  
- Edit student details  
- Delete students  
- View detailed student results  

---

## 🛠 Tech Stack

| Technology | Version |
|------------|---------|
| React      | 18.2.0  |
| JSON Server | 0.17.3 |
| Fetch API  | N/A     |
| CSS        | Plain   |

---

---

## 🔹 Components Overview

### 1️⃣ StudentList.jsx
- Displays all students in a **styled table**  
- Columns: `ID | Name | Section | Marks | Grade | Actions`  
- Buttons: Load Students, Add Student, Edit, Delete, View Details  
- UI: Centered layout, hover effects, colored action buttons

---

### 2️⃣ StudentForm.jsx
- Used for both **Add** and **Edit**  
- Fields: Name, Section (A-D), Marks (0-100), Grade (A+, A, B, C, D)  
- Controlled form using **useState**  
- Save + Cancel buttons  
- Validation: No empty fields, Marks between 0–100  
- Card-style UI

---

## 3️⃣ StudentDetails.jsx
- Read-only detailed view  
- Displays Name, Section, Marks, Grade  
- Back button to return to list  
- Card-style UI

---
### 🎉 Author

Akshat Agarwal
Full Stack Developer | React Enthusiast
