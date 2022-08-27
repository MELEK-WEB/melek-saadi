import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <>
     <div  id ='top' className='light app'>
     <Header/>
     <main>
          <About/>
          <Projects/>
          <br/>
          
          <Skills/>
          <br/>
          <br/>
          <Contact/>
      </main>
      
    <Footer/>
    </div>
    </>
  );
}

export default App;
