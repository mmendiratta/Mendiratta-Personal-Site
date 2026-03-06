"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface MediumPost {
  title: string
  link: string
  pubDate: string
  thumbnail: string
  content: string
}

function stripHtml(html: string): string {
  const div = document.createElement("div")
  div.innerHTML = html
  return div.innerText
}

function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text
}

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mannimendiratta"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="blog" className="py-32 px-6">
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
              Writing
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              Published on{" "}
              <a
                href="https://medium.com/@mannimendiratta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                Medium ↗
              </a>
            </p>
          </div>

          {/* Posts */}
          <div>
            {loading && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-24 rounded-lg bg-muted animate-pulse"
                  />
                ))}
              </div>
            )}

            {!loading && posts.length === 0 && (
              <p className="text-sm text-muted-foreground">No posts found.</p>
            )}

            {!loading && posts.length > 0 && (
              <div className="divide-y divide-border">
                {posts.map((post, i) => (
                  <motion.a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start justify-between gap-6 py-6 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors leading-snug mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {truncate(stripHtml(post.content), 160)}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono text-muted-foreground/60">
                        {new Date(post.pubDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <div className="mt-1 text-muted-foreground/40 group-hover:text-accent transition-colors text-sm">
                        ↗
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
