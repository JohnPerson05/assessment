"use client"

import { useState, useEffect } from "react"
import LoadingAnimation from "@/components/LoadingAnimation"
import ScrollProgress from "@/components/ScrollProgress"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WhatWeDo from "@/components/WhatWeDo"
import WhyATS from "@/components/WhyATS"
import Industries from "@/components/Industries"
import VideoSection from "@/components/VideoSection"
import TechInAction from "@/components/TechInAction"
import Journey from "@/components/Journey"
import Mission from "@/components/Mission"
import Leadership from "@/components/Leadership"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyATS />
      <Industries />
      <VideoSection />
      <TechInAction />
      <Journey />
      <Mission />
      <Leadership />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
