import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Work Experience
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-blue-600 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="bg-gray-800 rounded-lg p-6 ml-6">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                  <span className="text-gray-400">
                    {job.startDate} - {job.endDate || 'Present'}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-xl text-blue-500">{job.company}</h4>
                  <p className="text-gray-400">{job.location}</p>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
