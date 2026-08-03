import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Mobile Development
  { name: "Flutter", level: 95, category: "mobile" },
  { name: "Dart", level: 95, category: "mobile" },
  { name: "Firebase (Auth, Firestore, Realtime DB)", level: 92, category: "mobile" },
  { name: "State Management (Provider, Riverpod, Bloc)", level: 90, category: "mobile" },
  { name: "REST API Integration", level: 92, category: "mobile" },
  { name: "Responsive UI & Animations", level: 90, category: "mobile" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "NestJS", level: 85, category: "backend" },
  { name: "Express.js", level: 82, category: "backend" },
  { name: "JWT Authentication", level: 88, category: "backend" },
  { name: "Prisma ORM", level: 82, category: "backend" },
  { name: "REST API Development", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },

  // Tools & Deployment
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Google Play Console", level: 92, category: "tools" },
  { name: "App Store Connect", level: 85, category: "tools" },
  { name: "Android Studio", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "Figma to Flutter", level: 92, category: "tools" },
];

// ✅ Corrected categories
const categories = [
  "all",
  "mobile",
  "backend",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
  My expertise spans cross-platform mobile development, scalable backend
  systems, cloud services, app deployment, and modern development tools used
  to build production-ready applications.
</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  <div className="bg-card rounded-xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary">1+</h3>
    <p className="text-muted-foreground text-sm">Years Experience</p>
  </div>

  <div className="bg-card rounded-xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary">12+</h3>
    <p className="text-muted-foreground text-sm">Published Projects</p>
  </div>

  <div className="bg-card rounded-xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary">246+</h3>
    <p className="text-muted-foreground text-sm">LeetCode Problems</p>
  </div>

  <div className="bg-card rounded-xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary">10%</h3>
    <p className="text-muted-foreground text-sm">Global Ranking</p>
  </div>
</div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
    
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              
              <div className="flex justify-between items-center mb-2">
  <h3 className="font-semibold">{skill.name}</h3>
  <span className="text-primary font-medium">
    {skill.level}%
  </span>
</div>

<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
  <div
    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
    style={{ width: `${skill.level}%` }}
  />
</div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
