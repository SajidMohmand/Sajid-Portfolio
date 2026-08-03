import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OlirianPredicts – Fortune Teller App",
    description:
      "Cross-platform Flutter app that delivers personalized fortune predictions with a clean UI, smooth performance, and Google Play Store deployment.",
    image: "/projects/olirianpredicts.png",
    tags: ["Flutter", "Firebase", "Android", "iOS"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.draya.OlirianPredicts&pcampaignid=web_share",
    githubUrl: "",
  },
  {
    id: 2,
    title: "MyPrayerWorks – Faith Community",
    description:
      "Faith-based social community where users share prayers, testimonies, and encouragement through an engaging Flutter mobile application.",
    image: "/projects/MyPrayerWorks.png",
    tags: ["Flutter", "Firebase", "Social App", "Android"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.drayawill.myprayerworks&pcampaignid=web_share",
    githubUrl: "",
  },
  {
    id: 3,
    title: "SyncSphere – Event Planning Hub",
    description:
      "Collaborative event planning app featuring guest management, budgets, tasks, timelines, calendar, and local offline persistence.",
    image: "/projects/SyncSphere.png",
    tags: ["Flutter", "Hive", "Provider", "Material 3"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 4,
    title: "SchoolID Collect",
    description:
      "Android Flutter app that generates student ID cards from school templates with photo upload and native Email/WhatsApp sharing.",
    image: "/projects/SchoolID Collect.png",
    tags: ["Flutter", "Android", "Image Processing", "PDF"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 5,
    title: "PlayConnect – Sports Network",
    description:
      "Sports networking MVP helping users discover players in their organization and connect instantly through WhatsApp.",
    image: "/projects/PlayConnect.png",
    tags: ["Flutter", "Node.js", "PostgreSQL", "JWT"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Korva – Home Services",
    description:
      "Marketplace app connecting customers with trusted local professionals using Firebase, Google Maps, and real-time chat.",
    image: "/projects/Korva.png",
    tags: ["Flutter", "Firebase", "Google Maps", "Firestore"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 7,
    title: "OFFY – Food Delivery App",
    description:
      "On-demand food delivery platform with real-time order tracking, driver management, payments, maps, and in-app chat.",
    image: "/projects/offy.png",
    tags: ["Flutter", "Firebase", "Google Maps", "Payments"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 8,
    title: "Amber Zahrat Jewellers",
    description:
      "Real-time gold and silver rates app powered by WebSockets with live market prices, analytics, and trading insights.",
    image: "/projects/amber-zahrat.png",
    tags: ["Flutter", "WebSocket", "VPS", "Real-Time Data"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.jazzify.amber&pcampaignid=web_share",
    githubUrl: "",
  },
  {
    id: 9,
    title: "MediaHub – Bilingual News, Articles & Podcast App",
    description:
      "Cross-platform Flutter media app delivering news, articles, documentaries, and podcasts with full Arabic/English RTL support, in-app video playback, and a unified search & saved library experience.",
    image: "/projects/mediahub.png",
    tags: ["Flutter", "Dart", "Provider", "Android", "iOS"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 10,
    title: "Japan Travel Assistant – Flutter App",
    description:
      "A smart Flutter app to explore Japan's top cities, book flights/hotels, and get AI-powered travel recommendations. Includes chat assistant, trip planner, SOS feature, and GPT-4 integration.",
    image: "/projects/project1.jpg",
    tags: ["Flutter", "Firebase", "GPT-4", "AI Assistant"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Legal Right Awareness App",
    description:
      "A final year Flutter project connecting clients with lawyers. Features include real-time chat, AI legal assistant, complaint system, and lawyer recommendations with admin panel.",
    image: "/projects/project2.jpeg",
    tags: ["Flutter", "Firebase", "AI", "Real-time Chat"],
    demoUrl: "#",
    githubUrl: "https://github.com/SajidMohmand/Final-Year-Project",
  },
  {
    id: 12,
    title: "GeoTrack – Location Tracking App",
    description:
      "Flutter-based geolocation app with address saving, shortest path calculation, and real-time tracking. Ideal for logistics and delivery planning.",
    image: "/projects/project3.png",
    tags: ["Flutter", "Firebase", "Google Maps API", "Geolocation"],
    demoUrl: "#",
    githubUrl: "https://github.com/SajidMohmand/GeoTrack-Smart-Address-Tracker",
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll + support Escape-to-close while the lightbox is open
  useEffect(() => {
    if (!activeProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Fiverr-style hover zoom overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white text-sm font-medium tracking-wide border border-white/70 rounded-full px-4 py-2">
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SajidMohmand/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Fiverr-style lightbox / zoom modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative bg-card w-full max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X size={18} />
            </button>

            <div className="w-full max-h-[55vh] overflow-hidden bg-black/5">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 overflow-y-auto text-left">
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {activeProject.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {activeProject.description}
              </p>

              <div className="flex gap-4">
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cosmic-button flex items-center gap-2"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={18} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
