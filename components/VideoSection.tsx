'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiPlay } from 'react-icons/fi'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            See ATS in <span className="text-primary-500">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our platform transforms the hiring process from start to
            finish
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video placeholder / thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
              {!isPlaying && (
                <>
                  {/* Play button */}
                  <motion.button
                    className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 hover:bg-white/30 transition-all group-hover:scale-110 mb-8"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlay className="w-10 h-10 ml-2" />
                  </motion.button>

                  <h3 className="text-3xl font-bold mb-4 text-center">
                    Product Demo Video
                  </h3>
                  <p className="text-lg opacity-90 text-center max-w-2xl">
                    Discover how ATS streamlines your recruitment workflow in
                    just 2 minutes
                  </p>
                </>
              )}

              {isPlaying && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-xl mb-4">
                    🎥 Video player would load here
                  </div>
                  <p className="text-sm opacity-75">
                    (Embed your actual video URL in production)
                  </p>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-white/30 rounded-bl-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Features below video */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              emoji: '⚡',
              title: '2x Faster',
              desc: 'Complete hiring process in half the time',
            },
            {
              emoji: '🎯',
              title: '95% Match Rate',
              desc: 'AI-powered candidate matching accuracy',
            },
            {
              emoji: '💰',
              title: '50% Cost Savings',
              desc: 'Reduce recruitment costs significantly',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h4 className="text-xl font-bold text-dark-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

