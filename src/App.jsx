import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import HistoryPage from './pages/HistoryPage'
import WorksPage from './pages/WorksPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
