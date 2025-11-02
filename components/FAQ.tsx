'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is an Applicant Tracking System (ATS)?',
      answer:
        'An ATS is a software application that helps organizations manage their recruitment process. It automates candidate sourcing, screening, tracking, and communication, making hiring more efficient and data-driven.',
    },
    {
      question: 'How long does it take to set up the ATS?',
      answer:
        'Our onboarding process is designed to be quick and seamless. Most organizations can be fully set up and ready to post their first job within 24 hours. We provide dedicated support to ensure a smooth transition.',
    },
    {
      question: 'Can the ATS integrate with our existing tools?',
      answer:
        'Yes! Our ATS integrates with 50+ popular tools including LinkedIn, Indeed, Slack, Microsoft Teams, Google Workspace, and major HRIS systems. We also offer API access for custom integrations.',
    },
    {
      question: 'Is training provided for our team?',
      answer:
        'Absolutely. We provide comprehensive training for all users, including video tutorials, documentation, live training sessions, and ongoing support. Our customer success team is always available to help.',
    },
    {
      question: 'How does the AI screening work?',
      answer:
        'Our AI analyzes resumes, cover letters, and applications using natural language processing. It evaluates candidates based on your specific requirements, scoring and ranking them automatically. The system learns from your feedback to improve over time.',
    },
    {
      question: 'What about data security and compliance?',
      answer:
        'We take security seriously. Our platform is ISO 27001 certified, GDPR and CCPA compliant, and uses bank-grade encryption. All data is stored in secure, redundant servers with regular backups and 99.9% uptime guarantee.',
    },
    {
      question: 'Can we customize the ATS for our workflow?',
      answer:
        'Yes! The platform is highly customizable. You can create custom workflows, application forms, email templates, evaluation criteria, and reports. We also offer white-labeling options for enterprise clients.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We provide 24/7 customer support via chat, email, and phone. Enterprise customers get a dedicated account manager. We also have an extensive knowledge base, community forum, and regular webinars.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Frequently Asked <span className="text-primary-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our ATS platform
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-dark-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600"
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}

