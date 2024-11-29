import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "ReapplyMe",
    description: "A full-stack Job Application Platform with AI features",
    image: "/images/reapplyme.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Python"],
    liveUrl: "https://reapplyme.netlify.app",
    githubUrl: "https://github.com",
    category: "Full Stack"
  },
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management app with AI-driven priority suggestions and time estimates.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    githubUrl: "https://github.com",
    category: "AI/ML"
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-github" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-external-link-alt" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-300 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(project => project.category)));
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            <i className="fab fa-github mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
