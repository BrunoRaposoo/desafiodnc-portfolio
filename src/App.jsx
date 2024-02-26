import './App.css'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavbarMenu } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <Blog />
      <Projects/>
      <Footer />
    </>
  )
}

export default App
