"use client"

import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      title: "Address",
      value: "Greater Noida, India",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+91 9760434722",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "support@mondtech.in",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  const socials = [
    { name: "LinkedIn", url: "#", icon: "/linkedin.png" },
    { name: "Twitter", url: "#", icon: "/twitter.jpg" },
    { name: "Instagram", url: "#", icon: "/instagram.jpeg" },
    { name: "Facebook", url: "#", icon: "/facebook.png" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Let’s discuss your project and explore how we can help you achieve your
            goals.
          </p>
        </div>

        {/* Unified Contact Card */}
        <div
          className={`bg-black/30 p-8 shadow-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">{info.title}</h4>
                  <p className="text-white text-base">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                // className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <img src={social.icon} alt={social.name} className="w-8 h-8 rounded-sm" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
