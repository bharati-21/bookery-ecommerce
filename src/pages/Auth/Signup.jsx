import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Signup = () => {
    return (
        <section className="auth-main flex-col flex-align-center flex-justify-center mx-auto py-2 px-3">
            <div className="auth-wrapper">
                <article className="auth-container signup-container mx-auto mb-1 px-1-5 py-2">
                    <h3 className="text-center text-uppercase auth-head mb-2">
                        Sign Up
                    </h3>
                    <form className="auth-form px-1">
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-signup-fname">
                                Name
                                <input type="text" id="input-signup-fname" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="Jane Doe" required />
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-login-email">
                                Email
                                <input type="email" id="input-login-email" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="janedoe@example.com" required/>
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mb-1 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto text-sm" htmlFor="input-psd">
                                Password
                                <span className="password-input-toggler">
                                    <input type="password" id="input-psd" className="input-text px-0-75 py-0-5 mt-0-25" placeholder="********" required />
                                    <button className="btn btn-icon icon-show-psd">
                                        <span className="mui-icon">
                                            <VisibilityIcon />
                                        </span>
                                    </button>
                                </span>  
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div> 
                        <div className="psd-mgmt-container mt-2 flex-row flex-align-center flex-justify-between flex-wrap">
                            <label htmlFor="checkbox-remember" className="flex-row input-checkbox-remember flex-align-center text-sm">
                                <input type="checkbox" className="input-checkbox text-reg" id="checkbox-remember" />
                                I accept terms and conditions
                            </label>
                            <div className="btn btn-link btn-primary btn-forgot-psd text-sm display-none">
                                Forgot password?
                            </div>
                        </div>
                        
                        <div className="auth-button-container mt-1 flex-col flex-align-center">
                            <input type="submit" value="Sign Up" className="btn btn-primary px-0-75 py-0-25 btn-full-width text-reg" />
                            <Link to="/login" className="btn btn-link btn-primary mt-0-75">
                                Already have an account?
                                Login <span className="icon-chevron-right">
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