'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-[100vw] glass-effect bg-grey-900/80 backdrop-blur-sm'>
      <div className="w-[100vw] ">
          <div className="flex justify-between items-center gap-4 px-5 py-3">
            {/* Name and Copyright */}
            <div className="text-center sm:text-left">
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white font-adlery-pro"
              >
                Kashish
              </motion.h3>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-14 h-14 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/30 rounded-3xl flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm overflow-hidden"
              aria-label="Scroll to top"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow icon */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              
              {/* Small dots decoration */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
            </motion.button>
          </div>
        </div>
    </footer>
  )
}

export default Footer
