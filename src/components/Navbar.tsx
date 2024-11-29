import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  

  const resumePath = '/resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Tumelo_Thinane_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero', icon: 'fas fa-home' },
    { name: 'Skills', to: 'skills', icon: 'fas fa-code' },
    { name: 'Projects', to: 'projects', icon: 'fas fa-laptop-code' },
    { name: 'Experience', to: 'experience', icon: 'fas fa-briefcase' },
    { name: 'Contact', to: 'contact', icon: 'fas fa-envelope' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`absolute inset-0 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        } transition-all duration-300`} />

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Portfolio</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className="relative px-4 py-2 group"
                >
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeSection === item.to
                      ? 'bg-blue-500/20'
                      : 'group-hover:bg-white/10'
                  }`} />
                  <div className="relative flex items-center space-x-2">
                    <i className={`${item.icon} text-sm ${
                      activeSection === item.to ? 'text-blue-400' : 'text-gray-400'
                    } group-hover:text-blue-400 transition-colors duration-300`} />
                    <span className={`${
                      activeSection === item.to ? 'text-blue-400' : 'text-gray-300'
                    } group-hover:text-blue-400 transition-colors duration-300`}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
              
              {/* Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                onClick={handleDownload}
              >
                Resume
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg z-50 md:hidden"
          >
            <div className="p-6 pt-20">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                      activeSection === item.to
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-gray-300 hover:bg-white/10'
                    } transition-all duration-300`}
                  >
                    <i className={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Mobile Resume Button */}
                <button className="mt-4 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
