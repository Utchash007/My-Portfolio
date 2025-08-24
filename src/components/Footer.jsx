import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-8 sm:py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              © 2025 Shariar Hasan. Made using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 