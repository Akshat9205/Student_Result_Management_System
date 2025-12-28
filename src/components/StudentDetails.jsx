import React from 'react';

function StudentDetails({ student, onBack }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Student Details</h1>
      <div style={{ display: 'inline-block', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
        <p style={{ margin: '10px 0', fontSize: '18px' }}><strong>Name:</strong> {student.name}</p>
        <p style={{ margin: '10px 0', fontSize: '18px' }}><strong>Section:</strong> {student.section}</p>
        <p style={{ margin: '10px 0', fontSize: '18px' }}><strong>Marks:</strong> {student.marks}</p>
        <p style={{ margin: '10px 0', fontSize: '18px' }}><strong>Grade:</strong> {student.grade}</p>
        <button onClick={onBack} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Back</button>
      </div>
    </div>
  );
}

export default StudentDetails;