import React from 'react';
import { getStudents, deleteStudent } from '../services/studentService';

function StudentList({ students, onLoadStudents, onAddStudent, onEditStudent, onViewDetails }) {
  const handleLoad = async () => {
    const data = await getStudents();
    onLoadStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    alert('Student deleted successfully! Please click Load Students to refresh the list.');
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Student Result Management System</h1>
      <button onClick={handleLoad} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Load Students</button>
      <button onClick={onAddStudent} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Student</button>
      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '80%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>Section</th>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>Marks</th>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>Grade</th>
            <th style={{ border: '1px solid #ddd', padding: '12px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} style={{ border: '1px solid #ddd' }}>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{student.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{student.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{student.section}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{student.marks}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{student.grade}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                <button onClick={() => onEditStudent(student)} style={{ margin: '2px', padding: '5px 10px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(student.id)} style={{ margin: '2px', padding: '5px 10px', backgroundColor: '#F44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                <button onClick={() => onViewDetails(student)} style={{ margin: '2px', padding: '5px 10px', backgroundColor: '#9C27B0', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;