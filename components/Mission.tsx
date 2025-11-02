'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from '@/components/AnimationWrappers'

export default function Mission() {

  const values = [
    {
      icon: <FiTarget className="w-10 h-10" />,
      title: 'Our Mission',
      description:
        'To revolutionize the hiring process by making it faster, smarter, and more human. We believe that finding the right talent should be simple and effective for everyone.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiEye className="w-10 h-10" />,
      title: 'Our Vision',
      description:
        'A world where every organization has access to cutting-edge recruitment technology, empowering them to build exceptional teams that drive innovation and growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiHeart className="w-10 h-10" />,
      title: 'Our Values',
      description:
        'Innovation, integrity, and inclusivity guide everything we do. We are committed to building technology that serves people, respects diversity, and creates opportunities.',
      color: 'from-red-500 to-orange-500',
    },
  ]

  return (
    <section
      id="mission"
      className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-md text-primary-300 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
              Mission & Vision
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What <span className="text-primary-400">Drives Us</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our purpose, vision, and values shape every decision we make
            </p>
          </FadeInUp>
        </div>

        {/* Values Grid with Stagger */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="h-full p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-primary-500/50 smooth-transition hover:bg-white/10 will-animate">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 smooth-transition -z-10`} />
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Quote section */}
        <PopIn delay={0.5}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl border border-white/10">
              <div className="text-6xl text-primary-400 mb-6">&quot;</div>
              <p className="text-2xl md:text-3xl text-white font-light italic mb-6 leading-relaxed">
                We believe that great teams build great companies. Our mission is
                to help you find those exceptional people who will shape your
                future.
              </p>
              <div className="text-primary-300 font-semibold">
                — ATS Leadership Team
              </div>
            </div>
          </div>
        </PopIn>

        {/* Stats */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: '2020', label: 'Founded' },
              { value: '10K+', label: 'Companies Trust Us' },
              { value: '50+', label: 'Countries' },
              { value: '99.9%', label: 'Customer Satisfaction' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
