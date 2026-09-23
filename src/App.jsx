import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import NewsEvents from './pages/NewsEvents'
import Contact from './pages/Contact'
import GetInvolved from './pages/GetInvolved'
import Placeholder from './pages/Placeholder'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

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
        <Route path="/programs/faith-prayer" element={<Programs />} />
        <Route path="/programs/helping-others" element={<Programs />} />
        <Route path="/programs/youth-transformation" element={<Programs />} />
        <Route path="/programs/talent-ict" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/news" element={<NewsEvents />} />
        <Route path="/news/latest" element={<NewsEvents />} />
        <Route path="/news/events" element={<NewsEvents />} />
        <Route path="/news/past-events" element={<NewsEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/newsletter" element={<Placeholder />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
      <Footer />
    </div>
  </HashRouter>
)

export default App
