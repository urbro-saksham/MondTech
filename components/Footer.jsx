"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "News & Updates"],
    Services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
    // Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  }

  return (
    <footer className="bg-black/80 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tech<span className="text-teal-400">Corp</span>
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading technology company providing innovative software solutions for businesses worldwide. Transform
              your digital presence with our expert team.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "GitHub", "Facebook"].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-sm font-medium">{social[0]}</span>
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
          <p className="text-gray-300 text-sm">© {currentYear} TechCorp. All rights reserved.</p>
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
