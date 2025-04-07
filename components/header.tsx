"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="gradient-text">Harsh</span>Yadav
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="hidden md:flex border-primary/20 hover:bg-primary/10 hover:text-primary">
          <FileText className="mr-2 h-4 w-4" /> Resume
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 glass-card">
          <nav className="flex flex-col gap-4">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="outline" className="w-full mt-2 border-primary/20 hover:bg-primary/10 hover:text-primary">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

