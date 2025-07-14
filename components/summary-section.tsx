import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, User } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+84966687037",
    href: "tel:+84966687037",
  },
  {
    icon: Mail,
    label: "Email",
    value: "phongtan.le11@gmail.com",
    href: "mailto:phongtan.le11@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh, Viet Nam",
    href: null,
  },
];

const softSkills = [
  "Self-directed Learning",
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Responsibility & Ownership",
];

export function SummarySection() {
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <div className="section-icon">
          <User className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-white">Summary</h2>
      </div>

      {/* 1:1 grid for summary and contact */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card className="professional-card">
            <CardContent className="p-0">
              <p className="description-text mb-6">
                Dedicated Software Engineering student with a robust background
                in mobile and web development. Proficient in multiple
                programming languages, including React, Java, Go, and SQL, with
                practical experience in creating responsive and dynamic
                applications.
              </p>
              <p className="description-text">
                My exposure to Docker and AWS complements my understanding of
                contemporary deployment workflows. I excel in collaborative,
                fast-paced environments and quickly adapt to learning new
                technologies, consistently driving workflow efficiency and
                improving processes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <div className="contact-card">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center gap-3">
                  <contact.icon className="h-4 w-4 text-teal-300" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-slate-300 hover:text-teal-300 transition-colors text-sm"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills full width below */}
      <div className="mt-8">
        <div className="contact-card">
          <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
