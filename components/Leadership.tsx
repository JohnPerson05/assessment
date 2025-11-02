'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const leaders = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP at LinkedIn with 15+ years in HR tech. Passionate about transforming recruitment.',
      image: '👩‍💼',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'AI researcher and engineer. Led tech teams at Google and Microsoft. Building the future of hiring.',
      image: '👨‍💻',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with expertise in SaaS and user experience. Making recruitment delightful.',
      image: '👩‍🎨',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'David Park',
      role: 'Head of Customer Success',
      bio: 'Customer advocate with a track record of 98% satisfaction rates. Your success is our success.',
      image: '👨‍🏫',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Meet Our <span className="text-primary-500">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced leaders dedicated to revolutionizing recruitment
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image/Avatar */}
                <div className={`h-64 bg-gradient-to-br ${leader.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                  {leader.image}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiLinkedin />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiTwitter />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiMail />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join team CTA */}
        <motion.div
          className="mt-16 text-center p-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            We're always looking for talented individuals who share our passion
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  )
}

