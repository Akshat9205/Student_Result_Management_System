# Student Result Management System

A complete Student Result Management System built with React and JSON Server.

## Features

- Add new students
- View all students in a table
- Edit student details
- Delete students
- View detailed student information
- Clean, modern UI with responsive design

## Tech Stack

- React (Functional Components)
- JSON Server (Mock Backend)
- Fetch API
- useState Hook

## Installation

1. Clone or download the project
2. Navigate to the project directory: `cd student-result-app`
3. Install dependencies: `npm install`

## Running the Application

1. Start the JSON Server backend:
   ```
   npm run server
   ```
   This will start the server on http://localhost:3001

2. In a new terminal, start the React app:
   ```
   npm start
   ```
   This will start the app on http://localhost:3000

## Usage

- Click "Load Students" to fetch and display all students
- Click "Add Student" to add a new student
- Use "Edit" to modify student details
- Use "Delete" to remove a student
- Use "View Details" to see full student information

Note: Data is fetched only on button clicks. After add/edit/delete operations, manually click "Load Students" to refresh the list.

## Project Structure

```
student-result-app/
├── db.json
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentList.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentDetails.jsx
│   ├── services/
│   │   └── studentService.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```