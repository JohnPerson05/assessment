'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">About ATS</h3>
                  <p className="text-lg opacity-90">
                    Revolutionizing Recruitment
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-4xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              About ATS Platform
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Empowering Organizations with{' '}
              <span className="text-primary-500">Smart Hiring</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              We are a leading innovator in applicant tracking solutions,
              dedicated to transforming the recruitment landscape. Our expertise
              lies in designing intelligent systems that streamline hiring
              workflows and connect organizations with top talent.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Through advanced AI technology, intuitive interfaces, and
              data-driven insights, every aspect is designed to deliver results.
              From automated candidate screening to seamless team collaboration,
              our platform minimizes manual effort, improves quality, and
              reduces time-to-hire by up to 60%.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'AI-Powered',
                  desc: 'Smart screening',
                },
                {
                  icon: '⚡',
                  title: 'Fast',
                  desc: '60% faster hiring',
                },
                {
                  icon: '🔒',
                  title: 'Secure',
                  desc: 'Data protected',
                },
                {
                  icon: '📊',
                  title: 'Analytics',
                  desc: 'Deep insights',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

