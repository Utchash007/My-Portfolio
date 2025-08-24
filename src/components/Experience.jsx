import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/skills';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and career development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Journey
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-200 dark:bg-dark-700"></div>
                  )}

                  <div className="flex">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="card p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {job.position}
                          </h4>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {job.duration}
                          </span>
                        </div>
                        
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {job.company}
                        </h5>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 