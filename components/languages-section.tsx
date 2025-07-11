import { Languages } from "lucide-react";

const languages = [
  {
    name: "Vietnamese",
    level: "Native Speaker",
  },
  {
    name: "English",
    level: "Highly Proficient",
  },
];

export function LanguagesSection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <Languages className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Languages</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {languages.map((language) => (
          <div key={language.name} className="language-card">
            <h3 className="text-lg font-semibold text-white mb-2">
              {language.name}
            </h3>
            <p className="description-text">{language.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
