import axios from 'axios';

const initiateLogin = formData => axios.post('/api/auth/login', formData);

export { initiateLogin };