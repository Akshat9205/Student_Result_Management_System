import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('list');

  const handleLoadStudents = (loadedStudents) => {
    setStudents(loadedStudents);
  };

  const handleAddStudent = () => {
    setEditingStudent(null);
    setCurrentScreen('form');
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setCurrentScreen('form');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentScreen('details');
  };

  const handleBackToList = () => {
    setCurrentScreen('list');
  };

  const handleFormSubmit = () => {
    setCurrentScreen('list');
  };

  return (
    <div>
      {currentScreen === 'list' && (
        <StudentList
          students={students}
          onLoadStudents={handleLoadStudents}
          onAddStudent={handleAddStudent}
          onEditStudent={handleEditStudent}
          onViewDetails={handleViewDetails}
        />
      )}
      {currentScreen === 'form' && (
        <StudentForm
          student={editingStudent}
          onSubmit={handleFormSubmit}
          onCancel={handleBackToList}
        />
      )}
      {currentScreen === 'details' && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
}

export default App;