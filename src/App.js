import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import {SkillsCarousel} from "./components/Skillscoursel/skillcoursel.js"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <SkillsCarousel/>
            <Contact />
            <Footer />
            <ToastContainer 
                position='top-center'
                autoclose={3000}
                hideProgressBar={false}
                closeOnClick
                theme='dark' />
        </div>
    );
}

export default App;
