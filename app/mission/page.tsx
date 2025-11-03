"use client"

import React, { useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { PopIn, FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers"
import { useScrollParallax } from "@/hooks/useScrollAnimation"
import { ArrowRight, Globe, Heart, Sparkles, Users, Zap } from "lucide-react"
import Link from "next/link"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

export default function MissionPage() {
  const parallaxBg = useScrollParallax({ speed: 0.5 })
  const [gsapLoaded, setGsapLoaded] = React.useState(false)

  // Initialize tsparticles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    if (!gsapLoaded || typeof window === 'undefined') return

    // Initialize all GSAP animations
    const initAnimations = () => {
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger
      const SplitText = (window as any).SplitText

      if (!gsap || !ScrollTrigger || !SplitText) return

      gsap.registerPlugin(ScrollTrigger, SplitText)

      // Mission Title Animation (particle-like from random directions)
      const missionTitle = document.querySelector('[data-split="from-right-blur"]')
      if (missionTitle) {
        const split = new SplitText(missionTitle, { type: "chars" })
        
        // Set each character with random direction and distance
        split.chars.forEach((char: any, index: number) => {
          const randomX = (Math.random() - 0.5) * 8 // Random X: -4rem to 4rem
          const randomY = (Math.random() - 0.5) * 8 // Random Y: -4rem to 4rem
          const randomRotate = (Math.random() - 0.5) * 30 // Random rotation
          
          gsap.set(char, { 
            opacity: 0, 
            x: `${randomX}rem`, 
            y: `${randomY}rem`,
            rotation: randomRotate,
            filter: "blur(0.8rem)",
            scale: 0.8 + Math.random() * 0.4 // Random scale 0.8-1.2
          })
        })
        
        // Make parent visible
        gsap.set(missionTitle, { opacity: 1, visibility: "visible" })
        
        // Animate with particle effect (faster)
        gsap.to(split.chars, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          filter: "blur(0rem)",
          scale: 1,
          duration: 0.8, // Faster: was 1.5s
          stagger: {
            amount: 0.3, // Total stagger time
            from: "random" // Random order for particle effect
          },
          ease: "cubic-bezier(0.16, 1, 0.3, 1.2)",
          delay: 0.2
        })
      }

      // Subtitle Animation (particle-like words)
      const subtitle = document.querySelector('[data-split="from-down-blur"]')
      if (subtitle) {
        const split = new SplitText(subtitle, { type: "words" })
        
        // Set each word with random direction
        split.words.forEach((word: any, index: number) => {
          const randomX = (Math.random() - 0.5) * 6
          const randomY = 2 + Math.random() * 3 // Mostly from below
          
          gsap.set(word, { 
            opacity: 0, 
            x: `${randomX}rem`,
            y: `${randomY}rem`, 
            filter: "blur(0.3rem)",
            scale: 0.9 
          })
        })
        
        // Make parent visible
        gsap.set(subtitle, { opacity: 1, visibility: "visible" })
        
        gsap.to(split.words, {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0rem)",
          scale: 1,
          duration: 0.6, // Faster: was 1.5s
          stagger: {
            amount: 0.2,
            from: "random"
          },
          ease: "cubic-bezier(0.19, 1, 0.22, 1)",
          delay: 0.5
        })
      }

      // Main Heading (WAVE ANIMATION - character-by-character with fast stagger)
      const mainHeading = document.querySelector('[data-split="mission-heading"]')
      if (mainHeading) {
        const split = new SplitText(mainHeading, { type: "chars" })
        gsap.set(split.chars, { 
          opacity: 0, 
          x: "6rem", 
          filter: "blur(0.6rem)" 
        })
        // Make parent visible so animation can be seen
        gsap.set(mainHeading, { opacity: 1, visibility: "visible" })

        ScrollTrigger.create({
          trigger: mainHeading,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(split.chars, {
              opacity: 1,
              x: 0,
              filter: "blur(0rem)",
              duration: 1.5,
              stagger: 0.001, // 🌊 WAVE EFFECT - ultra-fast stagger creates wave ripple
              ease: "cubic-bezier(0.16, 1, 0.3, 1.2)"
            })
          }
        })
      }

      // Paragraphs (line-by-line with blur)
      const paragraphs = document.querySelectorAll('[data-split="paragraph"]')
      paragraphs.forEach((para) => {
        const split = new SplitText(para, { type: "lines" })
        gsap.set(split.lines, { 
          opacity: 0, 
          y: "50%", 
          filter: "blur(0.2rem)" 
        })
        gsap.set(para, { visibility: "visible" })

        ScrollTrigger.create({
          trigger: para,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(split.lines, {
              opacity: 1,
              y: 0,
              filter: "blur(0rem)",
              duration: 1.5,
              stagger: 0.1, // Line-by-line stagger
              ease: "cubic-bezier(0.19, 1, 0.22, 1)"
            })
          }
        })
      })

      // Icon Scale Animation (faster)
      const icon = document.querySelector('[data-animate="icon"]')
      if (icon) {
        gsap.set(icon, { scale: 0.5, opacity: 0, rotation: -180 })
        gsap.to(icon, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2, // Faster: was 2s
          ease: "elastic.out(1, 0.6)",
          delay: 0.8
        })
      }

      // Team Cards with Physics-Based Hover
      let oldX = 0, oldY = 0, deltaX = 0, deltaY = 0

      const handleMouseMove = (e: MouseEvent) => {
        deltaX = e.clientX - oldX
        deltaY = e.clientY - oldY
        oldX = e.clientX
        oldY = e.clientY
      }

      window.addEventListener("mousemove", handleMouseMove)

      const teamCards = document.querySelectorAll('[data-team-card]')
      teamCards.forEach((card, index) => {
        // Entrance animation
        gsap.set(card, { scale: 0.6, opacity: 0 })
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: "cubic-bezier(0.19, 1, 0.22, 1)",
              delay: index * 0.1
            })
          }
        })

        // Hover animation with velocity-based inertia
        card.addEventListener('mouseenter', () => {
          const tl = gsap.timeline({ onComplete: () => tl.kill() })
          tl.timeScale(1.2)

          // Inertia-based movement
          tl.to(card, {
            x: deltaX * 5,
            y: deltaY * 5,
            duration: 0.6,
            ease: "power2.out"
          })

          // Return to center with spring
          tl.to(card, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
          })

          // Random rotation
          tl.fromTo(card, {
            rotate: 0
          }, {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 10,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
          }, '<')
        })
      })

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }

    const timer = setTimeout(initAnimations, 100)
    return () => clearTimeout(timer)
  }, [gsapLoaded])

  useEffect(() => {
    // Load GSAP scripts
    const loadScripts = () => {
      if (typeof window === 'undefined') return

      // Check if already loaded
      if ((window as any).gsap && (window as any).SplitText && (window as any).ScrollTrigger) {
        setGsapLoaded(true)
        return
      }

      // Load GSAP core
      const gsapScript = document.createElement('script')
      gsapScript.src = 'https://cdn.prod.website-files.com/gsap/3.13.0/gsap.min.js'
      gsapScript.async = true
      
      gsapScript.onload = () => {
        // Load SplitText
        const splitTextScript = document.createElement('script')
        splitTextScript.src = 'https://cdn.prod.website-files.com/gsap/3.13.0/SplitText.min.js'
        splitTextScript.async = true
        
        splitTextScript.onload = () => {
          // Load ScrollTrigger
          const scrollTriggerScript = document.createElement('script')
          scrollTriggerScript.src = 'https://cdn.prod.website-files.com/gsap/3.13.0/ScrollTrigger.min.js'
          scrollTriggerScript.async = true
          
          scrollTriggerScript.onload = () => {
            setGsapLoaded(true)
          }
          
          document.head.appendChild(scrollTriggerScript)
        }
        
        document.head.appendChild(splitTextScript)
      }
      
      document.head.appendChild(gsapScript)
    }

    loadScripts()
  }, [])

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-mission"
            init={particlesInit}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: ["#0ea5e9", "#06b6d4", "#38bdf8"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: { min: 0.1, max: 0.5 },
                  animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 1, max: 3 },
                },
                move: {
                  enable: true,
                  speed: 0.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: {
                    default: "out",
                  },
                },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#0ea5e9",
                  opacity: 0.15,
                  width: 1,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  grab: {
                    distance: 140,
                    links: {
                      opacity: 0.3,
                    },
                  },
                  push: {
                    quantity: 4,
                  },
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Animated Background Gradients */}
        <motion.div
          ref={parallaxBg.ref}
          style={{ y: parallaxBg.y }}
          className="absolute inset-0 opacity-20 z-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Title with Blur Animation */}
          <h1 
            data-split="from-right-blur"
            className="text-7xl md:text-9xl font-bold mb-8 tracking-tight text-white"
            style={{ visibility: 'visible', opacity: 0 }}
            aria-label="Mission"
          >
            Mission
          </h1>

          {/* Subtitle */}
          <p 
            data-split="from-down-blur"
            className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
            style={{ visibility: 'visible', opacity: 0 }}
            aria-label="Revolutionizing Talent Acquisition"
          >
            Revolutionizing Talent Acquisition
          </p>

          {/* Animated Icon */}
          <div className="flex justify-center mb-16">
            <div
              data-animate="icon"
              className="relative w-32 h-32 md:w-48 md:h-48"
            >
              <motion.div
                className="w-full h-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Orbital Rings */}
                <div className="absolute inset-0 border-2 border-primary-500/30 rounded-full" />
                <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full" />
                <div className="absolute inset-8 border-2 border-primary-500/30 rounded-full" />
              </motion.div>
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full blur-xl opacity-50" />
                <Users className="absolute w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <FadeInUp delay={0.8}>
            <motion.div
              className="flex flex-col items-center gap-2 text-gray-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative py-32 px-4">
        {/* Particles for Mission Section */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-mission-statement"
            init={particlesInit}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: ["#0ea5e9", "#06b6d4"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: { min: 0.05, max: 0.3 },
                  animation: {
                    enable: true,
                    speed: 0.3,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 1, max: 2 },
                },
                move: {
                  enable: true,
                  speed: 0.3,
                  direction: "none",
                  random: true,
                  straight: false,
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Main Heading - GSAP Character Wave Animation */}
          <h2 
            data-split="mission-heading"
            className="text-5xl md:text-7xl font-bold mb-16 leading-tight"
            style={{ visibility: 'visible', opacity: 0 }}
            aria-label="Our mission is to revolutionize hiring for everyone."
          >
            Our mission is to{" "}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              revolutionize hiring for everyone.
            </span>
          </h2>

          {/* First Paragraph - GSAP Line-by-Line */}
          <p 
            data-split="paragraph"
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            style={{ visibility: 'hidden' }}
            aria-label="The hiring process is broken. For too long, companies have struggled with outdated systems, endless resume screening, and missed opportunities to find exceptional talent. But a transformation is underway, and with it comes the opportunity to unlock the most powerful resource in business—the right people."
          >
            The hiring process is broken. For too long, companies have struggled with outdated 
            systems, endless resume screening, and missed opportunities to find exceptional talent. 
            But a transformation is underway, and with it comes the opportunity to unlock the most 
            powerful resource in business—<span className="text-primary-300 font-semibold">the right people</span>.
          </p>

          {/* Second Paragraph - GSAP Line-by-Line */}
          <p 
            data-split="paragraph"
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            style={{ visibility: 'hidden' }}
            aria-label="Our ATS Platform exists to accelerate this transformation. Our mission is to make hiring faster, smarter, and more human by empowering organizations to streamline recruitment and build exceptional teams."
          >
            Our ATS Platform exists to accelerate this transformation. Our mission is to make 
            hiring faster, smarter, and more human by empowering organizations to streamline 
            recruitment and build exceptional teams that drive innovation.
          </p>

          {/* Third Paragraph - GSAP Line-by-Line */}
          <p 
            data-split="paragraph"
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            style={{ visibility: 'hidden' }}
            aria-label="As the ultimate tool for talent acquisition, our platform merges cutting-edge AI with intuitive design to make recruitment effortless and accessible. By automating workflows, enhancing candidate experience, and providing deep analytics, we give hiring teams the power to find and attract top talent."
          >
            As the ultimate tool for talent acquisition, our platform merges cutting-edge AI 
            with intuitive design to make recruitment effortless and accessible. By automating 
            workflows, enhancing candidate experience, and providing deep analytics, we give 
            hiring teams the power to find and attract top talent.
          </p>

          {/* Fourth Paragraph - GSAP Line-by-Line */}
          <p 
            data-split="paragraph"
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            style={{ visibility: 'hidden' }}
            aria-label="By empowering companies at scale, we are driving a global shift in how talent is discovered. The more organizations access powerful recruitment technology, the more innovation flourishes. With our ATS Platform, technology becomes a force for growth, elevating not just individual companies, but the future of work itself."
          >
            By empowering companies at scale, we are driving a global shift in how talent is 
            discovered. The more organizations access powerful recruitment technology, the more 
            innovation flourishes. With our ATS Platform, technology becomes a force for growth, 
            elevating not just individual companies, but{" "}
            <span className="text-cyan-300 font-semibold">the future of work itself</span>.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-dark-800 to-dark-900">
        {/* Particles for Values Section */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-values"
            init={particlesInit}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 60,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: ["#0ea5e9", "#06b6d4", "#38bdf8"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: { min: 0.1, max: 0.4 },
                  animation: {
                    enable: true,
                    speed: 0.4,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 1, max: 2.5 },
                },
                move: {
                  enable: true,
                  speed: 0.4,
                  direction: "none",
                  random: true,
                  straight: false,
                },
                links: {
                  enable: true,
                  distance: 120,
                  color: "#06b6d4",
                  opacity: 0.1,
                  width: 1,
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <PopIn>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
              What <span className="text-primary-400">Drives Us</span>
            </h2>
          </PopIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Zap className="w-12 h-12 mb-6 text-primary-400" />
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-400 leading-relaxed">
                We constantly push boundaries with cutting-edge AI and automation to 
                make hiring faster and smarter than ever before.
              </p>
            </div>

            {/* Value 2 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Users className="w-12 h-12 mb-6 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4">People-Centric</h3>
              <p className="text-gray-400 leading-relaxed">
                Technology should serve people. We design experiences that feel human, 
                intuitive, and delightful for everyone.
              </p>
            </div>

            {/* Value 3 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Globe className="w-12 h-12 mb-6 text-primary-400" />
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-400 leading-relaxed">
                From startups to enterprises, across 50+ countries—we empower organizations 
                of all sizes to find world-class talent.
              </p>
            </div>

            {/* Value 4 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Heart className="w-12 h-12 mb-6 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4">Integrity Always</h3>
              <p className="text-gray-400 leading-relaxed">
                We build trust through transparency, data security, and ethical AI 
                that respects privacy and diversity.
              </p>
            </div>

            {/* Value 5 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-12 h-12 mb-6 text-primary-400" />
              <h3 className="text-2xl font-bold mb-4">Continuous Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                We're never satisfied. Every day we improve, iterate, and innovate 
                to deliver more value to our customers.
              </p>
            </div>

            {/* Value 6 */}
            <div
              data-team-card
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ArrowRight className="w-12 h-12 mb-6 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4">Results Driven</h3>
              <p className="text-gray-400 leading-relaxed">
                We measure success by your success—faster hires, better matches, 
                and teams that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        {/* Particles for CTA Section */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles-cta"
            init={particlesInit}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: ["#0ea5e9", "#38bdf8"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: { min: 0.2, max: 0.6 },
                  animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 1, max: 3 },
                },
                move: {
                  enable: true,
                  speed: 0.6,
                  direction: "none",
                  random: true,
                  straight: false,
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <PopIn>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-400 bg-clip-text text-transparent">
                Transform Hiring?
              </span>
            </h2>
          </PopIn>

          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join 10,000+ companies that trust our ATS Platform to build exceptional 
              teams and drive business growth.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <Link href="/#hero">
              <motion.button
                className="group relative px-12 py-6 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-full text-lg font-semibold overflow-hidden shadow-lg shadow-primary-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </FadeInUp>
        </div>
      </section>
      </div>
    </>
  )
}

