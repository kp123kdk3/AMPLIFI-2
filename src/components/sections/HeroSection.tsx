'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion, useAnimationControls } from 'framer-motion'
import Link from 'next/link'
import { BrainCircuit, Sparkles, Network, Workflow } from 'lucide-react'
import { useEffect } from 'react'

const IconCard = ({ 
  icon: Icon, 
  label, 
  color, 
  delay 
}: { 
  icon: any, 
  label: string, 
  color: string,
  delay: number 
}) => {
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start({
      y: [20, 0],
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay,
        opacity: { duration: 0.4 }
      }
    })
  }, [controls, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col items-center gap-3 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Card content with continuous animation */}
      <motion.div
        className="relative flex flex-col items-center gap-3"
        animate={{
          y: [0, -4, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className={`relative p-2 rounded-xl ${color}`}>
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.5} />
          {/* Animated pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              boxShadow: [
                `0 0 0 0px ${color}`,
                `0 0 0 8px transparent`
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 relative z-10">{label}</span>
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ['Amplify Your Business', 'With AI Solutions'],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 80,
    typeSpeed: 100,
  })

  const iconCards = [
    { 
      icon: BrainCircuit, 
      label: 'AI Intelligence',
      color: 'text-blue-600 bg-blue-50',
      delay: 0.2 
    },
    { 
      icon: Network, 
      label: 'Neural Networks',
      color: 'text-violet-600 bg-violet-50',
      delay: 0.4 
    },
    { 
      icon: Workflow, 
      label: 'Automation',
      color: 'text-blue-500 bg-blue-50',
      delay: 0.6 
    },
    { 
      icon: Sparkles, 
      label: 'Innovation',
      color: 'text-violet-500 bg-violet-50',
      delay: 0.8 
    }
  ]

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left mt-8 md:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {text}
              </span>
              <Cursor cursorStyle="_" />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-500 mt-4 max-w-2xl md:max-w-none px-4 sm:px-0"
            >
              Custom AI consulting to automate, optimize, and innovate your business processes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-10"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Icon Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Background decoration */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50 rounded-3xl"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
              
              {/* Icon grid */}
              <div className="relative grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full">
                {iconCards.map((card, index) => (
                  <IconCard key={card.label} {...card} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 