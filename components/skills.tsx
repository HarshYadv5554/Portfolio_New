import { Code, Database, Layout, Server, Zap, Cpu, BookOpen, GitBranch } from "lucide-react"

export function Skills() {
  const skills = [
    {
      icon: <Layout className="h-10 w-10 mb-2 text-primary" />,
      title: "Front-end Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      technologies: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <Server className="h-10 w-10 mb-2 text-primary" />,
      title: "Back-end Development",
      description: "Building robust server-side applications and APIs.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      icon: <Database className="h-10 w-10 mb-2 text-primary" />,
      title: "Database Management",
      description: "Designing and optimizing database structures.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <Cpu className="h-10 w-10 mb-2 text-primary" />,
      title: "IoT & Embedded Systems",
      description: "Working with hardware and IoT solutions.",
      technologies: ["Arduino", "Embedded Systems", "IoT Protocols"],
    },
    {
      icon: <Code className="h-10 w-10 mb-2 text-primary" />,
      title: "Programming Languages",
      description: "Proficient in multiple programming languages.",
      technologies: ["Python", "C++", "JavaScript", "TypeScript"],
    },
    {
      icon: <GitBranch className="h-10 w-10 mb-2 text-primary" />,
      title: "DevOps",
      description: "Streamlining development and deployment processes.",
      technologies: ["Git/GitHub", "Docker", "Kubernetes"],
    },
    {
      icon: <Zap className="h-10 w-10 mb-2 text-primary" />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions.",
      technologies: ["TensorFlow", "OpenCV", "Machine Learning"],
    },
    {
      icon: <BookOpen className="h-10 w-10 mb-2 text-primary" />,
      title: "Academic Knowledge",
      description: "Strong foundation in technical subjects.",
      technologies: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 gradient-bg grid-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">My Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              I've worked with a variety of technologies and frameworks to create exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col p-6 rounded-lg transition-all skill-card">
              <div className="flex flex-col items-center text-center">
                {skill.icon}
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

