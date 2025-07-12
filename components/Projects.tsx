'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Globe, Database, Code, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Stripe payments, and MongoDB. Features include user authentication, cart management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'Next.js', icon: '/assets/icons/nextjs-svgrepo-com.svg' },
        { name: 'TypeScript', icon: '/assets/icons/typescript-official-svgrepo-com.svg' },
        { name: 'MongoDB', icon: '/assets/icons/mongo-svgrepo-com.svg' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwind-svgrepo-com.svg' }
      ],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'React', icon: '/assets/icons/react-svgrepo-com.svg' },
        { name: 'Node.js', icon: '/assets/icons/nodejs-icon-svgrepo-com.svg' },
        { name: 'MySQL', icon: '/assets/icons/mysql-svgrepo-com.svg' },
        { name: 'Express.js', icon: '/assets/icons/express-svgrepo-com.svg' }
      ],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'React', icon: '/assets/icons/react-svgrepo-com.svg' },
        { name: 'JavaScript', icon: '/assets/icons/js-svgrepo-com.svg' },
        { name: 'CSS3', icon: '/assets/icons/css-3-svgrepo-com.svg' }
      ],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, post management, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'Node.js', icon: '/assets/icons/nodejs-icon-svgrepo-com.svg' },
        { name: 'Express.js', icon: '/assets/icons/express-svgrepo-com.svg' },
        { name: 'MongoDB', icon: '/assets/icons/mongo-svgrepo-com.svg' }
      ],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'Next.js', icon: '/assets/icons/nextjs-svgrepo-com.svg' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwind-svgrepo-com.svg' },
        { name: 'TypeScript', icon: '/assets/icons/typescript-official-svgrepo-com.svg' }
      ],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course management, progress tracking, and interactive learning modules.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: [
        { name: 'React', icon: '/assets/icons/react-svgrepo-com.svg' },
        { name: 'Node.js', icon: '/assets/icons/nodejs-icon-svgrepo-com.svg' },
        { name: 'MySQL', icon: '/assets/icons/mysql-svgrepo-com.svg' }
      ],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || !inView) {
      setProgress(0)
      return
    }

    const duration = 4000 // 4 seconds
    const intervalTime = 50 // Update progress every 50ms
    let elapsed = 0

    const progressInterval = setInterval(() => {
      elapsed += intervalTime
      const newProgress = (elapsed / duration) * 100
      setProgress(newProgress)

      if (elapsed >= duration) {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
        elapsed = 0
        setProgress(0)
      }
    }, intervalTime)

    return () => clearInterval(progressInterval)
  }, [isAutoPlaying, inView, projects.length, currentIndex])

  // Reset progress when manually navigating
  const resetProgress = () => {
    setProgress(0)
  }

  // Pause auto-play when user interacts
  const handleManualNavigation = () => {
    setIsAutoPlaying(false)
    resetProgress()
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    handleManualNavigation()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    handleManualNavigation()
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Database className="w-5 h-5" />
      case 'Frontend':
        return <Globe className="w-5 h-5" />
      case 'Backend':
        return <Code className="w-5 h-5" />
      case 'Web App':
        return <Smartphone className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-[96vw] mx-auto ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="hidden  lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect p-4 lg:p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 lg:h-48 object-cover rounded-lg"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="text-base lg:text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-xs lg:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1 lg:gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2 lg:px-3 py-1 bg-black/40 border border-white/20 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm flex items-center gap-1"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={12}
                      height={12}
                      className="w-2.5 h-2.5 lg:w-3 lg:h-3"
                    />
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-2 lg:px-3 rounded-lg flex items-center justify-center gap-1 lg:gap-2 transition-all duration-200 text-xs lg:text-sm"
                >
                  <ExternalLink size={12} className="lg:w-3.5 lg:h-3.5" />
                  <span>Live</span>
                </motion.a>
                
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-2 lg:px-3 rounded-lg flex items-center justify-center gap-1 lg:gap-2 transition-all duration-200 text-xs lg:text-sm"
                >
                  <Github size={12} className="lg:w-3.5 lg:h-3.5" />
                  <span>Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="glass-effect p-4 sm:p-6 rounded-xl mx-2 sm:mx-0">
                    <div className="relative mb-3 sm:mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="flex items-center gap-1 px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2 sm:px-3 py-1 bg-black/40 border border-white/20 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm flex items-center gap-1"
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={12}
                            height={12}
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                          />
                          <span className="whitespace-nowrap">{tech.name}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 text-xs sm:text-sm"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        <span>Live</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 text-xs sm:text-sm"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Auto-rotation Progress Bar */}
          {isAutoPlaying && (
            <div className="mt-2 w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gray-500 to-gray-300 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          )}

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-4 sm:mt-6 px-4 sm:px-0">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </motion.button>

            {/* Center Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Auto-play Toggle */}
              <motion.button
                onClick={toggleAutoPlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full text-white transition-all duration-200 ${
                  isAutoPlaying 
                    ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/40' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                title={isAutoPlaying ? 'Pause auto-rotation' : 'Start auto-rotation'}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-1.5 sm:gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      handleManualNavigation() // Use the new function instead of directly setting state
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
