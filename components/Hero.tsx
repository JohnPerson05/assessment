"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FiArrowRight, FiPlay } from "react-icons/fi"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()

  const titleY = useTransform(scrollY, [0, 300], [0, 100])
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const buttonScale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI-Powered Recruitment Platform
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Control{" "}
            <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mx-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </span>{" "}
            Your
            <br />
            Mind{" "}
            <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mx-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🧠
              </motion.div>
            </span>{" "}
            <span className="italic font-serif">Manifest</span>
            <br />
            Your{" "}
            <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mx-2">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                🎯
              </motion.div>
            </span>{" "}
            Reality
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your hiring process with our intelligent ATS platform. Find the perfect candidates faster with
            AI-powered screening and seamless workflow automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ scale: buttonScale }}
          >
            <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary-600 transition-all hover:scale-105 shadow-lg shadow-primary-500/50">
              Get Started Free
              <FiArrowRight />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/20">
              <FiPlay />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: "10K+", label: "Companies" },
              { value: "500K+", label: "Candidates" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-3">
          {/* Animated circle indicator */}
          <motion.div
            className="w-6 h-6 border-2 border-white/40 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Secondary circle */}
          <motion.div
            className="w-4 h-4 border-2 border-white/20 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
          />

          {/* Scroll chevron */}
          <motion.div
            className="w-1 h-6 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
