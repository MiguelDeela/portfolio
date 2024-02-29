import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
      <NavBar/>
      <div className="">
        <Home/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App
