"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

// Custom easing curves for smooth, professional animations
const easings = {
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
}

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Fade in with upward slide
export function FadeInUp({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: easings.easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}

// Pop in with scale effect
export function PopIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        scale: prefersReducedMotion ? 1 : 0.8,
        y: prefersReducedMotion ? 0 : 20,
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: easings.easeOut,
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left
export function SlideInLeft({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right
export function SlideInRight({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}

// Fade in only
export function FadeIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  )
}

// Scale up animation - for images and cards
export function ScaleIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        scale: prefersReducedMotion ? 1 : 0.7,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: easings.easeOut,
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container - for lists and grids
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger item - to be used within StaggerContainer
export function StaggerItem({ children, className = "" }: Omit<AnimationWrapperProps, "delay">) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: prefersReducedMotion ? 0 : 30,
          scale: prefersReducedMotion ? 1 : 0.95,
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: easings.easeOut,
          },
        },
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  )
}

// Reveal with blur effect
export function BlurIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
      }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  )
}

// Rotate in effect
export function RotateIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        rotate: prefersReducedMotion ? 0 : -10,
        scale: prefersReducedMotion ? 1 : 0.9,
      }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: easings.easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}

