"use client"

import { motion } from "motion/react"
import { personal } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start"
        >
          {/* Label */}
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              About
            </span>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl font-medium leading-snug text-foreground">
              {personal.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {personal.offTheClock}
            </p>
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground font-mono">
              <span>{personal.location}</span>
              <span>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {personal.email}
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
