"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient with smooth motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Premium orbital animation system */}
        <motion.div className="mb-12 relative w-96 h-96 flex items-center justify-center">
          {/* Outer ring - rotating */}
          <motion.div
            className="absolute inset-0 border border-purple-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Mid ring - counter-rotating */}
          <motion.div
            className="absolute inset-12 border border-blue-500/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Inner ring - rotating with different speed */}
          <motion.div
            className="absolute inset-24 border border-cyan-500/25 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Outer orbiting elements with smooth floating */}
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={`outer-${angle}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/60 blur-sm"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: `0 -140px`,
              }}
            />
          ))}

          {/* Mid orbiting elements */}
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={`mid-${angle}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: `0 -95px`,
              }}
            />
          ))}

          {/* Inner pulsing elements */}
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={`inner-${angle}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full shadow-lg shadow-cyan-400/40"
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: `0 -60px`,
              }}
            />
          ))}

          {/* Center glowing core with breathing effect */}
          <motion.div
            className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl"
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.2)",
                "0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 40px rgba(6, 182, 212, 0.4)",
                "0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="text-3xl"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title with fade-in slide animation */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            ATS Platform
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Initializing Cinematic Experience
          </motion.p>

          {/* Animated loading dots */}
          <div className="flex gap-3 justify-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.12,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Smooth progress bar fill */}
        <motion.div className="mt-16 w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden mx-auto shadow-lg">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
