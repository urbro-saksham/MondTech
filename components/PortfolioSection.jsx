"use client"

import { useState, useEffect, useRef } from "react"

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced analytics and AI-powered recommendations.",
      image: "/modern-ecommerce-dashboard-dark-theme.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: "300% increase in conversion rate",
      client: "RetailCorp",
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "mobile",
      description: "Secure banking application with biometric authentication and real-time transactions.",
      image: "/fintech-mobile-app-interface-dark.jpg",
      technologies: ["React Native", "Firebase", "Blockchain", "AI"],
      results: "1M+ active users",
      client: "SecureBank",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "web",
      description: "Comprehensive healthcare platform connecting patients, doctors, and administrators.",
      image: "/healthcare-management-dashboard.png",
      technologies: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
      results: "50% reduction in admin time",
      client: "MedTech Solutions",
    },
    {
      id: 4,
      title: "AI Analytics Dashboard",
      category: "ai",
      description: "Machine learning powered analytics platform for business intelligence and insights.",
      image: "/ai-analytics-dashboard-dark-theme.jpg",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      results: "85% prediction accuracy",
      client: "DataCorp",
    },
    {
      id: 5,
      title: "IoT Smart City Platform",
      category: "iot",
      description: "Integrated IoT solution for smart city management and environmental monitoring.",
      image: "/smart-city-iot-dashboard.jpg",
      technologies: ["IoT", "Azure", "React", "Time Series DB"],
      results: "40% energy savings",
      client: "CityTech",
    },
    {
      id: 6,
      title: "Logistics Tracking App",
      category: "mobile",
      description: "Real-time package tracking and fleet management solution with GPS integration.",
      image: "/logistics-tracking-mobile-app.jpg",
      technologies: ["Flutter", "Google Maps", "Firebase", "ML"],
      results: "99.9% delivery accuracy",
      client: "LogiFlow",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI & ML" },
    { id: "iot", label: "IoT Solutions" },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our successful projects and the impact we've made for clients across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-black/20 border border-gray-800/50 rounded-xl overflow-hidden transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/10 hover:transform hover:scale-105 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-blue-600/90 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                >
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {project.client}
                  </span>
                  <div className="flex space-x-1">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Results */}
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">{project.results}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  onClick={() => scrollToSection("contact")}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}
        >
          <p className="text-lg text-gray-300 mb-6">Ready to start your next project with us?</p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onClick={() => scrollToSection("contact")}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
