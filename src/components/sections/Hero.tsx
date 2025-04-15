'use client'

import Link from 'next/link'
import { MotionDiv } from '../animations/MotionWrapper'
import FloatingElement from '../animations/FloatingElement'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* AI-themed background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50 to-white opacity-70" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/90 shadow-xl shadow-violet-600/10 ring-1 ring-violet-50" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[calc(50%-30rem)] top-[calc(50%-20rem)] transform-gpu blur-3xl">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-violet-100 to-blue-200 opacity-20" />
        </div>
        <div className="absolute left-[calc(50%+20rem)] top-[calc(50%-30rem)] transform-gpu blur-3xl">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-blue-200 to-violet-100 opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Helping Startups{' '}
              <span className="relative">
                <span className="absolute -inset-1 block -skew-y-3 bg-gradient-to-r from-violet-600 to-blue-500 opacity-30"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
                  Harness AI
                </span>
              </span>{' '}
              & Digital Strategy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We connect early-stage founders with vetted AI, GTM, and digital transformation consultants—fast, trusted, and tailored to your growth stage.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-md hover:from-violet-700 hover:to-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-violet-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </MotionDiv>
        </div>

        {/* Value Props Cards */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto px-4">
            {/* For Founders Card */}
            <FloatingElement duration={2} delay={0.2}>
              <MotionDiv
                className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-all duration-200 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  For Founders
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-violet-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">Quick expert matching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-violet-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">Pre-vetted consultants</span>
                  </li>
                </ul>
              </MotionDiv>
            </FloatingElement>

            {/* For Consultants Card */}
            <FloatingElement duration={2} delay={0.4}>
              <MotionDiv
                className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-all duration-200 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  For Consultants
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">Quality leads</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">No cold outreach</span>
                  </li>
                </ul>
              </MotionDiv>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  )
}