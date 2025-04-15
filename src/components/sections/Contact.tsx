'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MotionDiv } from '../animations/MotionWrapper'
import FloatingElement from '../animations/FloatingElement'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement form submission logic
      console.log(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-70" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/90 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50" />
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-0">
        <div className="text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let's get started...
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tell us about your project and we'll match you with the right expert.
            </p>
          </MotionDiv>
        </div>

        <FloatingElement duration={5} yOffset={10}>
          <MotionDiv
            className="mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name (optional)
                </label>
                <div className="mt-2">
                  <input
                    {...register('name')}
                    type="text"
                    className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Business Email *
                </label>
                <div className="mt-2">
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  How Can We Help You? *
                </label>
                <div className="mt-2">
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  {isSubmitting ? 'Submitting...' : 'Book a Consultation'}
                </button>
                <a
                  href="#contact"
                  className="rounded-full border border-violet-600 px-6 py-3 text-sm font-medium text-violet-600 hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  Talk to an AI Expert
                </a>
              </div>

              <p className="text-xs text-gray-500 text-center">
                This site is protected by reCAPTCHA and the Privacy Policy and Terms of Service apply.
              </p>
            </form>
          </MotionDiv>
        </FloatingElement>
      </div>
    </section>
  )
} 