"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useScrollImageZoom, useScrollFadeIn } from "@/hooks/useScrollAnimation"
import { FadeInUp, PopIn, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers"

export default function About() {
  const imageAnimation = useScrollImageZoom({ scaleFrom: 0.8, scaleTo: 1.1 })
  const textAnimation = useScrollFadeIn({ direction: "up", distance: 40 })

  const images = [
    { id: 1, delay: 0, offset: "0%", rotation: -2, zIndex: 10 },
    { id: 2, delay: 0.1, offset: "15%", rotation: 1, zIndex: 8 },
    { id: 3, delay: 0.2, offset: "30%", rotation: -1, zIndex: 6 },
    { id: 4, delay: 0.3, offset: "45%", rotation: 2, zIndex: 4 },
  ]

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image Gallery with cinematic zoom & fade */}
          <motion.div
            ref={imageAnimation.ref}
            className="relative h-[500px] gpu-accelerated"
            style={{ scale: imageAnimation.scale, opacity: imageAnimation.opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />

            <StaggerContainer>
              {images.map((img) => (
                <StaggerItem key={img.id}>
                  <motion.div
                    className="absolute w-48 h-64 rounded-2xl shadow-2xl overflow-hidden will-animate"
                    style={{
                      left: img.offset,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: img.zIndex,
                    }}
                    initial={{ rotate: img.rotation * 2 }}
                    whileInView={{ rotate: img.rotation }}
                    whileHover={{ scale: 1.08, zIndex: 50, transition: { duration: 0.3 } }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                      {["🚀", "⚡", "🎯", "🔥"][img.id - 1]}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* Right side - Content with smooth scroll animations */}
          <div>
            <PopIn delay={0.1}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                About Our Platform
              </div>
            </PopIn>

            <FadeInUp delay={0.2}>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering Organizations with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Hiring
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a leading innovator in applicant tracking solutions, dedicated to transforming the recruitment
                landscape. Our expertise lies in designing intelligent systems that streamline hiring workflows and
                connect organizations with top talent.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through advanced AI technology, intuitive interfaces, and data-driven insights, every aspect is designed
                to deliver results. From automated candidate screening to seamless team collaboration.
              </p>
            </FadeInUp>

            <PopIn delay={0.5}>
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200">
                {[
                  { number: 60, label: "% Faster" },
                  { number: 10, label: "K+ Candidates" },
                  { number: 99, label: "% Accuracy" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <CountingNumber end={stat.number} delay={0.6 + index * 0.1} />
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </PopIn>

            <StaggerContainer staggerDelay={0.08}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎯", title: "AI-Powered", desc: "Smart screening" },
                  { icon: "⚡", title: "Fast", desc: "Speed optimized" },
                  { icon: "🔒", title: "Secure", desc: "Data protected" },
                  { icon: "📊", title: "Analytics", desc: "Deep insights" },
                ].map((feature) => (
                  <StaggerItem key={feature.title}>
                    <motion.div
                      className="p-4 rounded-xl bg-gray-50 hover:bg-blue-50 smooth-transition cursor-pointer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

function CountingNumber({ end, delay }: { end: number; delay: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const timer = setTimeout(() => {
      setHasAnimated(true)
      const increment = end / 30
      const counter = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment
          if (next >= end) {
            clearInterval(counter)
            return end
          }
          return next
        })
      }, 40)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [hasAnimated, end, delay])

  return (
    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {Math.floor(count)}
      {end === 99 ? "%" : "+"}
    </div>
  )
}
