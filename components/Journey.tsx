'use client'

import { motion } from 'framer-motion'
import { FadeInUp, PopIn, SlideInLeft, SlideInRight } from '@/components/AnimationWrappers'

export default function Journey() {

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              Your Journey
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Journey with <span className="text-primary-500">ATS</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to success, we&apos;re with you every step of the way
            </p>
          </FadeInUp>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-green-500 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const AnimationWrapper = index % 2 === 0 ? SlideInLeft : SlideInRight
              return (
                <AnimationWrapper key={step.phase} delay={0.15 * index}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
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
                        className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-4xl shadow-xl will-animate`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimationWrapper>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <PopIn delay={0.7}>
          <div className="text-center mt-16">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
