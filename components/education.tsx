import { BookOpen, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "Indian Institute of Information Technology, Nagpur",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      specialization: "Internet of Things (IoT)",
      period: "Aug. 2022 – Present",
      location: "Nagpur, India",
    },
    {
      institution: "Central Board of Secondary Education",
      degree: "Senior Secondary",
      field: "Science",
      grade: "95%",
      period: "2021",
      location: "India",
    },
    {
      institution: "Central Board of Secondary Education",
      degree: "Secondary",
      grade: "92%",
      period: "2019",
      location: "India",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 gradient-bg grid-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Education</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Academic Background</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              My educational journey and academic achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            {education.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary">{item.institution}</h3>
                  <h4 className="text-lg font-semibold">
                    {item.degree} {item.field && `in ${item.field}`}
                  </h4>
                  {item.specialization && (
                    <p className="text-muted-foreground">Specialization in {item.specialization}</p>
                  )}
                  {item.grade && <p className="text-muted-foreground">Grade: {item.grade}</p>}
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

