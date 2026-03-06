import Nav from "@/components/nav"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Stack from "@/components/sections/stack"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Blog from "@/components/sections/blog"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stack />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
