'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!name || !email || !phone) {
      setError('Please complete all fields')
      return
    }
    
    // Here the information would be sent to the backend
    // For now we just simulate a successful submission
    setIsSubmitted(true)
    setError('')
  }

  return (
    <div className={`flex flex-col min-h-screen text-white ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold text-blue-300">
          MailSense
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
        </nav>
      </header>

      <main className="flex-grow py-12 px-8">
        <div className="max-w-md mx-auto bg-gray-900/50 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2 text-center">Join the Waitlist</h1>
          <p className="text-gray-400 mb-8 text-center">
            Be one of the first to try MailSense and transform your inbox
          </p>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h2 className="text-xl font-semibold mb-2">Thank you for joining!</h2>
              <p className="text-gray-300 mb-6">
                We've added you to our waitlist. We'll contact you soon with more information.
              </p>
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Back to home
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-900/50 text-red-200 p-3 rounded text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+34 123 456 789"
                  required
                />
              </div>
              
              <div className="text-xs text-gray-400 mb-4">
                By joining, you agree to our <Link href="/terms" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                Join the waitlist
              </Button>
            </form>
          )}
        </div>
      </main>

      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400">© 2024 MailSense. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 