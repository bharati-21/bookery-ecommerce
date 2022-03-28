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
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
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