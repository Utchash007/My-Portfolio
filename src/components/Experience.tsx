import { motion } from 'framer-motion';
import { experience } from '../data/skills';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and career development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {experience.map((job: ExperienceType, index: number) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="timeline-line" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2">
                  <div className="timeline-dot">
                    <div className="w-2 h-2 bg-dark-900 rounded-full" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">
                      {job.position}
                    </h4>
                    <span className="text-sm text-primary-400 font-medium">
                      {job.duration}
                    </span>
                  </div>

                  <h5 className="text-lg font-semibold text-gray-300 mb-3">
                    {job.company}
                  </h5>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;