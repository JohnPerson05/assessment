"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const { scrollY } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (latest / height) * 100 : 0
      setScrollProgress(progress)
    })
  }, [scrollY])

  if (!isMounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 z-50"
        style={{
          scaleX: scrollProgress / 100,
          transformOrigin: "0%",
        }}
      />

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="relative"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.3,
            }}
          >
            <motion.div
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{
                scale: scrollProgress > index * 20 ? [1, 1.5, 1] : 1,
                opacity: scrollProgress > index * 20 ? 1 : 0.3,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Outer ring effect */}
            <motion.div
              className="absolute inset-0 w-3 h-3 border border-primary-500 rounded-full"
              animate={{
                scale: scrollProgress > index * 20 ? [1, 2, 1] : 1,
                opacity: scrollProgress > index * 20 ? 0.6 : 0.1,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
        animate={{
          opacity: scrollProgress < 95 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 border border-white/40 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
