'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyATS() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      number: '01',
      title: 'Proven Expertise',
      description:
        'With decades of experience across India and international markets, we bring deep engineering knowledge and advanced recruitment skills to every organization. Our systems help commercial towers, industries, and residential infrastructure achieve their hiring goals — always ensuring precision, compliance, and safety.',
    },
    {
      number: '02',
      title: 'AI-Powered Precision',
      description:
        'We lead the industry with intelligent automation and AI-driven screening, ensuring dimensionally perfect candidate matching. This innovation minimizes manual effort, improves quality consistency, and reduces time-to-hire by up to 60%.',
    },
    {
      number: '03',
      title: 'Quality Without Compromise',
      description:
        'Every process undergoes multiple levels of quality inspection, validation, and certification in our controlled environment. We are ISO 9001:2015 certified and fully compliant with international standards, ensuring reliability in every hire.',
    },
    {
      number: '04',
      title: 'Smarter, Sustainable Solutions',
      description:
        'Our systems are designed to save resources, reduce effort, and optimize timelines. We continuously improve our methods to align with modern best practices and support sustainable, eco-efficient hiring processes.',
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
            Why Choose ATS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Why Choose{' '}
            <span className="text-primary-500">ATS Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation, expertise, and reliability to transform your
            recruitment process
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              className="flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {reason.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: '60%', label: 'Faster Hiring' },
            { value: '99.9%', label: 'Uptime' },
            { value: '50+', label: 'Integrations' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

