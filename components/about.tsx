export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20 grid-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Get to know me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              I'm a passionate developer with expertise in full-stack development and a specialization in IoT.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-primary/20 w-full max-w-[400px] glass-card">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="About me"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Full Stack Developer & IoT Specialist</h3>
              <p className="text-muted-foreground">
                I'm a B.Tech student at Indian Institute of Information Technology, Nagpur, specializing in Electronics
                and Communication Engineering with a focus on Internet of Things (IoT). I'm passionate about creating
                innovative solutions that bridge hardware and software.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Name: Harsh Yadav</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Email: harsh153658@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Phone: +91-7296911276</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Education: B.Tech in ECE (IoT Specialization)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Location: Nagpur, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

