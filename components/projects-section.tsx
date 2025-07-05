import { ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Android Dating App Simulation",
    description:
      "Developed an Android app with matching features based on user preferences, location, and interests using Java, Firebase, and Android Studio. Implemented user matching algorithm, location-based filtering, real-time chat, and comprehensive profile management.",
    technologies: [
      "Java",
      "Firebase",
      "Android Studio",
      "Location Services",
      "Real-time Chat",
    ],
    github: "https://github.com/PopPop-DatingApp/PopPop",
    platform: "Android",
  },
  {
    title: "iOS CoinMarket",
    description:
      "Developed an iOS app displaying real-time cryptocurrency prices, portfolio tracking, and historical data using Swift and Xcode. Features include real-time price updates, portfolio tracking, historical charts, and customizable price alerts.",
    technologies: ["Swift", "Xcode", "Core Data", "REST API", "Charts"],
    github: "https://github.com/Phuc0906/CoinMarket",
    platform: "iOS",
  },
];

export function ProjectsSection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <FolderOpen className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Side Projects</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title} •{" "}
              <a href={project.github} className="company-link">
                {project.platform}
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="description-text mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
