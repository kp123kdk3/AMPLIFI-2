'use client'

import { motion } from 'framer-motion'
import { Rocket, Brain, Gauge, Users } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    value: '2-3x',
    label: 'Faster Implementation',
    description: 'Accelerate your AI initiatives',
    icon: Rocket,
  },
  {
    value: '40%',
    label: 'Cost Savings',
    description: 'Versus traditional hiring',
    icon: Brain,
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    description: 'From startups to enterprises',
    icon: Users,
  },
]

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Accelerate Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Startup Growth
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Access top-tier AI and digital transformation expertise without the overhead of
                full-time hires. Get matched with consultants who understand your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center gap-4 rounded-3xl bg-white/60 px-8 py-10 backdrop-blur-sm ring-1 ring-gray-100 hover:ring-blue-100 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold tracking-tight text-blue-600">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-base font-semibold text-gray-900">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 