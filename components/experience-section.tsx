import { ExternalLink, Briefcase } from "lucide-react"

const experiences = [
  {
    period: "Feb 2025 — May 2025",
    title: "Frontend Developer",
    company: "INTEL PRODUCTS VIETNAM & DHL",
    companyUrl: "#",
    description:
      "Developed a desktop application using ElectronJS and Python to replace VBA macros, automating DHL's daily shipment reports. Achieved a 72% reduction in processing time, significantly improving operational efficiency. Enhanced data accuracy and provided a scalable solution for data-intensive industries, streamlining workflow processes.",
    technologies: ["ElectronJS", "Python", "VBA", "Data Processing"],
  },
  {
    period: "Mar 2024 — Oct 2024",
    title: "Intern Developer",
    company: "VNETWORK JSC",
    companyUrl: "#",
    description:
      "Designed and implemented Drive feature using Go and TypeScript for the company's internal data center, supporting secure file uploads and sharing, and seamless AWS S3 integration. Enhanced data accessibility and reliability, streamlining workflows across multiple teams.",
    technologies: ["Go", "TypeScript", "AWS S3", "File Management"],
  },
]

export function ExperienceSection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <Briefcase className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <p className="date-text">{exp.period}</p>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title} •{" "}
                  <a href={exp.companyUrl} className="company-link">
                    {exp.company}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>
                <p className="description-text mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
