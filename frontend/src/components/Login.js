import React, { useState } from 'react';
import { loginUser } from '../services/api';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      alert('Login successful');
      onLogin(); // trigger dashboard load
    } catch (err) {
      alert('Invalid credentials');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
