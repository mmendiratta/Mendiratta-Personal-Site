"use client"

import { motion } from "motion/react"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start"
        >
          {/* Label */}
          <div className="md:sticky md:top-28">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Experience
            </span>
          </div>

          {/* Timeline */}
          <div className="space-y-16">
            {experience.map((job, jobIndex) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: jobIndex * 0.1 }}
              >
                {/* Company header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.company}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mt-0.5">
                    {job.location}
                  </p>
                </div>

                {/* Roles */}
                <div className="space-y-8 border-l border-border pl-6">
                  {job.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[1.5625rem] top-1.5 w-2 h-2 rounded-full bg-accent/60 ring-4 ring-background" />

                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <span className="font-medium text-foreground">
                          {role.title}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground shrink-0">
                          {role.dates}
                        </span>
                      </div>

                      {role.domains && (
                        <p className="text-xs font-mono text-accent/70 mb-3">
                          {role.domains}
                        </p>
                      )}

                      <ul className="space-y-2">
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                          >
                            <span className="text-accent/50 mt-0.5 shrink-0">
                              —
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
