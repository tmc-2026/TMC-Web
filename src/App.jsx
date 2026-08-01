import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import WhyTMC from './pages/WhyTMC'
import Contact from './pages/Contact'
import Workshops from './pages/Workshops'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Navbar />
      <main className="pt-[88px]">
        <Home />
        <About />
        <Courses />
        <Workshops />
        <WhyTMC />
        <Contact />
      </main>
      <WhatsAppFloat />
    </div>
  )
}

export default App
