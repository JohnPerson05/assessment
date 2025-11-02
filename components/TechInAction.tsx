'use client'

import { motion } from 'framer-motion'
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from '@/components/AnimationWrappers'

export default function TechInAction() {

  const features = [
    {
      icon: '🎯',
      title: 'Superconscious Activations',
      description:
        'AI-guided activations to shift your energy instantly and align with your hiring goals.',
    },
    {
      icon: '📊',
      title: 'AI-Powered Vibrational Intelligence',
      description:
        'Track and elevate your frequency for faster, more intuitive candidate matching.',
    },
    {
      icon: '🧠',
      title: 'Hyper-Personalized Screening',
      description:
        'Tap into the frequency of your ideal candidates with custom AI insights.',
    },
    {
      icon: '12',
      title: 'Daily Insights & AI Feedback',
      description:
        'Reflect, refine, and align with AI-powered daily recruitment insights.',
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">How It Works</span>
            </div>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech in Action
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven recruitment technology
            </p>
          </FadeInUp>
        </div>

        {/* Features Grid with Stagger */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="h-full p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-primary-500/50 smooth-transition hover:bg-white/10 will-animate">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl mb-6"
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover arrow */}
                    <motion.div
                      className="mt-6 text-primary-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more →
                    </motion.div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Bottom CTA */}
        <PopIn delay={0.5}>
          <div className="text-center mt-16">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold shadow-2xl text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Experience the Platform
            </motion.button>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
