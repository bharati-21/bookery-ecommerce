import './auth.css';

const Login = () => {
    return (
        <main className="auth-main flex-col flex-align-center flex-justify-center mx-auto py-2 px-3">
            <div className="auth-wrapper">
                <section className="auth-container login-container mx-auto mb-1 px-1-5 py-2">
                    <h3 className="text-center text-uppercase auth-head mb-1">
                        Login
                    </h3>
                    <form className="auth-form px-1 flex-col flex-align-center flex-justify-center">
                        <div className="input-group input-default mt-1-5 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto" htmlFor="input-login-email">
                                Email
                                <input type="email" id="input-login-email" className="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="janedoe@gmail.com" required />
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div>
                        <div className="input-group input-default mt-1-5 mb-1 mx-auto">
                            <label className="text-label text-reg flex-col mx-auto text-sm" htmlFor="input-login-psd">
                                Password
                                <span className="password-input-toggler">
                                    <input type="password" id="input-login-psd" className="input-text px-0-75 py-0-25 mt-0-25" placeholder="********"
                                    required />
                                    <button className="btn btn-icon icon-show-psd">
                                        <span className="icon">
                                            <i className="fas fa-eye"></i>
                                        </span>
                                    </button>
                                </span>
                            </label>
                            <span className="text-message mt-0-5"></span>
                        </div> 
                        <div className="psd-mgmt-container mt-2 flex-row flex-align-center flex-justify-between flex-wrap">
                            <label htmlFor="checkbox-remember" className="flex-row input-checkbox-remember flex-align-center text-sm">
                                <input type="checkbox" className="input-checkbox text-reg" id="checkbox-remember" />
                                Remember me
                            </label>
                            <div className="btn btn-link btn-primary btn-forgot-psd text-sm">
                                Forgot password?
                            </div>
                        </div>
                        
                        <div className="auth-button-container mt-1 flex-col flex-align-center">
                            <div className="login-button-container flex-col flex-align-center flex-justify-center">
                                <input type="submit" className="btn btn-primary btn-full-width px-0-75 py-0-25 btn-full-width text-reg" value="Login"/>
                                <input type="button" className="btn btn-primary btn-outline btn-full-width px-0-75 py-0-25 btn-full-width text-reg" value="Login with Test Credentials" />
                            </div>
                            <a href="/pages/Authentication/singup/" className="btn btn-link btn-primary mt-0-75">Create a new account 
                                <span className="icon">
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </form>
                </section>  
            </div>         
        </main>
            
            
            
    )
}

export { Login };