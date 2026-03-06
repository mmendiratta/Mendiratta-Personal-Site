"use client"

import { motion } from "motion/react"
import { personal } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
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
              Contact
            </span>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether it&apos;s about a role, a project, or just a good
              conversation — my inbox is open.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="font-mono text-accent/60 group-hover:text-accent transition-colors">
                  →
                </span>
                {personal.email}
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="font-mono text-accent/60 group-hover:text-accent transition-colors">
                  →
                </span>
                LinkedIn
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="font-mono text-accent/60 group-hover:text-accent transition-colors">
                  →
                </span>
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border flex justify-between items-center"
        >
          <span className="font-mono text-xs text-muted-foreground/50">
            {personal.name}
          </span>
          <span className="font-mono text-xs text-muted-foreground/50">
            {personal.links.resume.replace("/", "")}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
