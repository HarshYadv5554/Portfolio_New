"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"

function ProjectLottie({ src }: { src: string }) {
  const [animationData, setAnimationData] = useState<any>(null)
  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
  }, [src])
  if (!animationData) return <div style={{ width: '100%', height: 180, background: 'rgba(0,0,0,0.05)' }} />
  return <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 180 }} />
}

export function Projects() {
  const projects = [
    {
      title: "Wireframe to Code App using AI",
      description:
        "Built an AI-based tool to convert UI sketches into working React components with accurate layout rendering. Used Firebase for database and authentication, TypeScript for type safety, and React for dynamic rendering. Enabled real-time preview of code from images to speed up prototyping and reduce manual front-end effort.",
      image: "/placeholder.svg?height=300&width=500",
      lottie: "/ai-lottie.json",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/HarshYadv5554",
    },
    {
      title: "EcoTrack – Waste Management Platform",
      description:
        "Developed a smart waste tracking app with live map data and AI-based optimization for route scheduling. Used Web3Auth for secure logins and integrated Google Maps for tracking bin locations and heatmap visuals. Processed analytics using Gemini AI and built efficient data queries and models with Drizzle ORM backend.",
      image: "/placeholder.svg?height=300&width=500",
      lottie: "/eco-lottie.json",
      tags: ["Next.js", "TypeScript", "Tailwind", "Drizzle ORM", "Gemini", "Google Maps"],
      demoLink: "https://eco-track-ten.vercel.app/",
      githubLink: "https://github.com/HarshYadv5554/EcoTrack",
    },
    {
      title: "Crypto-Bazar – Cryptocurrency Dashboard",
      description:
        "Built a real-time crypto tracker with data visualizations using Chart.js and Axios for API-based updates. Implemented a secure backend using Express.js, JWT authentication, and smart AI chatbot using GenAI. Designed a modern UI with Tailwind CSS and React Router for a seamless, responsive user experience.",
      image: "/placeholder.svg?height=300&width=500",
      lottie: "/crypto-lottie.json",
      tags: ["React", "Chart.js", "Tailwind", "Node.js", "Express.js", "MongoDB"],
      demoLink: "https://crypto-bazar-55e3.vercel.app/",
      githubLink: "https://github.com/HarshYadv5554/Crypto-Bazar",
    },
  ]

  return (
    <>
      <section id="projects" className="py-16 md:py-24 bg-secondary/20 grid-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">My Recent Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Here are some of the projects I've worked on recently. Each project reflects my skills and experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden project-card border-white/10 bg-secondary/40 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
              <Link href="https://github.com/HarshYadv5554" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Mini Projects Section */}
      <section id="mini-projects" className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Mini Projects</div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl gradient-text">Other Projects on GitHub</h3>
              <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed mx-auto">
                Here are some of my other mini projects, exploring a variety of technologies and domains.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* Mini Project: Brain Tumour Detection */}
            <Card className="overflow-hidden border-white/10 bg-secondary/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-primary">Brain Tumour Detection</CardTitle>
                <CardDescription>Deep learning-based model for detecting brain tumours from MRI scans. Built with Python and TensorFlow, featuring a user-friendly interface for medical image analysis.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://github.com/HarshYadv5554/Brain-Tumour-Detection" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            {/* Mini Project: Air Quality Detection using ESP32 */}
            <Card className="overflow-hidden border-white/10 bg-secondary/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-primary">Air Quality Detection using ESP32</CardTitle>
                <CardDescription>IoT project using ESP32 and sensors to monitor air quality in real-time. Data is visualized on a web dashboard for easy tracking and analysis.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://github.com/HarshYadv5554/Air_Quality_detection-using-ESP32" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            {/* Mini Project: CMD Chatbot */}
            <Card className="overflow-hidden border-white/10 bg-secondary/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-primary">CMD Chatbot</CardTitle>
                <CardDescription>Command-line chatbot built with Python, capable of answering queries and performing simple tasks. Demonstrates natural language processing and automation.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://github.com/HarshYadv5554/Workik" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
              <Link href="https://github.com/HarshYadv5554?tab=repositories" target="_blank" rel="noopener noreferrer">
                View More on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Open Source Contributions Section */}
      <section id="open-source" className="py-12 md:py-20 bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Open Source Contributions</div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl gradient-text">Open Source Work</h3>
              <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed mx-auto">
                I actively contribute to open source projects, collaborating with global communities to build impactful software.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* Open Source: ResumeRanker */}
            <Card className="overflow-hidden border-white/10 bg-secondary/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-primary">ResumeRanker</CardTitle>
                <CardDescription>Contributed features and bug fixes to ResumeRanker, an open source platform for automated resume ranking and analysis. Enhanced the ranking algorithm and improved UI/UX for better recruiter experience.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://github.com/ResumeRanker/ResumeRanker" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            {/* Open Source: omegaUp */}
            <Card className="overflow-hidden border-white/10 bg-secondary/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-primary">omegaUp</CardTitle>
                <CardDescription>Ongoing contributor to omegaUp, an open source automatic programming contest evaluator and arena. Working on improving contest features, bug fixes, and user experience for the global programming community.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://github.com/omegaup/omegaup" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

