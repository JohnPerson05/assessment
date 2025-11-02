'use client'

import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from '@/components/AnimationWrappers'

export default function Leadership() {

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
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Meet Our <span className="text-primary-500">Leadership</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders dedicated to revolutionizing recruitment
            </p>
          </FadeInUp>
        </div>

        {/* Team Grid with Stagger */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <StaggerItem key={leader.name}>
                <motion.div
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl smooth-transition will-animate">
                    {/* Image/Avatar */}
                    <div className={`h-64 bg-gradient-to-br ${leader.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                      {leader.image}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center gap-4">
                        <motion.a
                          href="#"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white smooth-transition"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiLinkedin />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white smooth-transition"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiTwitter />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white smooth-transition"
                          whileHover={{ scale: 1.15 }}
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
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Join team CTA */}
        <PopIn delay={0.5}>
          <div className="mt-16 text-center p-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl">
            <FadeInUp delay={0.6}>
              <h3 className="text-3xl font-bold text-white mb-4">
                Join Our Growing Team
              </h3>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <p className="text-white/90 mb-6 text-lg">
                We&apos;re always looking for talented individuals who share our passion
              </p>
            </FadeInUp>

            <motion.button
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
