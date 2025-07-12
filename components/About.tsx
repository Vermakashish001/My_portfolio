'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Code, Coffee, Award } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: User, value: '100+', label: 'Happy Clients' },
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Full Stack Developer & UI/UX Designer
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience
              creating digital experiences that are not only visually appealing but
              also highly functional and user-friendly.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in React, Next.js, Node.js, and modern web technologies.
              I love turning complex problems into simple, beautiful, and intuitive
              solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Frontend</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Backend</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-6"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={2500}
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-effect">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full opacity-30 blur-lg animate-pulse" />
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-gray-400">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
