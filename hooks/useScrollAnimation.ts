"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion"

// Types for scroll animation options
interface ScrollAnimationOptions {
  startOffset?: string
  endOffset?: string
  opacityRange?: number[]
  scaleRange?: number[]
  yRange?: number[]
}

interface ScrollPopOptions {
  startOffset?: string
  endOffset?: string
  scaleFrom?: number
  scaleTo?: number
}

interface ScrollImageZoomOptions {
  startOffset?: string
  endOffset?: string
  scaleFrom?: number
  scaleTo?: number
}

interface ScrollFadeInOptions {
  startOffset?: string
  endOffset?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

// Check if user prefers reduced motion for accessibility
export function useAccessibleMotion() {
  const prefersReducedMotion = useReducedMotion()
  return prefersReducedMotion
}

// Enhanced scroll animation with better easing and triggers
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const {
    startOffset = "start 0.9",
    endOffset = "end 0.1",
    opacityRange = [0, 1, 1],
    scaleRange = [0.85, 1, 1],
    yRange = [60, 0, 0],
  } = options

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Always call hooks - pass container or ref based on mount state
  const { scrollYProgress } = useScroll(
    isMounted && ref.current
      ? {
          target: ref,
          offset: [startOffset, endOffset] as any,
        }
      : { container: typeof window !== 'undefined' ? { current: document.body } : undefined }
  )

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], opacityRange)
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8], scaleRange)
  const y = useTransform(scrollYProgress, [0, 0.3, 0.8], yRange)

  // Return static values if not ready, otherwise animated values
  const shouldAnimate = isMounted && !prefersReducedMotion && ref.current

  return {
    ref,
    opacity: shouldAnimate ? opacity : 1,
    scale: shouldAnimate ? scale : 1,
    y: shouldAnimate ? y : 0,
    scrollYProgress,
  }
}

// Pop animation - scale from small to normal with fade
export function useScrollPop(options: ScrollPopOptions = {}) {
  const ref = useRef<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const {
    startOffset = "start 0.85",
    endOffset = "start 0.3",
    scaleFrom = 0.7,
    scaleTo = 1,
  } = options

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll(
    isMounted && ref.current
      ? {
          target: ref,
          offset: [startOffset, endOffset] as any,
        }
      : { container: typeof window !== 'undefined' ? { current: document.body } : undefined }
  )

  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, scaleTo * 1.02, scaleTo])
  const opacityAnim = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.8, 1])
  const yAnim = useTransform(scrollYProgress, [0, 1], [40, 0])

  const shouldAnimate = isMounted && !prefersReducedMotion && ref.current

  return {
    ref,
    scale: shouldAnimate ? scaleAnim : 1,
    opacity: shouldAnimate ? opacityAnim : 1,
    y: shouldAnimate ? yAnim : 0,
    scrollYProgress,
  }
}

// Image zoom effect - cinematic parallax zoom
export function useScrollImageZoom(options: ScrollImageZoomOptions = {}) {
  const ref = useRef<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const {
    startOffset = "start end",
    endOffset = "end start",
    scaleFrom = 0.9,
    scaleTo = 1.15,
  } = options

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll(
    isMounted && ref.current
      ? {
          target: ref,
          offset: [startOffset, endOffset] as any,
        }
      : { container: typeof window !== 'undefined' ? { current: document.body } : undefined }
  )

  const scaleAnim = useTransform(scrollYProgress, [0, 0.4, 1], [scaleFrom, 1, scaleTo])
  const opacityAnim = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.5])
  const yAnim = useTransform(scrollYProgress, [0, 1], [50, -50])

  const shouldAnimate = isMounted && !prefersReducedMotion && ref.current

  return {
    ref,
    scale: shouldAnimate ? scaleAnim : 1,
    opacity: shouldAnimate ? opacityAnim : 1,
    y: shouldAnimate ? yAnim : 0,
    scrollYProgress,
  }
}

// Fade in reveal - simple fade with optional slide
export function useScrollFadeIn(options: ScrollFadeInOptions = {}) {
  const ref = useRef<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const {
    startOffset = "start 0.85",
    endOffset = "start 0.5",
    direction = "up",
    distance = 30,
  } = options

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll(
    isMounted && ref.current
      ? {
          target: ref,
          offset: [startOffset, endOffset] as any,
        }
      : { container: typeof window !== 'undefined' ? { current: document.body } : undefined }
  )

  const opacityAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1])
  
  // Always call hooks unconditionally - Rules of Hooks requirement
  const yUp = useTransform(scrollYProgress, [0, 1], [distance, 0])
  const yDown = useTransform(scrollYProgress, [0, 1], [-distance, 0])
  const xLeft = useTransform(scrollYProgress, [0, 1], [distance, 0])
  const xRight = useTransform(scrollYProgress, [0, 1], [-distance, 0])
  
  // Select the right values based on direction
  let xAnim: MotionValue<number> = xLeft
  let yAnim: MotionValue<number> = yUp
  
  switch (direction) {
    case "up":
      yAnim = yUp
      break
    case "down":
      yAnim = yDown
      break
    case "left":
      xAnim = xLeft
      break
    case "right":
      xAnim = xRight
      break
  }

  const shouldAnimate = isMounted && !prefersReducedMotion && ref.current

  return {
    ref,
    opacity: shouldAnimate ? opacityAnim : 1,
    x: shouldAnimate && (direction === 'left' || direction === 'right') ? xAnim : 0,
    y: shouldAnimate && (direction === 'up' || direction === 'down') ? yAnim : 0,
    scrollYProgress,
  }
}

// Parallax effect for backgrounds and images
export function useScrollParallax(speed = 0.5) {
  const ref = useRef<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll(
    isMounted && ref.current
      ? {
          target: ref,
          offset: ["start end", "end start"] as any,
        }
      : { container: typeof window !== 'undefined' ? { current: document.body } : undefined }
  )

  const yAnim = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])

  const shouldAnimate = isMounted && !prefersReducedMotion && ref.current

  return {
    ref,
    y: shouldAnimate ? yAnim : 0,
    scrollYProgress,
  }
}

// Stagger children animation hook
export function useStaggerAnimation(childCount: number, staggerDelay = 0.1) {
  return Array.from({ length: childCount }, (_, i) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: {
      duration: 0.6,
      delay: i * staggerDelay,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
    },
  }))
}
