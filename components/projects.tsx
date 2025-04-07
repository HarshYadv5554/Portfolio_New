import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Event Management System",
      description:
        "A full-stack Event Management System using MongoDB, Express.js, React.js, and Node.js. Features user authentication with JWT, a dynamic dashboard for event organizers, and a real-time chat feature for attendees.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "WebSocket", "Docker"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/HarshYadv5554",
    },
    {
      title: "Real-Time Fitness Tracking App",
      description:
        "A mobile-friendly fitness tracking app leveraging Firebase for backend services. Users can log workouts, monitor progress, and connect with fitness buddies. Integrated Firebase Authentication and Firestore for real-time data synchronization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Firebase", "React", "Authentication", "Firestore", "Cloud Messaging"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/HarshYadv5554",
    },
    {
      title: "Wireframe to Code App using AI",
      description:
        "A Full Stack Wireframe to Code App using Next.js, React, and Tailwind CSS, enabling AI-powered automation for converting wireframes into functional components. Implemented TypeScript for type safety and integrated Firebase.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "OpenRouter AI"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/HarshYadv5554",
    },
  ]

  return (
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
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
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
  )
}

