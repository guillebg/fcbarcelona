import type { Metadata } from "next";
import { inter, geist } from './fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "MailSense - Transform Your Inbox into a Productivity Engine",
  description: "We analyze your emails 24/7 to prioritize what matters, automate repetitive tasks, and help you respond faster with AI.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any"
      }
    ],
    apple: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
