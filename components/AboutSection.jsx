"use client"

import { useState, useEffect, useRef } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("story")
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // setIsMobileMenuOpen(false)
    }
  }

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "📊" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "10+", label: "Years Experience", icon: "🏆" },
    { number: "24/7", label: "Support Available", icon: "🚀" },
  ]

  const tabs = [
    {
      id: "story",
      label: "Our Story",
      content: {
        title: "Partnering for your success",
        description:
          "Mondtech is a full-service IT solutions partner helping startups, SMEs, and enterprises harness technology for growth. We deliver secure, scalable, and efficient digital solutions that simplify operations, empower decision-making, and create long-term value.",
      },
    },
    {
      id: "mission",
      label: "Our Mission",
      content: {
        title: "Driving your growth through technology",
        description:
          "At the core of MONDTECH is a passionate team dedicated to driving your growth. We are committed to providing innovative IT solutions that are specifically designed to meet your distinct requirements. Trust us to lead your business towards a future filled with opportunities.",
      },
    },
    {
      id: "values",
      label: "Our Values",
      content: {
        title: "Our Values",
        description:
          "Innovation, integrity, and excellence guide everything we do. We prioritize client success, embrace continuous learning, and maintain the highest standards of quality and ethical practices in all our technology solutions.",
      },
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover more about <span className="text-blue-400">us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn about our mission, journey, and dedication to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
            }`}
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              MONDTECH is a full-service IT solutions partner helping startups, SMEs, and enterprises harness technology
              for growth. We deliver secure, scalable, and efficient digital solutions that simplify operations, empower
              decision-making, and create long-term value.
            </p>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-black/20 rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`transition-all duration-500 ${
                      activeTab === tab.id
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-4 absolute"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">{tab.content.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{tab.content.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => scrollToSection("contact")}
            >
              Learn More About Us
            </button>
          </div>

          {/* Stats Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/20 border border-gray-800/50 p-8 rounded-xl text-center hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-gray-800/50">
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose MONDTECH?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Full-service IT solutions partner
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure, scalable, and efficient solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dedicated to driving your growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
