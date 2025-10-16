import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [file, setFile] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch all users to assign task
  useEffect(() => {
    api.get('users/').then(res => setUsers(res.data));
  }, []);

  const submitTask = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', desc);
      formData.append('assigned_to', assignedTo);
      if (file) formData.append('file', file);

      await api.post('tasks/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Task Created!');
      onTaskCreated(); // reload task list
    } catch (err) {
      console.error(err);
      alert('Error creating task');
    }
  };

  return (
    <div>
      <h3>Create Task</h3>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={e => setDesc(e.target.value)} />
      <select onChange={e => setAssignedTo(e.target.value)}>
        <option value="">Select User</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.username}</option>)}
      </select>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={submitTask}>Create Task</button>
    </div>
  );
}

export default TaskForm;
