import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { setAuthToken, api } from './services/api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuthToken(token);
      api.get('users/me/').then(res => setUser(res.data));
    }
  }, []);

  const handleLogin = () => {
    api.get('users/me/').then(res => setUser(res.data));
  };

  if(!user){
    return (
      <div>
        <h1>Task Management System</h1>
        <Register />
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return <Dashboard user={user} />;
}

export default App;
