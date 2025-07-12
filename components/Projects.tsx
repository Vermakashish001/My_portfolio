'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const Projects = () => {
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
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, post management, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course management, progress tracking, and interactive learning modules.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Redis'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ]

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
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
              >
                <div className="glass-effect rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-primary-600 hover:bg-primary-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </motion.a>
                        
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-dark-700 hover:bg-dark-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-2 px-3 py-1 bg-primary-600/90 text-white text-sm rounded-full">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-accent-600/90 text-white text-sm rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
