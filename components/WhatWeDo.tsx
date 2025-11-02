"use client"

import { motion } from "framer-motion"
import { FiUsers, FiTarget, FiTrendingUp, FiShield } from "react-icons/fi"
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers"
import { useScrollAnimation, useScrollParallax } from "@/hooks/useScrollAnimation"

export default function WhatWeDo() {
  const parallaxAnimation = useScrollParallax(0.3)

  const galleryImages = [
    { id: 1, color: "from-blue-500 to-blue-600", rotation: -5 },
    { id: 2, color: "from-cyan-500 to-blue-500", rotation: 3 },
    { id: 3, color: "from-blue-600 to-indigo-600", rotation: -2 },
  ]

  const features = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Smart Candidate Sourcing",
      description:
        "Leverage AI to find and attract the best talent from multiple channels. Our intelligent algorithms match candidates to your specific requirements.",
      step: "01",
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Automated Screening",
      description:
        "Save time with automated resume parsing and candidate ranking. Our system evaluates qualifications and provides instant insights.",
      step: "02",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Workflow Automation",
      description:
        "Streamline your hiring process with customizable workflows. From application to offer letter, automate every step seamlessly.",
      step: "03",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Compliance & Security",
      description:
        "Stay compliant with industry regulations. Bank-grade security ensures your data and candidates information is always protected.",
      step: "04",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div
        ref={parallaxAnimation.ref}
        className="absolute left-0 top-0 w-96 h-96 pointer-events-none"
        style={{ y: parallaxAnimation.y }}
      >
        <StaggerContainer staggerDelay={0.15}>
          {galleryImages.map((img, index) => (
            <StaggerItem key={img.id}>
              <motion.div
                className={`absolute w-40 h-48 rounded-2xl bg-gradient-to-br ${img.color} shadow-xl opacity-20 will-animate`}
                style={{
                  left: `${index * -40}px`,
                  top: `${index * 60}px`,
                }}
                initial={{ rotate: img.rotation - 10 }}
                whileInView={{ rotate: img.rotation }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">Comprehensive ATS Solutions</h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sourcing to hiring, we provide end-to-end recruitment solutions powered by cutting-edge technology
            </p>
          </FadeInUp>
        </div>

        {/* Features Grid with Stagger */}
        <StaggerContainer staggerDelay={0.12}>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-primary-300 smooth-transition hover:shadow-xl will-animate">
                    <motion.div
                      className="absolute top-8 right-8 text-6xl font-bold text-gray-100 group-hover:text-primary-100 smooth-transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature.step}
                    </motion.div>

                    <motion.div
                      className="relative z-10 w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-6"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-dark-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                    <motion.div className="mt-6 flex items-center text-primary-500 font-semibold">
                      Learn more
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA Button */}
        <PopIn delay={0.6}>
          <div className="text-center mt-12">
            <motion.button
              className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Explore All Features
            </motion.button>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
