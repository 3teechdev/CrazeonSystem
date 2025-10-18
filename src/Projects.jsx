import React from "react";
import { ExternalLink } from "lucide-react";

// ===================== Projects Data =====================
const projects = [
  {
    title: "Travel Project",
    description: "Online travel project",
    tags: ["HTML", "CSS", "JS"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszyGxUGWO6BPnbwsWQT9fGYMYaYGVKadjCg&s",
    link: "https://bhavyp2311.github.io/travel-project/index.html",
  },
  {
    title: "Music App",
    description: "Music Website",
    tags: ["HTML", "CSS", "JS", "NODE.js"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1iHEtGpPZPkn7NyTN-MvFW936EUuBZ-vVA&s",
    link: "https://3techmusic-github-io-fq3n.vercel.app/",
  },
];

// ===================== Card Component =====================
const Card = ({ project, index }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1 text-[#cdd6f9] group-hover:text-[#a8b0d4] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

// ===================== Projects Component =====================
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center text-[#cdd6f9] mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our portfolio of successful web development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===================== Navigation Component =====================
// const Navigation = () => {
//   return (
//     <nav className="fixed w-full top-0 left-0 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center text-[#cdd6f9]">
//         <h1 className="text-2xl font-bold">3-Tech Developer</h1>
//         <div className="space-x-4">
//           <a href="#projects" className="hover:text-[#a8b0d4] transition-colors">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-[#a8b0d4] transition-colors">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// ===================== Projects Page =====================
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-[#cdd6f9]">
      <Navigation />
      <div className="pt-24 pb-12">
        <Projects />
      </div>
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8 text-center text-gray-400 border-t border-gray-700">
        <p>&copy; 2024 3-Tech Developer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
