"use client"

import { motion } from "motion/react"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
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
              Projects
            </span>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors cursor-pointer"
              onClick={() => project.url && window.open(project.url, "_blank", "noopener,noreferrer")}
            >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
                        aria-label={`${project.name} source code`}
                      >
                        GitHub
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors text-sm"
                        aria-label={`Visit ${project.name}`}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted"
                    >
                      {tag}
                    </span>
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
