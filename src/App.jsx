import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Footer from './Sections/Footer'
import Advantages from './Sections/Advantages'
import TopUniversities from './Sections/TopUniversities'
import SuccessStories from './Sections/SucessStories'
import StudyAbroadWithUs from './Sections/StudyAbroadWithUs'
import ReactGA from 'react-ga'

const App = () => {
  const trackingId = "G-PJ2LZWYRTB"
  ReactGA.initialize(trackingId)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    document.head.appendChild(script)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `
    document.head.appendChild(script2)
  }, [])

  return (
    <main className="relative">
      <Navbar />
      <section>
        <Hero />
      </section>

      <section className='padding-x py-10'>
        <Services />
      </section>

      <section className='padding-x py-10'>
        <Advantages />
      </section>
      
      <section className='padding'>
        <TopUniversities />
      </section>
      <section className='padding'>
        <SuccessStories />
      </section>
      
      <section className='padding'>
        <StudyAbroadWithUs />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App