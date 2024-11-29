import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Replace this with your actual resume PDF path
  const resumePath = '/resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Tumelo_Thinane_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative">
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
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            <i className="fas fa-download" />
            Download Resume
          </button>
        </div>

        {/* PDF Viewer */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
        >
          <div className="h-[800px]">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                fileUrl={resumePath}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1.2}
              />
            </Worker>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
