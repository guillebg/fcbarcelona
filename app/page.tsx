'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formPosition, setFormPosition] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name && phone) {
      // Guardar los datos en localStorage
      const savedWaitlist = localStorage.getItem('waitlist')
      const waitlist = savedWaitlist ? JSON.parse(savedWaitlist) : []
      
      const newEntry = {
        email: email,
        name: name,
        phone: phone,
        timestamp: new Date().toLocaleString()
      }
      
      waitlist.push(newEntry)
      localStorage.setItem('waitlist', JSON.stringify(waitlist))
      
      setEmail('')
      setName('')
      setPhone('')
      setShowSuccess(true)
      setShowForm(false)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const openForm = (position: string) => {
    setFormPosition(position)
    setShowForm(true)
  }

  return (
    <div className={`flex flex-col min-h-screen text-white ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold text-blue-300">
          MailSense
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
          <Link href="#faq" className="text-gray-300 hover:text-white">FAQ</Link>
          <Button onClick={() => openForm('nav')} className="bg-blue-600 hover:bg-blue-700 text-white">
            Join Waitlist
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Transform Your Inbox into a</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Productivity Engine</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                We analyze your emails 24/7 to prioritize what matters, automate repetitive tasks, and help you respond faster with AI.
              </p>
            </div>
            <Button onClick={() => openForm('hero')} className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Join Waitlist
            </Button>
            {showForm && formPosition === 'hero' && (
              <div className="mt-6 p-6 bg-gray-900/50 rounded-lg max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">Join our waitlist</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Submit
                    </Button>
                    <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="text-white border-white hover:bg-white/10">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
            {showSuccess && formPosition === 'hero' && (
              <div className="mt-4 p-4 rounded bg-green-600/20 text-center">
                Thank you for joining our waitlist!
              </div>
            )}
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tired of Getting Lost in Your Email?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">The Traditional Way</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✖</span>
                    <span className="text-gray-300">Wasting 2+ hours daily managing emails manually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✖</span>
                    <span className="text-gray-300">Important emails buried in spam and newsletters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✖</span>
                    <span className="text-gray-300">Writing repetitive responses over and over</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✖</span>
                    <span className="text-gray-300">Stress from keeping inbox under control</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">With MailSense</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">AI that prioritizes and categorizes your emails automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Smart responses personalized to your style</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Automation of repetitive tasks and classification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Trend analysis and productivity suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  How does MailSense work?
                </h3>
                <p className="text-gray-300">
                  MailSense uses advanced AI to analyze your email patterns, prioritize important messages, and suggest personalized responses based on your communication style.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Is MailSense safe to use?
                </h3>
                <p className="text-gray-300">
                  Security is our top priority. We use military-grade encryption and never store sensitive content from your emails.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Which email clients are supported?
                </h3>
                <p className="text-gray-300">
                  MailSense is compatible with Gmail
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-blue-900/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let AI Handle Your Email
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Save up to 2 hours daily and keep your inbox under control
            </p>
            <Button onClick={() => openForm('cta')} className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Join Waitlist ►
            </Button>
            {showForm && formPosition === 'cta' && (
              <div className="mt-6 p-6 bg-gray-900/50 rounded-lg max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">Join our waitlist</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name-cta" className="block text-sm font-medium text-gray-300 mb-1">
                      Full name
                    </label>
                    <input
                      id="name-cta"
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email-cta" className="block text-sm font-medium text-gray-300 mb-1">
                      Email address
                    </label>
                    <input
                      id="email-cta"
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-cta" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone number
                    </label>
                    <input
                      id="phone-cta"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Submit
                    </Button>
                    <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="text-white border-white hover:bg-white/10">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
            {showSuccess && formPosition === 'cta' && (
              <div className="mt-4 p-4 rounded bg-green-600/20 text-center">
                Thank you for joining our waitlist!
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400">© 2024 MailSense. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="/admin/waitlist" className="text-gray-400 hover:text-white">Admin</Link>
          </div>
        </div>
      </footer>

      {/* Modal para el botón de navegación */}
      {showForm && formPosition === 'nav' && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Join our waitlist</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name-nav" className="block text-sm font-medium text-gray-300 mb-1">
                  Full name
                </label>
                <input
                  id="name-nav"
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email-nav" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  id="email-nav"
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone-nav" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone number
                </label>
                <input
                  id="phone-nav"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Submit
                </Button>
                <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="text-white border-white hover:bg-white/10">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}