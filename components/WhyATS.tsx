"use client"

import { motion } from "framer-motion"
import { FadeInUp, PopIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from "@/components/AnimationWrappers"
import { useScrollParallax } from "@/hooks/useScrollAnimation"

export default function WhyATS() {
  const parallaxAnimation = useScrollParallax(0.4)

  const images = [
    { id: 1, color: "from-blue-500 to-cyan-500" },
    { id: 2, color: "from-purple-500 to-pink-500" },
    { id: 3, color: "from-green-500 to-emerald-500" },
  ]

  const reasons = [
    {
      number: "01",
      title: "Proven Expertise",
      description:
        "With decades of experience across India and international markets, we bring deep engineering knowledge and advanced recruitment skills to every organization. Our systems help commercial towers, industries, and residential infrastructure achieve their hiring goals — always ensuring precision, compliance, and safety.",
    },
    {
      number: "02",
      title: "AI-Powered Precision",
      description:
        "We lead the industry with intelligent automation and AI-driven screening, ensuring dimensionally perfect candidate matching. This innovation minimizes manual effort, improves quality consistency, and reduces time-to-hire by up to 60%.",
    },
    {
      number: "03",
      title: "Quality Without Compromise",
      description:
        "Every process undergoes multiple levels of quality inspection, validation, and certification in our controlled environment. We are ISO 9001:2015 certified and fully compliant with international standards, ensuring reliability in every hire.",
    },
    {
      number: "04",
      title: "Smarter, Sustainable Solutions",
      description:
        "Our systems are designed to save resources, reduce effort, and optimize timelines. We continuously improve our methods to align with modern best practices and support sustainable, eco-efficient hiring processes.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div
        ref={parallaxAnimation.ref}
        className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none"
        style={{ y: parallaxAnimation.y }}
      >
        <StaggerContainer staggerDelay={0.15}>
          {images.map((img, index) => (
            <StaggerItem key={img.id}>
              <motion.div
                className={`absolute w-32 h-40 rounded-2xl bg-gradient-to-br ${img.color} shadow-lg opacity-30 will-animate`}
                style={{
                  right: `${index * 60}px`,
                  top: `${index * 80}px`,
                }}
                initial={{ rotate: -20 }}
                whileInView={{ rotate: 0 }}
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
        {/* Header */}
        <div className="text-center mb-16">
          <PopIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              Why Choose ATS
            </span>
          </PopIn>

          <FadeInUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Why Choose <span className="text-primary-500">ATS Platform</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, expertise, and reliability to transform your recruitment process
            </p>
          </FadeInUp>
        </div>

        {/* Reasons List with alternating slide animations */}
        <div className="space-y-8">
          {reasons.map((reason, index) => {
            const AnimationWrapper = index % 2 === 0 ? SlideInLeft : SlideInRight
            return (
              <AnimationWrapper key={reason.number} delay={0.1 * index}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{reason.number}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift will-animate"
                    whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-dark-900 mb-4">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </motion.div>
                </div>
              </AnimationWrapper>
            )
          })}
        </div>

        {/* Stats Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "60%", label: "Faster Hiring" },
              { value: "99.9%", label: "Uptime" },
              { value: "50+", label: "Integrations" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
