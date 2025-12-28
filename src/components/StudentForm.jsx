import React, { useState } from 'react';
import { addStudent, updateStudent } from '../services/studentService';

function StudentForm({ student, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: student ? student.name : '',
    section: student ? student.section : 'A',
    marks: student ? student.marks : '',
    grade: student ? student.grade : 'A+'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.marks === '' || formData.marks < 0 || formData.marks > 100) {
      alert('Please fill all fields correctly. Marks must be between 0 and 100.');
      return;
    }
    if (student) {
      await updateStudent(student.id, formData);
      alert('Student updated successfully! Please click Load Students to refresh the list.');
    } else {
      await addStudent(formData);
      alert('Student added successfully! Please click Load Students to refresh the list.');
    }
    onSubmit();
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>{student ? 'Edit Student' : 'Add Student'}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Section:</label>
          <select name="section" value={formData.section} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Marks:</label>
          <input type="number" name="marks" value={formData.marks} onChange={handleChange} min="0" max="100" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Grade:</label>
          <select name="grade" value={formData.grade} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button type="submit" style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
        <button type="button" onClick={onCancel} style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#F44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
      </form>
    </div>
  );
}

export default StudentForm;