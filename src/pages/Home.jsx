import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import WorksSection from '../sections/WorksSection'
import HistorySection from '../sections/HistorySection'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <HistorySection />
      <Footer />
    </main>
  )
}

export default Home
