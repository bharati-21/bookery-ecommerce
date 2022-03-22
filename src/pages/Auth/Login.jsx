import './auth.css';

const Login = () => {
    return (
        <main class="auth-main flex-col flex-align-center flex-justify-center mx-auto py-2 px-3">
            <div class="auth-wrapper">
                <section class="auth-container login-container mx-auto mb-1 px-1-5 py-2">
                    <h3 class="text-center text-uppercase auth-head mb-2">
                        Login
                    </h3>
                    <div class="auth-fields px-1">
                        <div class="input-group input-default mt-1-5 mx-auto">
                            <label class="text-label text-reg flex-col mx-auto" for="input-login-email">
                                Email
                                <input type="email" id="input-login-email" class="input-text text-sm px-0-75 py-0-5 mt-0-25" placeholder="janedoe@gmail.com" />
                            </label>
                            <span class="text-message mt-0-5"></span>
                        </div>
                        <div class="input-group input-default mt-1-5 mb-1 mx-auto">
                            <label class="text-label text-reg flex-col mx-auto text-sm" for="input-login-psd">
                                Password
                                <span class="password-input-toggler">
                                    <input type="password" id="input-login-psd" class="input-text px-0-75 py-0-25 mt-0-25" placeholder="********"
                                    />
                                    <button class="btn btn-icon icon-show-psd">
                                        <span class="icon">
                                            <i class="fas fa-eye"></i>
                                        </span>
                                    </button>
                                </span>
                            </label>
                            <span class="text-message mt-0-5"></span>
                        </div> 
                        <div class="psd-mgmt-container mt-2 flex-row flex-align-center flex-justify-between flex-wrap">
                            <label for="checkbox-remember" class="flex-row input-checkbox-remember flex-align-center text-sm">
                                <input type="checkbox" class="input-checkbox text-reg" id="checkbox-remember" />
                                Remember me
                            </label>
                            <div class="btn btn-link btn-primary btn-forgot-psd text-sm">
                                Forgot password?
                            </div>
                        </div>
                        
                        <div class="button-container mt-1 flex-col flex-align-center">
                            <button class="btn px-0-75 py-0-25 btn-full-width text-reg">
                                Login
                            </button>
                            <a href="/pages/Authentication/singup/" class="btn btn-link btn-primary mt-0-75">Create a new account 
                                <span class="icon">
                                    <i class="fas fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </section>  
            </div>         
        </main>
            
            
            
    )
}

export { Login };