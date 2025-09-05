"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/Navigation"
import HeroSlider from "../components/HeroSlider"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ImageCombinationSection from "../components/ImageCombinationSection"
import PortfolioSection from "../components/PortfolioSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import StarField from "../components/StarField"

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <StarField />

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navigation />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ImageCombinationSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 ${
          scrollProgress > 0.1 ? "opacity-100 transform scale-100" : "opacity-0 transform scale-0"
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
