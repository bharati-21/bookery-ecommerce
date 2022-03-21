import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider, FilterProvider } from "contexts/";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ProductProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </ProductProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
