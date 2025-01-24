import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Achievements from "./components/Achievements"
import Gallery from "./components/gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      
    <Header/>

    <div id="home">
    <Home/>
    </div>

    <div id="about" className="py-4 aboutContainer">
    <About/>
    </div>
    <div id="achievements" className="py-5">
    <Achievements/>
    </div>

    <div id="gallery" className="py-5 gallaryContainer">
    <Gallery/>
    </div>

    <div id='contact' className="py-5 bg-dark">
      <Contact/>
    </div>

    <div className="footer py-3">
      <Footer/>
    </div>
    
    </>
  )
}

export default App
