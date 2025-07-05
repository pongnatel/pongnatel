"use client"

import { useState } from "react"
import { User, Briefcase, GraduationCap, Code, Languages, FolderOpen, Github, Linkedin, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  { title: "Summary", url: "#summary", icon: User },
  { title: "Experience", url: "#experience", icon: Briefcase },
  { title: "Education", url: "#education", icon: GraduationCap },
  { title: "Skills", url: "#skills", icon: Code },
  { title: "Languages", url: "#languages", icon: Languages },
  { title: "Projects", url: "#projects", icon: FolderOpen },
]

export function HeaderNav() {
  const [activeSection, setActiveSection] = useState("summary")

  const handleNavClick = (url: string, title: string) => {
    setActiveSection(title.toLowerCase())
    const element = document.querySelector(url)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-800/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Profile Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border border-slate-600">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
              <AvatarFallback className="bg-slate-700 text-slate-200 font-medium">PL</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-white">Phong Le</h1>
              <p className="text-sm text-slate-400">Software Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.url, item.title)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.title.toLowerCase()
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-teal-300">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-teal-300">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-slate-800 border-slate-700">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                    <Avatar className="h-12 w-12 border border-slate-600">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Profile" />
                      <AvatarFallback className="bg-slate-700 text-slate-200 font-medium">PL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-lg font-semibold text-white">Phong Le</h2>
                      <p className="text-sm text-slate-400">Software Engineer</p>
                    </div>
                  </div>

                  {menuItems.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleNavClick(item.url, item.title)}
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
