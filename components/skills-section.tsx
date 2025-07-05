import { Code } from "lucide-react"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Go", "Swift", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "React Native", "Spring Boot", "Next.js"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS (EC2, S3)", "Docker", "Jenkins", "Ansible"],
  },
]

export function SkillsSection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <Code className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Skills</h2>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.category} className="skills-category">
            <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
