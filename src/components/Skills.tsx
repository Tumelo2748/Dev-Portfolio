import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  level: 'main' | 'secondary' | 'other';
  expertise: string;
}

const skills: Skill[] = [
  // Main Technologies
  { name: 'React', icon: 'devicon-react-original colored', level: 'main', expertise: 'Expert' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 'main', expertise: 'Advanced' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 'main', expertise: 'Advanced' },
  { name: 'Python', icon: 'devicon-python-plain colored', level: 'main', expertise: 'intermediate' },
  
  // Secondary Technologies
  { name: 'Next.js', icon: 'devicon-nextjs-plain', level: 'secondary', expertise: 'Proficient' },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain colored', level: 'secondary', expertise: 'Advanced' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 'secondary', expertise: 'Proficient' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', level: 'secondary', expertise: 'Proficient' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'secondary', expertise: 'Proficient' },
  {name: 'Supabase', icon: 'devicon-supabase-plain colored', level: 'secondary', expertise: 'Proficient' },
  
  // Other Skills
  { name: 'Git', icon: 'devicon-git-plain colored', level: 'other', expertise: 'Advanced' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', level: 'other', expertise: 'Intermediate' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-original colored', level: 'other', expertise: 'Intermediate' },
  { name: 'Redux', icon: 'devicon-redux-original colored', level: 'other', expertise: 'Proficient' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain colored', level: 'other', expertise: 'Intermediate' },
  { name: 'Jest', icon: 'devicon-jest-plain colored', level: 'other', expertise: 'Proficient' },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const sizeClasses = {
    main: 'col-span-2 h-28',
    secondary: 'col-span-1 h-24',
    other: 'col-span-1 h-24',
  };

  const expertiseColors = {
    'Expert': 'text-blue-400',
    'Advanced': 'text-blue-300',
    'Proficient': 'text-purple-300',
    'Intermediate': 'text-gray-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 20 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[skill.level]} relative group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="relative h-full p-3 flex flex-col items-center justify-center">
        <i className={`${skill.icon} ${skill.level === 'main' ? 'text-3xl' : 'text-2xl'} mb-2 group-hover:scale-110 transition-transform duration-300`} />
        <h3 className={`${skill.level === 'main' ? 'text-base' : 'text-sm'} font-semibold text-center`}>
          {skill.name}
        </h3>
        <span className={`text-xs mt-1 ${expertiseColors[skill.expertise as keyof typeof expertiseColors] || 'text-gray-400'}`}>
          {skill.expertise}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const mainSkills = skills.filter(skill => skill.level === 'main');
  const secondarySkills = skills.filter(skill => skill.level === 'secondary');
  const otherSkills = skills.filter(skill => skill.level === 'other');

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Main Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
              {mainSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Secondary Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Secondary Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {secondarySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-400">Other Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {otherSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
