'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Marcy Systems different?",
      answer: "We focus on building serious systems that are actually fun to use. We combine modern technology with practical business sense, delivering solutions that save time and grow revenue without the enterprise complexity."
    },
    {
      question: "How long have you been in business?",
      answer: "Marcy Systems is a modern digital solutions company focused on helping small businesses and startups succeed online. We bring years of combined experience in web development, automation, and AI technologies."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in working with small business owners, local service providers, founders, and early-stage startups. We understand the unique challenges you face and build solutions that fit your budget and timeline."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with businesses across various industries including local services, e-commerce, professional services, SaaS startups, and more. If you have a digital need, we can help."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Yes! We specialize in building integrations with popular business tools and can create custom integrations for your specific needs. This includes CRM systems, payment processors, email platforms, and more."
    },
    {
      question: "What happens after my project is complete?",
      answer: "We provide ongoing support options to help you maintain and grow your digital presence. Whether you need updates, new features, or troubleshooting, we're here to help."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-neutral-900">
              About Marcy Systems
            </h1>
            <p className="text-body-lg text-neutral-600">
              Building modern digital solutions that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-neutral-900">Our Story</h2>
            <div className="space-y-6 text-body-lg text-neutral-600">
              <p>
                Marcy Systems was founded on a simple principle: <strong className="text-neutral-900">serious systems should be fun to use.</strong> We noticed that many businesses were stuck with outdated websites, manual workflows, and confusing technology that slowed them down instead of helping them grow.
              </p>
              <p>
                Our mission is to bridge the gap between powerful technology and practical business needs. We build modern digital solutions—websites, web apps, and AI automations—that save time, grow revenue, and eliminate busywork, all without the complexity and cost of enterprise solutions.
              </p>
              <p>
                We work with small business owners, local service providers, founders, and early-stage startups who need reliable digital solutions that deliver real results. Fast delivery, clear pricing, and solutions that just work—that&apos;s what we&apos;re all about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-neutral-900">What We Do</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="heading-md mb-3 text-neutral-900">Websites</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We build professional, responsive websites that convert visitors into customers. Every site is optimized for speed, SEO, and mobile devices.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-md mb-3 text-neutral-900">Web Applications</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Custom web apps that solve your unique business challenges. From internal tools to customer-facing platforms, we build solutions that scale.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-md mb-3 text-neutral-900">AI Automations</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Intelligent automation that handles repetitive tasks, integrates your tools, and frees you to focus on what matters most—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-neutral-900">How We Work</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="heading-md mb-3 text-neutral-900">Discovery & Planning</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We start with a free consultation to understand your business, goals, and challenges. Together, we&apos;ll define the scope and create a clear plan.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="heading-md mb-3 text-neutral-900">Design & Development</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our team builds your solution using modern technologies and best practices. You&apos;ll receive regular updates and can request revisions throughout the process.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="heading-md mb-3 text-neutral-900">Launch & Support</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We handle the launch and provide training if needed. Ongoing support options ensure your solution continues to serve your business as it grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Speed</h3>
              <p className="text-neutral-400 leading-relaxed">
                Fast delivery without sacrificing quality. We know your time is valuable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Transparency</h3>
              <p className="text-neutral-400 leading-relaxed">
                Clear pricing, honest communication, and no hidden fees. What you see is what you get.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Reliability</h3>
              <p className="text-neutral-400 leading-relaxed">
                Solutions that work when you need them. Built to last and easy to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-neutral-900">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
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
            Ready to Work Together?
          </h2>
          <p className="text-body-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business grow with modern digital solutions.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

