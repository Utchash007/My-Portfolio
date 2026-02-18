import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';
import { education, voluntaryExperience } from '../data/skills';
import { Education as EducationType, Experience } from '../types';

const Education: React.FC = () => {
  const filteredEdu = education.filter((edu: EducationType) => edu.degree !== "Higher Secondary Certificate (HSC)");

  return (
    <section id="education" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </motion.div>

        {/* Side-by-side cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Academic Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-2.5 rounded-lg bg-primary-500/10 mr-3">
                <GraduationCap className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Academic Journey
              </h3>
            </div>

            {filteredEdu.map((edu: EducationType) => (
              <div key={edu.degree}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-400 font-medium">{edu.duration}</span>
                  {edu.grade && (
                    <span className="text-xs px-2.5 py-1 rounded-full border border-primary-500/30 text-primary-400">
                      CGPA: {edu.grade}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{edu.institution}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Voluntary Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-2.5 rounded-lg bg-primary-500/10 mr-3">
                <Users className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Voluntary Experience
              </h3>
            </div>

            {voluntaryExperience.map((job: Experience) => (
              <div key={job.company}>
                <span className="text-sm text-primary-400 font-medium">{job.duration}</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-1">
                  {job.position}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{job.company}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
