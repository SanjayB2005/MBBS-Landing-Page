import React from 'react'
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
  ReactGA.set({ anonymizeIp: true ,
    hitType: 'pageview',
    page: window.location.pathname,
  })


  return (
    <main className="relative">
      <Navbar />
      <section >
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
      <section >
        <Footer />
      </section>
    </main>
  )
}

export default App