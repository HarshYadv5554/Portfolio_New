"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden hero-gradient grid-bg">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="gradient-text glow-text">Harsh Yadav</span>
              </h1>
              <h2 className="text-2xl font-bold sm:text-3xl">
                <span className="inline-block h-[40px]">{text}</span>
                <span className="animate-blink text-primary">|</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build exceptional and accessible digital experiences for the web with expertise in MERN stack and
                Next.js.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="https://github.com/HarshYadv5554" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/harsh-yadav5554/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:harsh153658@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 w-[280px] h-[280px] md:w-[400px] md:h-[400px] glow">
              <img
                src="https://v0.blob.com/7Ij9Rl.png"
                alt="Harsh Yadav"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
}

