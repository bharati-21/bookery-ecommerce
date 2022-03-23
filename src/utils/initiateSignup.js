import axios from 'axios';

const initiateSignup = async ({firstName, lastName, email, password}) => {
    try {
        const { status, data } = await axios.post('/api/auth/signup', {
            firstName,
            lastName,
            email, 
            password
        });
        if(status >= 200 && status < 300) {
            return data;
        }
        else {
            throw new Error('Sign up Failed');
        }
    }
    catch(error) {
        console.log(error.message);
        return false;
    }
}

export { initiateSignup };