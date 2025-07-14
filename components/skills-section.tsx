import { Code } from "lucide-react";
import Image from "next/image";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "Ansible",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
    ],
  },
];

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
        {skillCategories.map((category) => (
          <div key={category.category} className="skills-category">
            <h3 className="text-lg font-semibold text-white mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-6 md:gap-8 items-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center w-20 md:w-28"
                >
                  {skill.icon ? (
                    <div className="bg-white rounded p-1 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={80}
                        height={80}
                        className="object-contain w-10 h-10 md:w-16 md:h-16"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-slate-700 rounded">
                      <span className="text-white text-2xl md:text-3xl font-bold">
                        {skill.name[0]}
                      </span>
                    </div>
                  )}
                  <span className="text-xs md:text-sm text-slate-200 mt-2 text-center break-words">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
