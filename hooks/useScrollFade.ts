"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function useScrollFade(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false, // Allow animation to reverse on scroll up
    amount: 0.3,
    margin: "-100px",
    ...options,
  })

  return { ref, isInView }
}
