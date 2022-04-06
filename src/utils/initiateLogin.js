import axios from 'axios';
import { toast } from 'react-toastify';


const initiateLogin = async (formData) => {
    try {
        const { status, data }  = await axios.post('/api/auth/login', formData);
        if(status >= 200 && status < 300) {
            return data;
        }
        else  {
            throw new Error('Login failed');
        }
    }
    catch(error) {
        return false;
    }
}

export { initiateLogin };