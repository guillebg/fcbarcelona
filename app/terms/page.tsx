'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function TermsPage() {
  return (
    <div className={`flex flex-col min-h-screen text-white ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold text-blue-300">
          MailSense
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
        </nav>
      </header>

      <main className="flex-grow py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: 02/25/2025</p>

          <div className="prose prose-invert max-w-none">
            <p>
              Welcome to MailSense (the "Service"), operated by MailSense (the "Company," "we," "us," or "our"). By accessing or using our Service, you agree to these Terms of Service (the "Terms"). If you do not accept them, do not use the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Use of the Service</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">1.1. Eligibility</h3>
            <p>
              You must be at least 18 years old and legally capable of entering into contracts to use our Service.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">1.2. License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service for the purpose of automating email management in Gmail through artificial intelligence.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">1.3. Prohibited Activities</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Service for illegal purposes.</li>
              <li>Attempt to reverse engineer, copy, or modify our software.</li>
              <li>Interfere with or disrupt the Service.</li>
              <li>Use the Service to send spam, impersonate others, or engage in fraudulent activities.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Waitlist and Data Collection</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">2.1. Waitlist Registration</h3>
            <p>
              By joining the waitlist, you provide your email address and agree to receive updates about the Service.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2.2. Data Usage</h3>
            <p>
              We collect and store your email address to send you notifications and improve the user experience. We do not sell or share your email with third parties without your consent.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2.3. Opt-out</h3>
            <p>
              You can unsubscribe at any time by clicking the "unsubscribe" link in our emails.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">3.1. Ownership</h3>
            <p>
              All rights, titles, and interests in the Service, including trademarks, content, and software, remain ours.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3.2. Restrictions</h3>
            <p>
              You may not use our brand, logos, or other proprietary materials without written permission.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Disclaimers and Liability Limitations</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">4.1. No Warranty</h3>
            <p>
              The Service is provided "as is" without any warranties, express or implied.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4.2. Limitation of Liability</h3>
            <p>
              We will not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Termination</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">5.1. Breach</h3>
            <p>
              We reserve the right to cancel or suspend your access if you violate these Terms.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5.2. Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Service immediately ceases.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of California, United States. Any disputes will be resolved in the courts of California.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions, contact us at: <a href="https://mailbusiness.ionos.es/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX" className="text-blue-300 hover:underline">hello@mailsense.es</a>
            </p>
          </div>
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