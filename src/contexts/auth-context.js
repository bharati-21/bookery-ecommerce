import { createContext, useContext, useEffect, useState } from 'react';

const initialAuthState = {
    user: {}, 
    isAuth: false,
    token: ''
}

const AuthContext = createContext(initialAuthState);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(initialAuthState);

    return (
        <Provider value={{authState, setAuthState}}>
            {children}
        </Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };