import React, { useState } from 'react';
import { loginUser, api} from '../services/api';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/users/login/', { username, password });
      const token = res.data.access; // JWT access token
      localStorage.setItem('token', token);  // store in localStorage
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set for Axios
      onLogin(); // callback to refresh user in App.js
    } catch (err) {
      console.error(err);
      alert("Login failed");
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
