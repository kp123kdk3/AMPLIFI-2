import { BrainCircuit } from 'lucide-react'

export default function AIStrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="rounded-2xl bg-blue-50 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <BrainCircuit className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            AI Strategy Consulting
          </h1>
          <p className="text-xl text-gray-600">
            Develop a comprehensive AI roadmap aligned with your business objectives.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="ml-4 text-lg text-gray-600">Strategic AI roadmap development tailored to your business goals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="ml-4 text-lg text-gray-600">AI readiness assessment and gap analysis</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="ml-4 text-lg text-gray-600">Technology stack recommendations and implementation planning</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="ml-4 text-lg text-gray-600">ROI analysis and business case development</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Process</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">1. Discovery & Assessment</h3>
                <p className="text-gray-600">We begin with a thorough analysis of your current operations, challenges, and objectives to understand where AI can create the most value.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">2. Strategy Development</h3>
                <p className="text-gray-600">Our team develops a comprehensive AI strategy that aligns with your business goals and provides a clear roadmap for implementation.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">3. Implementation Planning</h3>
                <p className="text-gray-600">We create detailed implementation plans, including resource requirements, timelines, and risk mitigation strategies.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">4. Ongoing Support</h3>
                <p className="text-gray-600">Our team provides continuous support and guidance throughout the implementation process to ensure success.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help you develop a winning AI strategy.</p>
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200">
                Schedule a Consultation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 