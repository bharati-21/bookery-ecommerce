/* Style imports */
import "./styles/styles.css";

/* Component imports */
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <Navbar  />
            <Routes  />         
            <Footer  />
        </div>
    );
}

export default App;