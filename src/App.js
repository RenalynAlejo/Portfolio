import './App.css';
import Home from "./pages/Home";
import Headers from './components/Headers';
import Projects from './pages/Projects';
import About from "./pages/About";
import customStyle from './css/customStyle.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './pages/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton'; 

function App() {
  return (
    <div className="App">
      <section id="home">
        <Home />
        <Headers name="Renalyn Alejo" skills="Graphic Designer" skill="Web Designer" />
      </section>

      <section id="projects">
        <h1 className={customStyle.project}>My Projects</h1>
        <Projects />
      </section>

      <section id="about">
        <h1 className={customStyle.project1}>About Me</h1>
        <About skil="What I use..." myname="Nalyn" />
      </section>

      <section id="contact">
        <h1 className={customStyle.project2}>Let's Connect!</h1>
        <ContactForm titleForm="Send a Message" />
      </section>

      <ScrollToTopButton /> {/* Add the scroll-to-top button here */}
    </div>
  );
}

export default App