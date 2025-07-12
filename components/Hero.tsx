'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import ProfileImage from '@/public/assets/images/profile.png'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

const Hero = () => {
  const scrollToNext = () => {
    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 mt-[3rem] sm:mt-0 section-padding md:min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 items-center">
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
                href="/assets/files/kashishAts.pdf"
                download="Kashish_CV.pdf"
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
                { icon: Github, href: 'https://github.com/Vermakashish001', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vermakashish001/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kashish854104@gmail.com', label: 'Email' },
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
                <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96  rounded-full overflow-hidden">
                    <Image
                        src={ProfileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero
