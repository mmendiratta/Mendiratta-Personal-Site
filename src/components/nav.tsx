"use client"

import { useEffect, useState } from "react"
import { personal } from "@/lib/data"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground tracking-wider">
          {personal.name.split(" ")[0].toLowerCase()}.
        </span>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
