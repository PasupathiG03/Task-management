import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8011/';

export const api = axios.create({ baseURL: API_URL });

export const setAuthToken = (token) => {
    if(token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete api.defaults.headers.common['Authorization'];
};

export const loginUser = async (username, password) => {
    const res = await api.post('users/login/', { username, password });
    const token = res.data.access;
    localStorage.setItem('token', token);
    setAuthToken(token);
    return token;
};

export const registerUser = async (username, email, password) => {
    return await api.post('users/register/', { username, email, password });
};
