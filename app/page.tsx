import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="heading-xl mb-8 text-neutral-900">
              Modern digital solutions that save time & grow revenue
            </h1>
            <p className="text-body-lg mb-4 text-neutral-500 font-medium">
              Serious systems. Fun to use.
            </p>
            <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Marcy Systems builds modern digital solutions that save time, grow revenue, and automate the busywork — without enterprise complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Free Consult
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-neutral-900">
              What We Build
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to grow your business online
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="card">
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="heading-md mb-3 text-neutral-900">Websites</h3>
              <p className="text-neutral-600 leading-relaxed">
                Professional, responsive websites that convert visitors into customers. Fast, modern, and optimized for search engines.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-md mb-3 text-neutral-900">Web Apps</h3>
              <p className="text-neutral-600 leading-relaxed">
                Custom web applications that solve your unique business challenges. Built to scale and easy to maintain.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-md mb-3 text-neutral-900">AI Automations</h3>
              <p className="text-neutral-600 leading-relaxed">
                Intelligent automation that handles repetitive tasks, freeing you to focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            <div>
              <div className="heading-lg mb-3 text-neutral-900">5-7 Days</div>
              <p className="text-neutral-600 text-lg">Fast Delivery</p>
            </div>
            <div>
              <div className="heading-lg mb-3 text-neutral-900">100%</div>
              <p className="text-neutral-600 text-lg">Client Satisfaction</p>
            </div>
            <div>
              <div className="heading-lg mb-3 text-neutral-900">24/7</div>
              <p className="text-neutral-600 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-neutral-900">
              How It Works
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              A simple process to get you up and running
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="heading-md mb-4 text-neutral-900">Book a Free Consult</h3>
              <p className="text-neutral-600 leading-relaxed">
                Tell us about your business and goals. We'll discuss your needs and recommend the best solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="heading-md mb-4 text-neutral-900">We Build It</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our team gets to work building your solution. You'll receive updates and can request revisions along the way.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="heading-md mb-4 text-neutral-900">Launch & Grow</h3>
              <p className="text-neutral-600 leading-relaxed">
                We launch your solution and provide ongoing support. Watch your business grow with modern digital tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Benefits */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              What You Get
            </h2>
            <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
              Everything included in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Mobile-Responsive Design</h3>
                <p className="text-neutral-400">Your site looks perfect on every device</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2 text-lg">SEO Optimized</h3>
                <p className="text-neutral-400">Built to rank well in search engines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Fast Load Times</h3>
                <p className="text-neutral-400">Optimized for speed and performance</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Ongoing Support</h3>
                <p className="text-neutral-400">We're here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-neutral-900">
            Ready to Grow Your Business?
          </h2>
          <p className="text-body-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you save time, automate workflows, and grow your revenue.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
