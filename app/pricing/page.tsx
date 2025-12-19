'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pricingFaqs = [
    {
      question: "What's included in the Starter Site package?",
      answer: "The Starter Site includes 1-3 pages, mobile-responsive design, basic SEO optimization, a contact form, and 1 revision round. Perfect for small businesses getting started online."
    },
    {
      question: "How long does delivery take?",
      answer: "Starter Sites typically take 5-7 days, Growth packages take 2-3 weeks, and Automation/Custom projects vary based on complexity. We'll provide a timeline during your consultation."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! We can add features, pages, or functionality to your existing site at any time. Many clients start with Starter and upgrade as their business grows."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and other standard payment methods. Payment terms are typically 50% upfront and 50% upon completion, though we can discuss flexible arrangements."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We offer ongoing support packages for maintenance, updates, and new features. Support options are available for all packages and can be customized to your needs."
    },
    {
      question: "What if I need something not listed?",
      answer: "No problem! The Automation + Custom tier is designed for unique needs. Contact us for a custom quote, and we'll work with you to build exactly what you need."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-neutral-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-body-lg text-neutral-600">
              Choose the package that fits your needs. All prices include setup and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Site */}
            <div className="card">
              <h3 className="heading-md mb-6 text-neutral-900">Starter Site</h3>
              <div className="mb-8">
                <div className="text-sm font-medium text-neutral-500 mb-2">Starting at</div>
                <div className="heading-lg text-neutral-900">$X</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">1-3 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Mobile responsive</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Basic SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Contact form</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">1 revision</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">5-7 day delivery</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center block">
                Get Started
              </Link>
            </div>

            {/* Growth - Most Popular */}
            <div className="bg-neutral-900 text-white rounded-2xl p-8 border-2 border-neutral-900 shadow-2xl transform scale-105 relative">
              <div className="bg-white text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-6">
                Most Popular
              </div>
              <h3 className="heading-md mb-6">Growth</h3>
              <div className="mb-8">
                <div className="text-sm font-medium text-neutral-400 mb-2">Starting at</div>
                <div className="heading-lg">$X</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">Up to 6 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">CMS/blog option</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">Advanced SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">Analytics setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">2 revisions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">2-3 week delivery</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 rounded-full font-semibold w-full text-center block transition-all duration-300 text-sm tracking-tight shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>

            {/* Automation + Custom */}
            <div className="card">
              <h3 className="heading-md mb-6 text-neutral-900">Automation + Custom</h3>
              <div className="mb-8">
                <div className="heading-lg text-neutral-900">Custom Quote</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">AI automations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Custom web apps</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Tool integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Ongoing support option</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Tailored to your needs</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-neutral-900">Add-Ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">Additional Pages</h3>
                <p className="text-neutral-600">Add more pages to your site as your business grows</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">E-commerce Integration</h3>
                <p className="text-neutral-600">Sell products online with secure payment processing</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">Email Marketing Setup</h3>
                <p className="text-neutral-600">Connect your site to email marketing platforms</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">Social Media Integration</h3>
                <p className="text-neutral-600">Connect your social accounts and display feeds</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">Advanced Analytics</h3>
                <p className="text-neutral-600">Detailed tracking and reporting setup</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">Content Creation</h3>
                <p className="text-neutral-600">Professional copywriting and content development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-neutral-900">Pricing FAQ</h2>
            <div className="space-y-3">
              {pricingFaqs.map((faq, index) => (
                <div key={index} className="border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 transition-colors">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-neutral-900 text-left pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-neutral-500 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-5 bg-neutral-50 text-neutral-600 leading-relaxed border-t border-neutral-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-neutral-900">
            Not Sure Which Package Fits?
          </h2>
          <p className="text-body-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            Book a free consultation and we'll help you choose the right solution for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}

