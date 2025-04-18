'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  BrainCircuit, 
  Bot, 
  Cog, 
  LineChart,
  MessageSquareCode,
  Workflow,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    title: 'AI Strategy Consulting',
    description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
    benefits: ['Custom AI roadmap', 'ROI assessment', 'Technology planning'],
    icon: BrainCircuit,
  },
  {
    title: 'Custom AI Solutions',
    description: 'Build and deploy tailored AI models and applications for your specific needs.',
    benefits: ['Custom models', 'Integration support', 'Scalable solutions'],
    icon: Bot,
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation and workflow optimization.',
    benefits: ['Workflow analysis', 'Smart automation', 'Efficiency gains'],
    icon: Workflow,
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
    benefits: ['System integration', 'API development', 'Legacy support'],
    icon: Cog,
  },
  {
    title: 'Performance Analytics',
    description: 'Measure and optimize AI system performance with advanced analytics.',
    benefits: ['Real-time metrics', 'Performance tuning', 'Insights dashboard'],
    icon: LineChart,
  },
  {
    title: 'AI Development',
    description: 'Expert development of AI-powered features and applications.',
    benefits: ['Custom features', 'Rapid prototyping', 'Production ready'],
    icon: MessageSquareCode,
  },
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col h-full relative rounded-3xl bg-white p-8"
    >
      {/* Icon Container */}
      <div className="mb-6">
        <motion.div
          className="rounded-2xl bg-blue-50 p-4 w-16 h-16 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className="h-8 w-8 text-blue-600" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          {service.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-8">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
              {benefit}
            </li>
          ))}
        </ul>
        
        {/* Learn More Button */}
        <div className="mt-auto">
          <Link 
            href="/contact#contact" 
            className="block w-full"
            scroll={false}
          >
            <motion.button
              className="inline-flex items-center justify-center w-full space-x-2 px-6 py-3.5 text-base font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn more</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border border-gray-100 group-hover:border-blue-100 transition-colors duration-200" />
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-violet-50/50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive AI solutions to transform your business operations and drive innovation.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 