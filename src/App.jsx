import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import Placeholder from './pages/Placeholder'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const exportedPages = ['/news', '/contact', '/get-involved']

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-story" element={<About />} />
        <Route path="/about/mission-vision" element={<About />} />
        <Route path="/about/our-values" element={<About />} />
        <Route path="/about/our-team" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/all" element={<Programs />} />
        <Route path="/programs/school-programs" element={<Programs />} />
        <Route path="/programs/family-community" element={<Programs />} />
        <Route path="/programs/youth-development" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/newsletter" element={<Placeholder />} />
        {exportedPages.map((path) => (
          <Route key={path} path={path} element={<Placeholder />} />
        ))}
        <Route path="*" element={<Placeholder />} />
      </Routes>
      <Footer />
    </div>
  </HashRouter>
)

export default App
