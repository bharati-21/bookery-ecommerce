import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { initiateSignup } from 'utils/';
import { useToast } from 'custom-hooks/useToast';
import { useAuth } from 'contexts/';
import './auth.css';

const Signup = () => {

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

    const navigate = useNavigate();
    const { state } = useLocation();

    const { showToast } = useToast();
    const { setAuthState, authState: { isAuth } } = useAuth();

    useEffect(() => {
        if(isAuth) {
            navigate(state?.from ? state.from : "/");        
        }
    }, []);

    const handleFormDataChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({...prevFormData, [name]: value}));
    }

    const showPasswordIcon = showPassword ? <VisibilityOffIcon /> : <VisibilityIcon /> 
    const showConfirmPasswordIcon = showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />;

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const handleFormSubmit = async event => {
        event.preventDefault();
        if(confirmPassword !== password) {
            showToast('Passwords do not match.', 'error');
            return;
        }
        setIsOngoingNetworkCall(true);
		try {   
			const { data } = await initiateSignup(formData);
			showToast("Sign up successful!", "success");

			const { encodedToken, foundUser } = data;
			setAuthState({
				isAuth: true,
				token: encodedToken,
				user: { ...foundUser },
			});

			localStorage.setItem("bookery-token", encodedToken);
			setFormData(initialFormData);
            setIsOngoingNetworkCall(false);
			navigate("/");
		} catch (error) {
            setIsOngoingNetworkCall(false);
			showToast("Sign up failed. Try again later.", "error");
		}
    }

    const handleChangePasswordVisibility = () => setShowPassword(prevShowPassword => !prevShowPassword);
    const handleChangeConfirmPasswordVisibility = () => setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword);

    return (
        <section className="auth-main flex-col flex-align-center flex-justify-center mx-auto py-2 px-3">
            <div className="auth-wrapper">
                <article className="auth-container signup-container mx-auto mb-1 px-1-5 py-2">
                    <h3 className="text-center text-uppercase auth-head mb-2">
                        Sign Up
                    </h3>
                    <form className="auth-form px-1" onSubmit={handleFormSubmit}>
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-signup-fname">
                                First Name
                                <input type="text" id="input-signup-fname" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="Jane" name="firstName" onChange={handleFormDataChange} value={firstName} required />
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-signup-lname">
                                Last Name
                                <input type="text" id="input-signup-lname" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="Dow" name="lastName" onChange={handleFormDataChange} value={lastName} required />
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-login-email">
                                Email
                                <input type="email" id="input-login-email" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="janedoe@example.com" name="email" onChange={handleFormDataChange} value={email} required/>
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mb-1 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto text-sm" htmlFor="input-psd">
                                Password
                                <span className="password-input-toggler">
                                    <input type={`${showPassword ? 'text' : 'password'}`} id="input-psd" className="input-text px-0-75 py-0-5 mt-0-25 text-sm" placeholder="********" autoComplete='off' name="password" onChange={handleFormDataChange} value={password} required />
                                    <button type="button" className={`btn btn-icon icon-show-psd ${isOngoingNetworkCall && 'btn-disabled'}`} onClick={handleChangePasswordVisibility}>
                                        <span className="icon mui-icon">
                                            {showPasswordIcon}
                                        </span>
                                    </button>
                                </span>  
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mb-1 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto text-sm" htmlFor="input-psd">
                                Confirm Password
                                <span className="password-input-toggler">
                                    <input type={`${showConfirmPassword ? 'text' : 'password'}`} id="input-confirm-psd" className="input-text px-0-75 py-0-5 mt-0-25 text-sm" placeholder="********" autoComplete='off' name="confirmPassword" onChange={handleFormDataChange} value={confirmPassword} required />
                                    <button type="button" className={`btn btn-icon icon-show-psd ${isOngoingNetworkCall && 'btn-disabled'}`} onClick={handleChangeConfirmPasswordVisibility}>
                                        <span className="icon mui-icon">
                                            {showConfirmPasswordIcon}
                                        </span>
                                    </button>
                                </span>  
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div> 
                        <div className="psd-mgmt-container mt-2 flex-row flex-align-center flex-justify-between flex-wrap">
                            <label htmlFor="checkbox-remember" className="flex-row input-checkbox-remember flex-align-center text-sm">
                                <input type="checkbox" className="input-checkbox text-reg" id="checkbox-remember" required />
                                I accept terms and conditions
                            </label>
                            <div className="btn btn-link btn-primary btn-forgot-psd text-sm display-none">
                                Forgot password?
                            </div>
                        </div>
                        
                        <div className="auth-button-container mt-1 flex-col flex-align-center">
                            <input type="submit" value="Sign Up" className={`btn btn-primary px-0-75 py-0-25 btn-full-width text-reg ${isOngoingNetworkCall && 'btn-disabled'}`} />
                            <Link to="/login" className={`btn btn-link btn-primary mt-0-75 ${isOngoingNetworkCall && 'link-disabled'}`}>
                                Already have an account?
                                Login <span className="icon mui-icon icon-chevron-right">
                                    <ChevronRightIcon />
                                </span>
                            </Link>
                        </div>
                    </form>
                </article>  
            </div>         
        </section>
    )
}

export { Signup };