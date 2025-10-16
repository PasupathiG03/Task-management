import React, { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(username, email, password);
      alert('Registration successful! You can now login.');
    } catch (err) {
      alert('Error registering user.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
