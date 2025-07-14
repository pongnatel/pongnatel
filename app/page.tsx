"use client";

import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { LanguagesSection } from "@/components/languages-section";
import { ProjectsSection } from "@/components/projects-section";

export default function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-slate-800">
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="hero-container fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Phong Le
          </h1>
          <p className="text-xl text-slate-300 mb-2">Software Engineer</p>
          <p className="description-text max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="space-y-0">
          {/* Summary Section */}
          <section id="summary" className="scroll-mt-16">
            <SummarySection />
          </section>

          {/* Professional Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <ExperienceSection />
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-16">
            <EducationSection />
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-16">
            <SkillsSection />
          </section>

          {/* Languages Section */}
          <section id="languages" className="scroll-mt-16">
            <LanguagesSection />
          </section>

          {/* Side Projects Section */}
          <section id="projects" className="scroll-mt-16">
            <ProjectsSection />
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 text-center border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            © 2024 Phong Le. Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
