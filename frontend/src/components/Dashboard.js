import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard({ user }) {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username} ({user.is_admin ? 'Admin' : 'User'})</p>
      {user.is_admin && <TaskForm onTaskCreated={triggerRefresh} />}
      <TaskList refresh={refresh} />
    </div>
  );
}

export default Dashboard;
