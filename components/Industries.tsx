"use client"

import { motion } from "framer-motion"
import { FiCode, FiDollarSign, FiActivity, FiShoppingCart, FiTruck, FiBook } from "react-icons/fi"
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers"
import { useScrollParallax } from "@/hooks/useScrollAnimation"

export default function Industries() {
  const parallaxAnimation = useScrollParallax(0.5)

  const galleryImages = [
    { id: 1, color: "from-pink-500 to-rose-500", rotation: -8 },
    { id: 2, color: "from-purple-500 to-pink-500", rotation: 5 },
    { id: 3, color: "from-indigo-500 to-purple-500", rotation: -3 },
    { id: 4, color: "from-blue-500 to-indigo-500", rotation: 4 },
  ]

  const industries = [
    {
      icon: <FiCode className="w-8 h-8" />,
      name: "Technology",
      description: "Software, IT, and Tech startups",
      color: "from-blue-500 to-cyan-500",
      jobs: "15K+ positions",
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      name: "Finance",
      description: "Banking, FinTech, and Insurance",
      color: "from-green-500 to-emerald-500",
      jobs: "8K+ positions",
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      name: "Healthcare",
      description: "Medical, Pharma, and Wellness",
      color: "from-red-500 to-pink-500",
      jobs: "12K+ positions",
    },
    {
      icon: <FiShoppingCart className="w-8 h-8" />,
      name: "Retail",
      description: "E-commerce and Traditional retail",
      color: "from-purple-500 to-indigo-500",
      jobs: "10K+ positions",
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      name: "Manufacturing",
      description: "Industrial and Production",
      color: "from-orange-500 to-amber-500",
      jobs: "9K+ positions",
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      name: "Education",
      description: "Schools, Universities, EdTech",
      color: "from-teal-500 to-cyan-500",
      jobs: "6K+ positions",
    },
  ]

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Parallax gallery decoration */}
      <motion.div
        ref={parallaxAnimation.ref}
        className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-20"
        style={{ y: parallaxAnimation.y }}
      >
        <StaggerContainer staggerDelay={0.15}>
          {galleryImages.map((img, index) => (
            <StaggerItem key={img.id}>
              <motion.div
                className={`absolute w-48 h-56 rounded-2xl bg-gradient-to-br ${img.color} will-animate`}
                style={{
                  right: `${index * 80}px`,
                  bottom: `${index * 60}px`,
                }}
                initial={{ rotate: img.rotation - 15 }}
                whileInView={{ rotate: img.rotation }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-md text-primary-300 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
              Industries We Serve
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted Across <span className="text-primary-400">Multiple Sectors</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ATS platform adapts to your industry&apos;s unique hiring needs
            </p>
          </FadeInUp>
        </div>

        {/* Industries Grid with Stagger */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="h-full p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-500/50 smooth-transition hover:bg-white/10 will-animate">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {industry.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-400 mb-4">{industry.description}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-400">{industry.jobs}</span>
                      <motion.span
                        className="text-primary-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <PopIn delay={0.5}>
          <div className="text-center mt-12">
            <FadeInUp delay={0.6}>
              <p className="text-gray-300 mb-6">Don&apos;t see your industry? We customize solutions for all sectors.</p>
            </FadeInUp>
            <motion.button
              className="px-8 py-4 bg-white text-dark-900 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Talk to Our Experts
            </motion.button>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
