import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalData } from '../data/data';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-black via-blue-900/10 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1,
            }}
          >
            <div
              className="w-24 h-24 bg-blue-500 rounded-full filter blur-xl"
              style={{
                transform: `scale(${Math.random() * 2 + 0.5})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 p-1 mb-4 hover:scale-110 transition-transform duration-300">
              <img
                src={personalData.avatarUrl}
                alt={personalData.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              {personalData.name}
            </h1>
          </motion.div>
          
          <div className="text-xl md:text-2xl text-blue-400 mb-8 h-8">
            <TypeAnimation
              sequence={[
                'I build web applications',
                2000,
                'I create user experiences',
                2000,
                'I solve problems',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personalData.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {personalData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white">
                  <i className={`fab fa-${link.icon} text-xl`}></i>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <i className="fas fa-chevron-down text-blue-500 text-2xl"></i>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
