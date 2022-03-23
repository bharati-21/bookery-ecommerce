import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ProductProvider, FilterProvider, AuthProvider } from "contexts/";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <ProductProvider>
                    <FilterProvider>
                        <ToastContainer 
                            position="bottom-left"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable
                            pauseOnHover
                        />
                        <App />
                    </FilterProvider>
                </ProductProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
