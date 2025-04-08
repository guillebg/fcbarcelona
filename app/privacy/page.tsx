'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function PrivacyPage() {
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
        </nav>
      </header>

      <main className="flex-grow py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: 02/25/2025</p>

          <div className="prose prose-invert max-w-none">
            <p>
              MailSense ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you use our Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">1.1. Personal Information</h3>
            <p>
              When you join our waitlist, we collect your email address with your explicit consent.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">1.2. Usage Data</h3>
            <p>
              We may collect information about how you interact with our Service, including IP address, browser type, and usage patterns.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">1.3. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies to enhance our Service and analyze traffic. You can manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Legal Basis for Data Processing</h2>
            <p>We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Consent: When you voluntarily provide your email to join our waitlist.</li>
              <li>Legitimate Interest: To improve our Service and communicate relevant updates.</li>
              <li>Contractual Obligation: When data is necessary to provide the Service.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">3.1. Service Operation</h3>
            <p>
              We use your email to notify you about updates, product launches, and related communications.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3.2. Improvements</h3>
            <p>
              We analyze usage data to enhance our Service.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3.3. Legal Compliance</h3>
            <p>
              We may use or disclose your information if required by law.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information Sharing</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">4.1. Third-Party Service Providers</h3>
            <p>
              We may share data with service providers assisting with email delivery, analytics, and infrastructure. All third parties must comply with GDPR and have signed Data Processing Agreements (DPA) with us.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4.2. Legal Obligations</h3>
            <p>
              We may disclose information if required to comply with legal requirements or protect our rights.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4.3. Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or asset sale, user data may be transferred.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">User Rights Under GDPR</h2>
            <p>Under the General Data Protection Regulation (GDPR), users have the following rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right of Access – Request a copy of the data we hold about you.</li>
              <li>Right to Rectification – Request correction of inaccurate personal data.</li>
              <li>Right to Erasure – Request deletion of your data ("Right to be Forgotten").</li>
              <li>Right to Restrict Processing – Request to limit how we process your data.</li>
              <li>Right to Data Portability – Receive a copy of your data in a structured format.</li>
              <li>Right to Object – Object to data processing based on legitimate interests.</li>
              <li>Right to Withdraw Consent – Withdraw previously given consent at any time.</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="https://mailbusiness.ionos.es/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX" className="text-blue-300 hover:underline">hello@mailsense.es</a>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security and Retention</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">6.1. Security Measures</h3>
            <p>
              We implement technical and organizational security measures to protect your data. However, no internet transmission method is 100% secure.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6.2. Data Retention</h3>
            <p>
              We retain your personal data only as long as necessary to fulfill its purpose unless a longer retention period is required by law. You may request data deletion at any time.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">International Data Transfers</h2>
            <p>
              If we transfer your data outside the European Economic Area (EEA), we implement appropriate safeguards, such as Standard Contractual Clauses (SCC), to protect your personal data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to improve your experience. By using our Service, you agree to the use of cookies unless you adjust your settings. You can manage or disable cookies through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 18. We do not knowingly collect personal data from children.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy. Continued use of the Service after changes implies acceptance of the new policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information and Data Protection Requests</h2>
            <p>
              For questions about this Privacy Policy or GDPR-related requests, contact us at: <a href="https://mailbusiness.ionos.es/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX" className="text-blue-300 hover:underline">hello@mailsense.es</a>
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