import axios from 'axios';

const initiateLogin = async formData => await axios.post('/api/auth/login', formData);

export { initiateLogin };