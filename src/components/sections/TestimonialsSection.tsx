'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    quote: "Amplifi helped us implement AI solutions that transformed our customer service. Response times dropped by 70% while satisfaction scores improved.",
    name: "Sarah M.",
    title: "Tech Startup CEO",
    image: "/avatars/avatar1.svg"
  },
  {
    quote: "Their strategic guidance on AI integration was invaluable. We've seen a 3x increase in operational efficiency since working with them.",
    name: "Michael R.",
    title: "Operations Director",
    image: "/avatars/avatar2.svg"
  },
  {
    quote: "The team's expertise in AI and automation helped us scale our processes efficiently. They truly understand the startup ecosystem.",
    name: "Jessica K.",
    title: "Product Manager",
    image: "/avatars/avatar3.svg"
  }
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.2 }
      })
    }
  }, [controls, inView, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="w-full md:w-[calc(33.333%-1rem)] flex-shrink-0"
    >
      <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-16 h-16 mb-6">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}'s avatar`}
            fill
            className="rounded-full"
          />
        </div>
        <div className="relative mb-6">
          <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-700 text-center italic text-lg relative z-10 px-8">
            {testimonial.quote}
          </p>
        </div>
        <div className="mt-auto text-center">
          <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      })
    }
  }, [controls, inView])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the companies we've helped transform with AI
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 