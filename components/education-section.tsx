import { ExternalLink, GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <GraduationCap className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Education</h2>
      </div>

      <div className="experience-item">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="date-text">Oct 2020 — May 2025</p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-white mb-2">
              Bachelor of Engineering (Software Engineering) •{" "}
              <a href="#" className="company-link">
                RMIT University Vietnam
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="role-hierarchy">Honours • GPA: 3.3/4.0</p>
            <p className="description-text mb-6">
              Comprehensive software engineering program focusing on mobile and web development, software architecture
              and design, database systems, and DevOps & cloud computing. Developed strong foundation in programming
              languages, frameworks, and modern development practices through hands-on projects and collaborative
              learning.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Software Engineering",
                "Mobile Development",
                "Web Development",
                "Database Systems",
                "Cloud Computing",
              ].map((area) => (
                <span key={area} className="tech-badge">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
