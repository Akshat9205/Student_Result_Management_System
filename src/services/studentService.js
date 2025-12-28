const BASE_URL = 'http://localhost:3001/students';

export const getStudents = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addStudent = async (student) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return response.json();
};

export const updateStudent = async (id, student) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return response.json();
};

export const deleteStudent = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};