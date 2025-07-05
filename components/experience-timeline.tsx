import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of microservices architecture, mentored junior developers, and improved system performance by 40%.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    gradient: "from-blue-500 to-purple-500",
    achievements: ["Led team of 5 developers", "40% performance improvement", "Mentored 3 junior developers"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Built and maintained web applications, implemented CI/CD pipelines, and collaborated with cross-functional teams.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Jenkins"],
    gradient: "from-green-500 to-teal-500",
    achievements: ["Built 3 major features", "Implemented CI/CD", "Reduced deployment time by 60%"],
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    location: "Remote",
    period: "2018 - 2020",
    description:
      "Developed responsive web interfaces, optimized application performance, and ensured cross-browser compatibility.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Redux"],
    gradient: "from-orange-500 to-red-500",
    achievements: ["Improved page load speed by 50%", "Built 10+ responsive websites", "Cross-browser compatibility"],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="glass-effect border-white/10 card-hover animate-fade-in relative overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${exp.gradient}`} />
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-2">
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                    <Building className="h-4 w-4 text-white" />
                  </div>
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-white/80 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="text-white/40">•</span>
                  <span className="flex items-center gap-1 text-white/60">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white/80 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/70 leading-relaxed">{exp.description}</p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white/80">Key Achievements:</h4>
              <div className="grid gap-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-white/10 border-white/20 text-white/80 hover:bg-white/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
