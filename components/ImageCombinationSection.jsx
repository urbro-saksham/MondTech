"use client"

import { useState, useEffect, useRef } from "react"

export default function ImageCombinationSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const sections = [
    {
      title: "Strategic IT planning",
      description:
        "Leverage our strategic IT expertise to define a clear direction for your business. We assess market dynamics, align technology strategies with your objectives, and promote sustainable growth with a competitive edge.",
      buttonText: "Contact",
      image: "/strategic-it-planning-workspace.jpg",
      reverse: false,
    },
    {
      title: "Tailored digital solutions",
      description:
        "Stay ahead of the curve with our innovative solution development. We provide customized digital solutions that tackle your specific challenges, empowering your organization to capitalize on new opportunities.",
      buttonText: "Contact",
      image: "/tailored-digital-solutions-development.jpg",
      reverse: true,
    },
    {
      title: "Operational excellence",
      description:
        "Maximize your business's capabilities with our operational excellence services. From enhancing workflows to improving efficiency, we strive to elevate performance, boost profitability, and secure long-term success.",
      buttonText: "Contact",
      image: "/operational-excellence-dashboard.jpg",
      reverse: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            } ${section.reverse ? "lg:grid-flow-col-dense" : ""}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Content Side */}
            <div className={`${section.reverse ? "lg:col-start-2" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{section.title}</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{section.description}</p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => scrollToSection("contact")}
              >
                {section.buttonText}
              </button>
            </div>

            {/* Image Side */}
            <div className={`${section.reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
