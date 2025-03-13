"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  Briefcase,
  Database,
  LineChart,
  Brain,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState, useRef } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const particlesRef = useRef(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = ["about", "education", "experience", "projects", "skills", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Particle animation effect
  useEffect(() => {
    if (!particlesRef.current) return

    const colors = [
      "rgba(147, 51, 234, 0.7)", // Purple
      "rgba(59, 130, 246, 0.7)", // Blue
      "rgba(236, 72, 153, 0.7)", // Pink
      "rgba(16, 185, 129, 0.7)", // Green
      "rgba(245, 158, 11, 0.7)", // Yellow
    ]

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.classList.add("particle")

      // Random position
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight

      // Random size
      const size = Math.random() * 10 + 5

      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)]

      // Set styles
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.background = color
      particle.style.opacity = "0.6"

      // Animation
      particle.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`
      particle.style.animationDelay = `${Math.random() * 5}s`

      particlesRef.current.appendChild(particle)

      // Remove after animation
      setTimeout(() => {
        if (particle.parentNode === particlesRef.current) {
          particlesRef.current.removeChild(particle)
        }
      }, 10000)
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 300)

    // Initial particles
    for (let i = 0; i < 15; i++) {
      createParticle()
    }

    return () => clearInterval(interval)
  }, [])

  // Parallax effect for background elements
  const parallaxOffset = (offset) => {
    return -scrollY * offset
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-purple">
      {/* Particles container */}
      <div ref={particlesRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none"></div>

      {/* Background Graphics */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pastel-yellow opacity-20 blur-3xl animate-pulse-slow"
          style={{ transform: `translateY(${parallaxOffset(0.05)}px)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 rounded-full bg-pastel-green opacity-20 blur-3xl animate-pulse-slow animate-delay-1000"
          style={{ transform: `translateY(${parallaxOffset(0.08)}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-pastel-blue opacity-20 blur-3xl animate-pulse-slow animate-delay-2000"
          style={{ transform: `translateY(${parallaxOffset(0.06)}px)` }}
        ></div>
        <div
          className="absolute -bottom-10 right-1/3 w-60 h-60 rounded-full bg-pastel-purple opacity-20 blur-3xl animate-pulse-slow animate-delay-3000"
          style={{ transform: `translateY(${parallaxOffset(0.04)}px)` }}
        ></div>

        {/* Data-themed SVG elements */}
        <div className="absolute bottom-40 right-1/4 opacity-10 animate-float">
          <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 20.9601 3 19.4V3M21 7L15.5 12.5M15.5 12.5L10 7M15.5 12.5L10 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-10 animate-spin-slow">
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9H21M3 15H21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-10 animate-wave">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path
              d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-1/4 right-1/4 opacity-10 animate-bounce-slow">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-10 animate-float animate-delay-2000">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-10 rotate-45 animate-spin-slow animate-delay-1000">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <circle cx="16" cy="8" r="2" fill="currentColor" />
            <circle cx="8" cy="16" r="2" fill="currentColor" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Astha Soni</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </Link>
              <Link
                href="#education"
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${activeSection === "education" ? "text-primary" : "text-muted-foreground"}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Education
              </Link>
              <Link
                href="#experience"
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${activeSection === "projects" ? "text-primary" : "text-muted-foreground"}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${activeSection === "skills" ? "text-primary" : "text-muted-foreground"}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Skills
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="icon" className="hover:animate-spin-slow">
                <Link href="https://github.com/asthasoni22" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:animate-spin-slow">
                <Link href="https://www.linkedin.com/in/astha-soni-9649a9244/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <ThemeToggle />
              <Button asChild className="animate-pulse-slow">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex-1 space-y-4 animate-fade-in-up">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">Astha Soni</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Data Scientist | Data Analyst | AI&ML Engineer
                <br />
                <span className="text-sm text-muted-foreground/80">
                  Where Data Science Meets Creativity and Purpose
                </span>
              </p>
              <div className="flex gap-4">
                <Button asChild className="animate-bounce-slow">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" asChild className="hover:animate-pulse">
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80 animate-fade-in-up animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink to-pastel-purple opacity-30 animate-spin-slow"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-J7hfcqo6CAF5B2elKeGwLXcaW94NsN.jpeg"
                alt="Astha Soni"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 animate-bounce-slow">
            <Link href="#about" className="text-primary">
              <ChevronDown className="h-8 w-8" />
            </Link>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                About Me
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Data Science Professional</h2>
              <p className="text-muted-foreground">
                Hi there! I'm a Data Science graduate student at Stony Brook University with a background in Information
                and Communication Technology. I specialize in data analytics, machine learning, and building end-to-end
                data solutions. From financial modeling to e-commerce systems and explainable AI, I love transforming
                complex data into meaningful insights. Passionate about solving real-world problems, I work with tools
                like Python, SQL, Power BI, and cloud platforms such as AWS and Databricks.
              </p>
              <p className="text-muted-foreground">
                My expertise spans across various domains including reinforcement learning, statistical computing, and
                data engineering. I'm particularly interested in developing AI solutions that solve real-world problems
                and provide actionable insights.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                  <Link href="#experience">My Experience</Link>
                </Button>
                <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                  <Link href="#skills">My Skills</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl animate-fade-in-up animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue to-pastel-purple opacity-20 animate-pulse-slow"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic2.jpg-c2kuotvikogePd3DwL8bmZZnQuFHiu.jpeg"
                alt="Astha at Stony Brook University"
                width={600}
                height={400}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        <section
          id="education"
          className="container py-12 md:py-24 lg:py-32 bg-background/60 backdrop-blur-sm rounded-xl"
        >
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4 text-center animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Education
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Academic Background</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                My educational journey in data science and technology
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <Card className="card-hover-effect animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Master of Science in Data Science</h3>
                      <p className="text-muted-foreground">Stony Brook University, Stony Brook, NY</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">2024 - 2026</div>
                  </div>
                  <p>
                    Pursuing advanced studies in data science with a focus on statistical methods and machine learning.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="animate-pulse-slow">Intro to Probability</Badge>
                    <Badge className="animate-pulse-slow animate-delay-200">Data Analysis</Badge>
                    <Badge className="animate-pulse-slow animate-delay-400">Reinforcement Learning</Badge>
                    <Badge className="animate-pulse-slow animate-delay-500">Statistical Computing</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover-effect animate-fade-in-up animate-delay-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Bachelor of Technology in Information and Communication Technology
                      </h3>
                      <p className="text-muted-foreground">Pandit Deendayal Energy University, India</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">2020 - 2024</div>
                  </div>
                  <p>Completed undergraduate studies with a focus on computer science and data technologies.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="animate-pulse-slow">Discrete Mathematics Structures</Badge>
                    <Badge className="animate-pulse-slow animate-delay-200">Applied Machine Learning</Badge>
                    <Badge className="animate-pulse-slow animate-delay-400">Data Structure and Algorithms</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4 text-center animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Experience</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                My journey in the data science and technology industry
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <Card className="card-hover-effect animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Data Analyst Intern</h3>
                      <p className="text-muted-foreground">JustDogs</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">December 2023 - May 2024</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Conducted data analytics with Market Basket Analysis and Cohort Analysis using Python, leading to
                      13% increase in sales while utilizing Microsoft Power BI for data visualizations and Excel for
                      initial data exploration.
                    </li>
                    <li>
                      Automated the data pipeline for reading raw data from an AWS S3 bucket, transformed it with
                      business logic using Apache Spark, and saved the data in Databricks tables for streamlining data
                      workflows for efficient analysis.
                    </li>
                    <li>
                      Built a rule-based chatbot, leveraging Google Dialogflow for NLP, PyCharm and FastAPI for backend
                      processing, and MySQL for data management which led to a 20% increase in customer engagement and
                      enhanced website traffic.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Python</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Power BI</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">AWS</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Apache Spark
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Databricks
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Dialogflow
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">FastAPI</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">MySQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover-effect animate-fade-in-up animate-delay-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Junior Summer Intern</h3>
                      <p className="text-muted-foreground">S&P Global</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">July 2023 - August 2023</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Worked on financial analysis and rating recommendation of Tesla's financial model, producing
                      insights on 51.4% growth in 2022, and a 6.7% net profit margin, contributing to a winning
                      presentation in a competitive setting.
                    </li>
                    <li>
                      Created a knowledge-based AI for Minesweeper, which strategically made decisions and drew
                      inferences. Additionally, acquired sessions on Deep Learning, Computer Vision, machine learning
                      and Lean & Agile principles.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Financial Analysis
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">AI</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Deep Learning
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Computer Vision
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Machine Learning
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Agile</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover-effect animate-fade-in-up animate-delay-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Data Engineer Intern</h3>
                      <p className="text-muted-foreground">Brainy Beams Technologies</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">May 2023 - July 2023</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed the backend of a client-focused e-commerce website using Django, implementing robust
                      features such as product catalog, authentication, cart, and secure payment processing, serving
                      over 10,000 active users.
                    </li>
                    <li>
                      Leveraged Django's Model View Template architecture and incorporated agile methodologies and
                      utilized big data technology such as Hadoop, to enhance data processing capabilities, system
                      performance and scalability.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Django</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Backend Development
                    </Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Agile</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Hadoop</Badge>
                    <Badge className="hover:bg-primary hover:text-primary-foreground transition-colors">Big Data</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="container py-12 md:py-24 lg:py-32 bg-background/60 backdrop-blur-sm rounded-xl"
        >
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4 text-center animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Selected Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Showcasing my technical skills and problem-solving abilities
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-1">
              <Card className="card-hover-effect animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="rounded-full bg-primary/10 p-6 animate-pulse-slow">
                        <LineChart className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2">Traffic Signal Control System</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Engineered deep RL algorithms for signal control system with a custom OpenAI Gym environment
                          to simulate an arbitrary road network, integrated with SUMO (Simulation of Urban MObility) to
                          model realistic traffic flow.
                        </li>
                        <li>
                          Implemented Q-Learning, SARSA and Deep Q-Network (DQN) algorithms to optimize waiting times,
                          with DQN achieving a 91% improvement in traffic efficiency and reducing congestion through
                          reward-based training.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="hover:scale-110 transition-transform">Reinforcement Learning</Badge>
                        <Badge className="hover:scale-110 transition-transform">OpenAI Gym</Badge>
                        <Badge className="hover:scale-110 transition-transform">Q-Learning</Badge>
                        <Badge className="hover:scale-110 transition-transform">SARSA</Badge>
                        <Badge className="hover:scale-110 transition-transform">DQN</Badge>
                        <Badge className="hover:scale-110 transition-transform">SUMO</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover-effect animate-fade-in-up animate-delay-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="rounded-full bg-primary/10 p-6 animate-pulse-slow animate-delay-1000">
                        <Brain className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2">
                        eXplainable Artificial Intelligence for Disease Prediction
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Performed a comparative analysis of XAI using Python for disease prediction across 12 research
                          papers, evaluating different supervised machine learning models including SVM, Logistic
                          Regression, and KNN.
                        </li>
                        <li>
                          SVM demonstrated superior performance (&gt;90% accuracy) for early diagnosis, while XAI
                          frameworks, like SHAP, LIME, and DALEX enhanced the interpretability and clinical relevance of
                          AI in healthcare.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="hover:scale-110 transition-transform">XAI</Badge>
                        <Badge className="hover:scale-110 transition-transform">Python</Badge>
                        <Badge className="hover:scale-110 transition-transform">SVM</Badge>
                        <Badge className="hover:scale-110 transition-transform">Logistic Regression</Badge>
                        <Badge className="hover:scale-110 transition-transform">KNN</Badge>
                        <Badge className="hover:scale-110 transition-transform">SHAP</Badge>
                        <Badge className="hover:scale-110 transition-transform">LIME</Badge>
                        <Badge className="hover:scale-110 transition-transform">DALEX</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover-effect animate-fade-in-up animate-delay-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="rounded-full bg-primary/10 p-6 animate-pulse-slow animate-delay-2000">
                        <Database className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2">Credit Card Fraud Detection</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Applied six machine learning models such as Logistic Regression, SVM, KNN, Decision Tree,
                          Light GBM, and XGBoost on PCA-transformed data from over 28,000 users, using TensorFlow and
                          scikit-learn.
                        </li>
                        <li>
                          Evaluated precision, recall, and F1 score across all predictive models, with LightGBM
                          achieving the highest accuracy of 95%. Additionally, SHAP analysis was performed to ensure
                          robust model performance and provide valuable insights.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="hover:scale-110 transition-transform">Machine Learning</Badge>
                        <Badge className="hover:scale-110 transition-transform">TensorFlow</Badge>
                        <Badge className="hover:scale-110 transition-transform">scikit-learn</Badge>
                        <Badge className="hover:scale-110 transition-transform">LightGBM</Badge>
                        <Badge className="hover:scale-110 transition-transform">XGBoost</Badge>
                        <Badge className="hover:scale-110 transition-transform">PCA</Badge>
                        <Badge className="hover:scale-110 transition-transform">SHAP</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4 text-center animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">Technologies and tools I work with</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Programming Languages"
                skills={["Python", "R", "SQL", "C", "C++", "Java", "MATLAB"]}
                icon={<Code className="h-8 w-8" />}
                animationDelay="0"
              />
              <SkillCard
                title="Tools & Frameworks"
                skills={["Tableau", "PowerBI", "Django", "Pycharm", "Git", "Dialogflow"]}
                icon={<Briefcase className="h-8 w-8" />}
                animationDelay="100"
              />
              <SkillCard
                title="Data Science"
                skills={["Data Analysis", "LLM", "EDA Pipeline", "Forecasting", "ML", "NLP", "Gen AI"]}
                icon={<LineChart className="h-8 w-8" />}
                animationDelay="200"
              />
              <SkillCard
                title="Libraries"
                skills={["Pandas", "NumPy", "TensorFlow", "Scikit-Learn", "Matplotlib", "PyTorch", "Seaborn"]}
                icon={<Code className="h-8 w-8" />}
                animationDelay="300"
              />
              <SkillCard
                title="Databases & Cloud"
                skills={["MySQL", "PostgreSQL", "MongoDB", "AWS", "DataBricks", "Hadoop"]}
                icon={<Database className="h-8 w-8" />}
                animationDelay="400"
              />
              <SkillCard
                title="Quantitative & Office"
                skills={[
                  "Probability",
                  "Statistical Modeling",
                  "Hypothesis Testing",
                  "Regression",
                  "Excel",
                  "PowerPoint",
                ]}
                icon={<Brain className="h-8 w-8" />}
                animationDelay="500"
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="container py-12 md:py-24 lg:py-32 bg-background/60 backdrop-blur-sm rounded-xl"
        >
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4 text-center animate-fade-in-up">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card className="card-hover-effect animate-fade-in-up">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full animate-pulse-slow">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="card-hover-effect animate-fade-in-up animate-delay-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 animate-pulse-slow">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">asthasoni161@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover-effect animate-fade-in-up animate-delay-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 animate-pulse-slow animate-delay-1000">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <p className="text-muted-foreground">linkedin.com/in/asthasoni</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover-effect animate-fade-in-up animate-delay-400">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 animate-pulse-slow animate-delay-2000">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">GitHub</h3>
                        <p className="text-muted-foreground">github.com/asthasoni</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 relative z-10 bg-background/60 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Astha Soni. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="hover:animate-spin-slow">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:animate-spin-slow">
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills, icon, animationDelay }) {
  return (
    <Card className={`overflow-hidden card-hover-effect animate-fade-in-up animate-delay-${animationDelay}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="rounded-full bg-primary/10 p-3 animate-pulse-slow">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

