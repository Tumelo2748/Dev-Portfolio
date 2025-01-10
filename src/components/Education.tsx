import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Education {
  school: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string[];
  achievements: string[];
  logo: string;
}

const educationData: Education[] = [
  {
    school: "University of Johannesburg",
    degree: "Business Information technology",
    field: "Bootcamp",
    duration: "2020 - 2023",
    location: "Johannesburg, South Africa",
    description: [
      "Specialized in infomation Systems and software development",
      "Advanced coursework in Software Engineering and Systems Design",
      "Final year project Project Leader"
    ],
    achievements: [
      "Project leader",
      "Built fullstack mobile app (IOT)"
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FYYbKAlNjpB1lpbMSBBheXBpOApV9V7jjw&s"
  },
  {
    school: "Recoded",
    degree: "Fullstack Engineering",
    field: "Bootcamp",
    duration: "2024",
    location: "Remote",
    description: [
      "Intensive frontend development program",
      "Focus on modern JavaScript frameworks and responsive design",
      "Collaborative projects using industry-standard tools"
    ],
    achievements: [
      "Built 2 full-scale web applications",
      "Certified in Fullstack Engineering",
      "Built 40 projects"
    ],
    logo: "https://pbs.twimg.com/profile_images/1392007007427760129/1un8Qm23_400x400.png"
  },
  
];

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Dev Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </motion.div>

      {/* Timeline Container */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-16 relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 top-0 hidden md:block" />

            {/* Education Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="ml-8 md:ml-12 relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 top-8 hidden md:block">
                <div className="absolute w-full h-full rounded-full bg-blue-500 animate-ping opacity-75" />
              </div>

              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                {/* Left Column - School Info */}
                <div>
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto md:mx-0">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{edu.school}</h3>
                  <p className="text-gray-400 mb-2">{edu.duration}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>

                {/* Right Column - Details */}
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-300">{edu.field}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Highlights</h5>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {edu.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Achievements</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
    </section>
  );
};

export default EducationSection;
