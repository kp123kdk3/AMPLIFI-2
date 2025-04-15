'use client'

import { MotionDiv } from '../animations/MotionWrapper'
import FloatingElement from '../animations/FloatingElement'
import { StrategyIcon, TransformationIcon, GrowthIcon } from '../icons/Icons'

const steps = [
  {
    name: 'Tell us what you need',
    description: 'Share your goals and challenges through our simple form or a quick discovery call.',
    icon: <StrategyIcon className="h-6 w-6" />,
    stats: '24hr Response'
  },
  {
    name: 'Get matched with experts',
    description: 'We connect you with pre-vetted consultants who match your specific needs and industry.',
    icon: <TransformationIcon className="h-6 w-6" />,
    stats: '93% Match Rate'
  },
  {
    name: 'Execute faster',
    description: 'Get high-ROI results without the risk of a full-time hire. Scale up or down as needed.',
    icon: <GrowthIcon className="h-6 w-6" />,
    stats: '2-3x Faster'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Works</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A simple, transparent process to connect you with the right expertise when you need it.
            </p>
          </MotionDiv>
        </div>

        <div className="relative mx-auto mt-20">
          {/* Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <FloatingElement key={step.name} delay={index * 0.05} duration={3}>
                <MotionDiv
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {/* Step number */}
                  <div className="absolute -top-8 text-sm font-medium text-gray-500">
                    Step {index + 1}
                  </div>

                  {/* Icon with connecting dot */}
                  <div className="relative group">
                    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/50 blur-md transition-all group-hover:bg-violet-200/50" />
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 p-4 text-violet-600 shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 shadow-md" />
                  </div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                        {step.stats}
                      </span>
                    </div>
                  </div>
                </MotionDiv>
              </FloatingElement>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { value: '24hr', label: 'Average Response Time' },
            { value: '93%', label: 'Successful Matches' },
            { value: '2-3x', label: 'Faster Implementation' },
          ].map((stat, index) => (
            <MotionDiv
              key={stat.label}
              className="flex flex-col items-center rounded-xl bg-white px-6 py-8 text-center shadow-md transition-all duration-200 hover:shadow-lg"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <div className="text-2xl font-bold text-violet-600">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 