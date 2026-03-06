"use client"

import { motion } from "motion/react"
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee"
import { stack } from "@/lib/data"

export default function Stack() {
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SimpleMarquee
          direction="left"
          baseVelocity={8}
          slowdownOnHover
          slowDownFactor={0.1}
          repeat={4}
          className="gap-0"
        >
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-6 px-8 font-mono text-sm text-muted-foreground whitespace-nowrap"
            >
              <span className="text-accent/50">·</span>
              {item}
            </span>
          ))}
        </SimpleMarquee>
      </motion.div>
    </section>
  )
}
