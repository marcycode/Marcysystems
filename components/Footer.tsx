import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-white text-xl font-display font-bold mb-4 tracking-tight">Marcy Systems</h3>
            <p className="text-sm text-neutral-400">
              Serious systems. Fun to use.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-tight">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors text-neutral-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-neutral-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors text-neutral-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-neutral-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-tight">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Websites</li>
              <li>Web Apps</li>
              <li>AI Automations</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-tight">Get Started</h4>
            <Link href="/contact" className="btn-primary inline-block bg-white text-neutral-900 hover:bg-neutral-100">
              Book a Free Consult
            </Link>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Marcy Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

