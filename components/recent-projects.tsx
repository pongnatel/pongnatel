import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "Live",
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-blue-600 to-purple-600",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management with drag-and-drop functionality",
    technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    status: "In Progress",
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-green-600 to-teal-600",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization and forecasting",
    technologies: ["Vue.js", "D3.js", "Express", "Weather API"],
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-orange-600 to-red-600",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function RecentProjects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          className="card-hover glass-effect border-white/10 overflow-hidden group animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                {project.title}
              </CardTitle>
              <Badge
                variant={
                  project.status === "Live" ? "default" : project.status === "In Progress" ? "secondary" : "outline"
                }
                className={
                  project.status === "Live"
                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                    : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                }
              >
                {project.status}
              </Badge>
            </div>
            <CardDescription className="text-white/70">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-white/5 border-white/20 text-white/80 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1 border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                asChild
                className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
