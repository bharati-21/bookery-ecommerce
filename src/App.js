import "./styles/styles.css";
import { Navbar } from './components/Navbar';

import { Footer } from './components/Footer';
import { LandingPage } from "./pages/LandingPage";

function App() {
    return (
        <div className="App">
            <Navbar  />
            <LandingPage  />
            <Footer  />
        </div>
    );
}

export default App;