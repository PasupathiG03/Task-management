import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard({ user }) {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();  // reload app to redirect to login
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username} ({user.is_admin ? 'Admin' : 'User'})</p>
      
      <button onClick={handleLogout}>Logout</button>

      {user.is_admin && <TaskForm onTaskCreated={triggerRefresh} />}
      <TaskList refresh={refresh} />
    </div>
  );
}

export default Dashboard;



