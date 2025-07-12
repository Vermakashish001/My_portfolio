'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Server } from 'lucide-react'
import Image from 'next/image'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      technologies: [
        { name: 'React', icon: '/assets/icons/react-svgrepo-com.svg' },
        { name: 'Next.js', icon: '/assets/icons/nextjs-svgrepo-com.svg' },
        { name: 'TypeScript', icon: '/assets/icons/typescript-official-svgrepo-com.svg' },
        { name: 'JavaScript', icon: '/assets/icons/js-svgrepo-com.svg' },
        { name: 'HTML5', icon: '/assets/icons/html-5-svgrepo-com.svg' },
        { name: 'CSS3', icon: '/assets/icons/css-3-svgrepo-com.svg' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwind-svgrepo-com.svg' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      technologies: [
        { name: 'Node.js', icon: '/assets/icons/nodejs-icon-svgrepo-com.svg' },
        { name: 'Express.js', icon: '/assets/icons/express-svgrepo-com.svg' },
        { name: 'Python', icon: '/assets/icons/python-svgrepo-com.svg' },
        { name: 'Java', icon: '/assets/icons/java-svgrepo-com.svg' },
        { name: 'MongoDB', icon: '/assets/icons/mongo-svgrepo-com.svg' },
        { name: 'MySQL', icon: '/assets/icons/mysql-svgrepo-com.svg' },
        { name: 'Mongoose', icon: '/assets/icons/mongo-svgrepo-com.svg' }
      ],
    },
    {
      title: 'Tools',
      icon: Palette,
      technologies: [
        { name: 'Git', icon: '/assets/icons/git-svgrepo-com.svg' },
        { name: 'GitHub', icon: '/assets/icons/github-142-svgrepo-com.svg' },
        { name: 'Vercel', icon: '/assets/icons/vercel-icon-svgrepo-com.svg' },
        { name: 'Netlify', icon: '/assets/icons/netlify-svgrepo-com.svg' },
        { name: 'Figma', icon: '/assets/icons/figma-svgrepo-com.svg' },
        { name: 'VS Code', icon: '/assets/icons/vs-code-svgrepo-com.svg' },
        { name: 'Postman', icon: '/assets/icons/postman-icon-svgrepo-com.svg' }
      ],
    },
  ]

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
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map(({ title, icon: Icon, technologies }, categoryIndex) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <Icon className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.2 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-black/40 border border-white/20 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-black/60 hover:border-white/30 transition-all duration-200 cursor-default backdrop-blur-sm flex items-center gap-2"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
