'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-100 shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-5 lg:py-6">
          <Link href="/" className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 tracking-tight hover:opacity-80 transition-opacity">
            Marcy Systems
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-tight">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-tight">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-tight">
              Pricing
            </Link>
            <Link href="/contact" className="btn-primary">
              Book a Free Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-900 p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 space-y-4 border-t border-neutral-100 mt-4">
            <Link 
              href="/" 
              className="block text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/pricing" 
              className="block text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="block btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Consult
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

