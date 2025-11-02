'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Setup',
      description:
        'We analyze your hiring needs and configure the ATS to match your workflow. Quick onboarding gets you started in 24 hours.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      phase: 'Phase 2',
      title: 'Integration & Training',
      description:
        'Connect your existing tools and train your team. Our experts ensure seamless adoption across your organization.',
      icon: '🔗',
      color: 'from-purple-500 to-pink-500',
    },
    {
      phase: 'Phase 3',
      title: 'Optimization & Growth',
      description:
        'Fine-tune processes based on data insights. Scale your hiring operations with AI-powered recommendations.',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
    },
    {
      phase: 'Phase 4',
      title: 'Continuous Excellence',
      description:
        'Ongoing support and updates keep you ahead. Regular check-ins ensure maximum ROI and hiring success.',
      icon: '⭐',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Your Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Journey with <span className="text-primary-500">ATS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to success, we're with you every step of the way
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-green-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'md:float-right' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-3">
                      {step.phase}
                    </span>
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-4xl shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}

