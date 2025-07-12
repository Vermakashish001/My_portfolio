'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, User, AtSign, FileText } from 'lucide-react'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kashish854104@gmail.com',
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      )

      if (result.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kashish.854104@gmail.com',
      href: 'mailto:kashish.854104@gmail.com',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 62071 07305',
      href: 'tel:+919876543210',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Katihar, Bihar, India',
      href: 'https://www.google.com/maps/dir/17.4001517,78.3838089/Katihar,+Bihar/@21.4270718,77.5869719,6z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x39faa98e3815bc69:0x7415bf2c57ddfb17!2m2!1d87.5591073!2d25.5540648!3e0?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-gray-600 to-gray-800',
    },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'from-gray-700 to-gray-900' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'from-gray-700 to-gray-900' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'from-gray-700 to-gray-900' },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-7xl ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Drop me a message and let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-white" />
                Get In Touch
              </h3>
              <p className="text-gray-400 mb-8">
                I&apos;m always excited to discuss new opportunities and creative projects. 
                Let&apos;s connect and build something amazing together!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12  rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 font-medium">{label}</div>
                      <div className="text-white text-xs sm:text-base font-semibold">{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-6">
                Follow My Journey
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ name, icon: Icon, href, color }, index) => (
                  <motion.a
                    key={name}
                    href={href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 p-3 bg-black/40 border border-white/20 rounded-xl text-white font-medium hover:bg-black/60 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-white" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <AtSign className="w-4 h-4" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 text-white placeholder-gray-400 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/30 backdrop-blur-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
