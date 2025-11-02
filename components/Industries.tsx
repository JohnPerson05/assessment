'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiCode,
  FiDollarSign,
  FiActivity,
  FiShoppingCart,
  FiTruck,
  FiBook,
} from 'react-icons/fi'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const industries = [
    {
      icon: <FiCode className="w-8 h-8" />,
      name: 'Technology',
      description: 'Software, IT, and Tech startups',
      color: 'from-blue-500 to-cyan-500',
      jobs: '15K+ positions',
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      name: 'Finance',
      description: 'Banking, FinTech, and Insurance',
      color: 'from-green-500 to-emerald-500',
      jobs: '8K+ positions',
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      name: 'Healthcare',
      description: 'Medical, Pharma, and Wellness',
      color: 'from-red-500 to-pink-500',
      jobs: '12K+ positions',
    },
    {
      icon: <FiShoppingCart className="w-8 h-8" />,
      name: 'Retail',
      description: 'E-commerce and Traditional retail',
      color: 'from-purple-500 to-indigo-500',
      jobs: '10K+ positions',
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      name: 'Manufacturing',
      description: 'Industrial and Production',
      color: 'from-orange-500 to-amber-500',
      jobs: '9K+ positions',
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      name: 'Education',
      description: 'Schools, Universities, EdTech',
      color: 'from-teal-500 to-cyan-500',
      jobs: '6K+ positions',
    },
  ]

  return (
    <section
      id="industries"
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-md text-primary-300 rounded-full text-sm font-semibold mb-4 border border-primary-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            Industries We Serve
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted Across{' '}
            <span className="text-primary-400">Multiple Sectors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our ATS platform adapts to your industry's unique hiring needs
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all hover:bg-white/10 group-hover:-translate-y-2 duration-300">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {industry.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-400 mb-4">{industry.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">{industry.jobs}</span>
                  <motion.span
                    className="text-primary-400 group-hover:translate-x-2 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
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
          <p className="text-gray-300 mb-6">
            Don't see your industry? We customize solutions for all sectors.
          </p>
          <button className="px-8 py-4 bg-white text-dark-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
            Talk to Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  )
}

