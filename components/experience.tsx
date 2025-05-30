import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    // Freelancer experience removed as requested
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/20 grid-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Experience</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Professional Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              My work experience and professional achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            {experiences.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                No professional experience to display at this time.
              </div>
            ) : (
              experiences.map((item, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary">{item.position}</h3>
                    <h4 className="text-lg font-semibold">{item.company}</h4>
                    <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        {item.location}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-2"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

