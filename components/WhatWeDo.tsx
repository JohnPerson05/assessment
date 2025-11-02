'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUsers, FiTarget, FiTrendingUp, FiShield } from 'react-icons/fi'

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Smart Candidate Sourcing',
      description:
        'Leverage AI to find and attract the best talent from multiple channels. Our intelligent algorithms match candidates to your specific requirements.',
      step: '01',
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Automated Screening',
      description:
        'Save time with automated resume parsing and candidate ranking. Our system evaluates qualifications and provides instant insights.',
      step: '02',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Workflow Automation',
      description:
        'Streamline your hiring process with customizable workflows. From application to offer letter, automate every step seamlessly.',
      step: '03',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Compliance & Security',
      description:
        'Stay compliant with industry regulations. Bank-grade security ensures your data and candidates information is always protected.',
      step: '04',
    },
  ]

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 bg-white"
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
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Comprehensive ATS Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sourcing to hiring, we provide end-to-end recruitment solutions
            powered by cutting-edge technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-primary-300 transition-all hover:shadow-xl group-hover:-translate-y-2 duration-300">
                {/* Step number */}
                <div className="absolute top-8 right-8 text-6xl font-bold text-gray-100 group-hover:text-primary-100 transition-colors">
                  {feature.step}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="mt-6 flex items-center text-primary-500 font-semibold group-hover:gap-2 transition-all"
                  initial={{ gap: 0 }}
                >
                  Learn more
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all hover:scale-105 shadow-lg">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}

