import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';
import { education, voluntaryExperience } from '../data/skills';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mr-4">
                <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Academic Journey
              </h3>
            </div>

            <div className="space-y-8">
              {education.filter(edu => edu.degree !== "Higher Secondary Certificate (HSC)").map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < education.filter(edu => edu.degree !== "Higher Secondary Certificate (HSC)").length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-200 dark:bg-dark-700"></div>
                  )}

                  <div className="flex">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="card p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            {edu.duration}
                          </span>
                        </div>
                        
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {edu.institution}
                        </h5>
                        
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Voluntary Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mr-4">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Voluntary Experience
              </h3>
            </div>

            <div className="space-y-8">
              {voluntaryExperience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < voluntaryExperience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-200 dark:bg-dark-700"></div>
                  )}

                  <div className="flex">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="card p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {job.position}
                          </h4>
                          <span className="text-sm text-green-600 dark:text-green-400 font-medium">
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

export default Education;
