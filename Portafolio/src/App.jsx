
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/intro';
import Skills from "./components/skills/skills";
import Works from "./components/works/works"
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.css'

function App() {


  return (
    <div className='App'>
        <NavBar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default App
