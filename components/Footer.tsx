'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'GitHub', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
    ],
  }

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              Portfolio
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Creating beautiful, functional, and user-friendly digital experiences
              with modern technologies and creative solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map(({ name, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={name}
                >
                  {name[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map(({ name, href }) => (
                <li key={name}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>your.email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Portfolio. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>by Your Name</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
