"use client"

import { useState, useEffect } from "react"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      title: "AI-powered. Tech-enabled.",
      subtitle: "Transforming businesses through cutting-edge technology",
      description:
        "Mondtech is a global digital engineering leader with over 17,500 experts in 33 countries. We deliver world-class software solutions that drive growth and innovation.",
      cta: "View More",
      secondaryCta: "Our Services",
      bgImage: "/hero-slide-1-fluid-abstract.jpg",
      bgGradient: "from-teal-900/40 via-black/60 to-black/80",
    },
    {
      title: "Digital Innovation Leaders",
      subtitle: "Pioneering the future of enterprise solutions",
      description:
        "Partner with us to accelerate your digital transformation journey with cutting-edge AI and cloud technologies.",
      cta: "Get Started",
      secondaryCta: "Learn More",
      bgImage: "/hero-slide-2-tech-waves.jpg",
      bgGradient: "from-blue-900/40 via-black/60 to-black/80",
    },
    {
      title: "Scalable Enterprise Solutions",
      subtitle: "Built for growth, designed for success",
      description:
        "Our enterprise-grade solutions are designed to scale with your business needs and drive operational excellence.",
      cta: "Contact Us",
      secondaryCta: "View Portfolio",
      bgImage: "/hero-slide-3-digital-flow.jpg",
      bgGradient: "from-purple-900/40 via-black/60 to-black/80",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // setIsMobileMenuOpen(false)
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
        </div>
      ))}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000 animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <div className="space-y-6 sm:space-y-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`mt-20 transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-teal-300 mb-4 sm:mb-6 font-medium animate-fade-in-up delay-200">
                  {slide.subtitle}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-400">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => scrollToSection("contact")}
                  >
                    {slide.cta}
                  </button>
                  <button className="border-2 border-white/30 hover:border-teal-400 text-white hover:text-teal-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  onClick={() => scrollToSection("contact")}
                    >
                    {slide.secondaryCta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-teal-400 w-12 shadow-lg shadow-teal-400/50"
                  : "bg-gray-600 hover:bg-gray-400 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-xs sm:text-sm font-medium">Scroll Down</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
