"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "News & Updates"],
    Services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
    // Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  }

    const socials = [
    { name: "LinkedIn", url: "#", icon: "/linkedin.png" },
    { name: "Twitter", url: "#", icon: "/twitter.jpg" },
    { name: "Instagram", url: "#", icon: "/instagram.jpeg" },
    { name: "Facebook", url: "#", icon: "/facebook.png" },
  ]


  return (
    <footer className="bg-black/80 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
        <div className="group">
          <img
            src="/mondtech-logo.png"
            alt="Mondtech Logo"
            className="h-10 sm:h-12 md:h-14 transition-all duration-300 group-hover:scale-105"
          />
        </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading technology company providing innovative software solutions for businesses worldwide. Transform
              your digital presence with our expert team.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socials.map((social) => (
                <button
                  key={social.name}
                >
                  <img src={social.icon} alt={social.name} width={24} height={24}
                  className="rounded-sm w-8 h-8"
                   />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-200 hover:text-teal-400 transition-colors duration-200 text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {currentYear} MondTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-200">
              Terms of Service
            </button>
            <button className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-200">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
