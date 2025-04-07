"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission, like sending an email
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg grid-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8 py-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me through any of these channels. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">harsh153658@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91-7296911276</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Nagpur, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <Link
                    href="https://github.com/HarshYadv5554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/HarshYadv5554
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <Link
                    href="https://www.linkedin.com/in/harsh-yadav5554/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/harsh-yadav5554
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/40 border-white/10 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/40 border-white/10 focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-secondary/40 border-white/10 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-secondary/40 border-white/10 focus:border-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

