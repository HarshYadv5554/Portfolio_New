import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Harsh</span>Yadav
            </Link>
            <p className="text-muted-foreground max-w-md">
              A passionate full-stack developer specializing in creating exceptional digital experiences. Let's work
              together to bring your ideas to life.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="https://github.com/HarshYadv5554" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="https://www.linkedin.com/in/harsh-yadav5554/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="mailto:harsh153658@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#education"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Skills</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    IoT & Embedded Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Database Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Machine Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:harsh153658@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    harsh153658@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+917296911276"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-7296911276
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Harsh Yadav. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

