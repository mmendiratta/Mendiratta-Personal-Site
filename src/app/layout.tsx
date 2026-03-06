import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Manav Mendiratta",
  description:
    "Senior Software Engineer — shipping high-impact features at scale.",
  openGraph: {
    title: "Manav Mendiratta",
    description:
      "Senior Software Engineer — shipping high-impact features at scale.",
    url: "https://mendiratta.net",
    siteName: "Manav Mendiratta",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
