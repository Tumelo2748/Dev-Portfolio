import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalData } from '../data/data';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-900 rounded-lg p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <p className="text-gray-400">Or reach out directly:</p>
              <a
                href={`mailto:${personalData.email}`}
                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              >
                {personalData.email}
              </a>
              <div className="flex space-x-6">
                {personalData.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className={`fab fa-${link.icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
