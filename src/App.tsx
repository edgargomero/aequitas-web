import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Stats = lazy(() => import('./components/Stats'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const CTA = lazy(() => import('./components/CTA'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Suspense>
          <Stats />
          <Services />
          <About />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
