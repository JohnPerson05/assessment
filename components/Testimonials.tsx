'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'HR Director',
      company: 'Tech Innovations Ltd.',
      quote:
        'ATS transformed our hiring process completely. We reduced our time-to-hire by 60% and the quality of candidates has improved dramatically. The AI screening is incredibly accurate!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Patel',
      role: 'Talent Acquisition Manager',
      company: 'Global Solutions Inc.',
      quote:
        'The automation features saved us countless hours. What used to take weeks now takes days. The team collaboration tools are exactly what we needed. Highly recommended!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'StartUp Ventures',
      quote:
        'As a fast-growing startup, we needed a scalable solution. ATS delivered beyond expectations. The analytics help us make data-driven decisions and improve our hiring strategy.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Maria Garcia',
      role: 'Recruitment Lead',
      company: 'Enterprise Corp',
      quote:
        'Outstanding platform with exceptional support. The customization options allowed us to tailor it perfectly to our needs. Our candidate experience has improved significantly.',
      rating: 5,
      avatar: '👩‍🎓',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Happy clients, <span className="text-primary-500">trusted results!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our customers trust us for one simple reason — we deliver what we
            promise: quality, faster hiring, and total project confidence.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="text-6xl text-primary-200 mb-4">&quot;</div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {testimonials[currentIndex].quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at{' '}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-500 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-primary-500'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  } rounded-full`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-500 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10,000+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

