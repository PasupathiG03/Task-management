import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    api.get('tasks/').then(res => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const updateStatus = async (taskId, newStatus) => {
    try {
      await api.patch(`tasks/${taskId}/`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    }
  };

  return (
    <div>
      <h3>Task List</h3>
      {tasks.map(task => (
        <div key={task.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h4>{task.title} - {task.status}</h4>
          <p>{task.description}</p>
          <p>Assigned To: {task.assigned_to}</p>
          {task.file && <a href={`http://localhost:8000${task.file}`} target="_blank">Download File</a>}
          <div>
            <button onClick={() => updateStatus(task.id, 'pending')}>Pending</button>
            <button onClick={() => updateStatus(task.id, 'in_progress')}>In Progress</button>
            <button onClick={() => updateStatus(task.id, 'completed')}>Completed</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
