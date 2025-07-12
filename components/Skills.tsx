'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 92 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 87 },
        { name: 'PostgreSQL', level: 83 },
        { name: 'Firebase', level: 90 },
        { name: 'Redis', level: 78 },
      ],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Git/GitHub', level: 93 },
        { name: 'Docker', level: 82 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'PWAs', level: 88 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Globe,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Vercel', level: 92 },
        { name: 'Netlify', level: 88 },
        { name: 'CI/CD', level: 83 },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map(({ title, icon: Icon, skills }, categoryIndex) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <Icon className="w-8 h-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>

              <div className="space-y-4">
                {skills.map(({ name, level }, skillIndex) => (
                  <div key={name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{name}</span>
                      <span className="text-primary-400 text-sm font-semibold">
                        {level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Angular',
              'Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'MongoDB',
              'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure',
              'Git', 'GitHub', 'Figma', 'Adobe XD', 'Tailwind CSS', 'SASS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
