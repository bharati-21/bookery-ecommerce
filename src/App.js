/* Style imports */
import "./styles/styles.css";

/* Component imports */
import { Navbar, Footer } from './components/';
import { Routes } from "./routes/WebsiteRoutes";

/* External Imports */
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Navbar  />
            <Routes  />         
            <Footer  />
        </div>
    );
}

export default App;