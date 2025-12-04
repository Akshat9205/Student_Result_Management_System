# 📘 Student Result App

A beginner‑friendly **React + JSON Server** CRUD project that lets you **Add, View, Edit, Delete** student data — using **only useState** for state management.

This README is designed to be clean, attractive, and copy‑paste ready for your submission.

---

# 🚀 Project Features

### ✔ Add Student

### ✔ View All Students

### ✔ Edit Student Data

### ✔ Delete Student

### ✔ View Full Student Details

### ✔ Uses JSON Server as backend

### ✔ All CRUD operations done with **Fetch API**

### ✔ No useEffect — data loads only on button clicks

---

# 📂 Folder Structure

```
student-result-app/
│
├── db.json                 → JSON Server database
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx      → Shows list + actions
│   │   ├── StudentForm.jsx      → Add/Edit form
│   │   └── StudentDetails.jsx   → Shows detailed info
│   │
│   ├── services/
│   │   └── studentService.js    → API (CRUD) calls
│   │
│   ├── App.jsx                  → Main logic & states
│   └── index.js                 → React entry
│
├── public/
│   └── index.html
│
├── package.json
└── node_modules/
```

---

# 🔧 Technologies Used

* **React (Functional Components)**
* **useState Hooks Only**
* **JSON Server** (Fake REST API)
* **Fetch API** for all CRUD operations
* **Basic CSS** for UI

---

# ▶️ How to Run the Project

### 📌 Step 1: Install Dependencies

```
npm install
```

### 📌 Step 2: Start JSON Server

JSON Server will run on **[http://localhost:3001](http://localhost:3001)**

```
npm run server
```

### 📌 Step 3: Start React App

Runs on **[http://localhost:3000](http://localhost:3000)**

```
npm start
```

### Now open the browser and click **Load Students** 🎉

---

# 🧠 Understanding the App Flow

### 🟦 1. Load Students

Fetches all students from JSON Server and displays them.

### 🟩 2. Add Student

Opens StudentForm → Fill details → Save → Student stored.

### 🟧 3. Edit Student

Click Edit → Form opens with existing data → Save changes.

### 🟥 4. Delete Student

Removes student permanently (after confirmation popup).

### 🟪 5. View Details

Shows full info of a single student.

> After Add/Edit/Delete, the app shows **alert message** and asks you to click **Load Students** again.

---

# 🛠 studentService.js (CRUD Overview)

| Operation | Method | API Endpoint  |
| --------- | ------ | ------------- |
| Read All  | GET    | /students     |
| Read One  | GET    | /students/:id |
| Create    | POST   | /students     |
| Update    | PUT    | /students/:id |
| Delete    | DELETE | /students/:id |

All API requests are written using **Fetch API** only.

---

# 🎨 UI Overview

* Clean table layout for listing students
* Buttons: Load, Add, Edit, View, Delete
* Simple and neat form
* Details page with full student info

---

# ⭐ Extra Features You Can Add (Optional)

* Search bar
* Sorting by marks/grade
* Pagination
* Better styling with Tailwind / Bootstrap
* Form validation
* Loading spinner

Adding these can improve your marks/performance.

---

# 📄 Summary

This project demonstrates:

* Proper component structure
* State management using useState only
* Manual API calls without useEffect
* Simple and clean CRUD operations
* Organized folder structure

Perfect for beginners and academic submission 💯🔥

---

If you want, I can also make:
✅ A more advanced README (with images & badges)
✅ A beautiful UI version using Tailwind
✅ A GitHub‑ready version with screenshots

Just tell me! 😊

# 🏆 Premium Version Enhancements

## ✨ Shields.io Badges

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![JSON Server](https://img.shields.io/badge/JSON%20Server-API-orange)
![CRUD](https://img.shields.io/badge/CRUD-Operations-success)
![License](https://img.shields.io/badge/Free%20To%20Use-Yes-brightgreen)

---

# 📸 Project Screenshots

> Add your screenshots in the *screenshots/* folder and link them below.

### 🏠 Home / Student List

```
![Student List](./screenshots/student-list.png)
```

### ➕ Add Student Form

```
![Add Form](./screenshots/add-form.png)
```

### ✏ Edit Student

```
![Edit](./screenshots/edit-form.png)
```

### 📄 Student Details Page

```
![Details](./screenshots/details.png)
```

---

# 🎬 Demo GIF (Optional)

Add a GIF to show your app in action:

```
![Demo](./screenshots/demo.gif)
```

---

# 🌗 Dark Mode Preview (Optional)

```
![Dark Mode](./screenshots/dark-mode.png)
```

---

# 🏗 How to Add Images

1. Create a folder inside project:

```
src/screenshots
```

2. Add PNG/JPG/GIF files inside it
3. Update image path in README

---
