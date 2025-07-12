'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const Hero = () => {
  const scrollToNext = () => {
    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">
                Kashish
              </span>
            </motion.h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-8 h-12 sm:h-16">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Frontend Specialist',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-400"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I create beautiful, responsive, and user-friendly web applications
              with modern technologies. Let&apos;s build something amazing together!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-gray-200 transition-colors duration-200 p-2"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2  lg:mb-0"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2500}
              className="rounded-full"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 p-1"
                >
                  <div className="w-full h-full rounded-full bg-black" />
                </motion.div>
                
                <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96  rounded-full overflow-hidden glass-effect">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full opacity-30 blur-lg"
                />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-gray-200 transition-colors duration-200 p-2"
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
