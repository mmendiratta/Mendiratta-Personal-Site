"use client"

import { motion } from "motion/react"
import { useRef } from "react"
import ScrambleIn, {
  ScrambleInHandle,
} from "@/components/fancy/text/scramble-in"
import { personal } from "@/lib/data"

export default function Hero() {
  const scrambleRef = useRef<ScrambleInHandle>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle warm vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_30%_50%,oklch(0.76_0.14_78_/_4%)_0%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_100%_100%,transparent_50%,oklch(0_0_0_/_40%)_100%)]" />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 text-xs font-mono text-muted-foreground"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {personal.location} &mdash; {personal.title}
        </motion.div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-8">
          <ScrambleIn
            ref={scrambleRef}
            text={personal.name}
            scrambleSpeed={35}
            scrambledLetterCount={3}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ01"
            className="text-foreground"
            scrambledClassName="text-accent"
            autoStart
          />
        </h1>

        {/* Two-line tagline with personality */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10 space-y-1"
        >
          <p className="text-xl sm:text-2xl text-foreground/80 font-medium leading-snug">
            Senior engineer at Gemini. I own the systems new users hit first.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Onboarding, auth, prediction markets. Also: golf, great dinners,{" "}
            <a
              href="https://poolside-markets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              poolside-markets.com
            </a>
            .
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Resume ↓
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
          >
            LinkedIn
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
