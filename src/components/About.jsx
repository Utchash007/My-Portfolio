import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import DecryptedText from '../utils/DecryptedText/DecryptedText';

import profileImage from '../assets/profile.jpg';
const About = () => {
  const personalInfo = [
    { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: 'Dhaka, Bangladesh' },
    { icon: <Calendar className="w-4 h-4" />, label: 'Experience', value: '2+ Years' },
    { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'shariarhasan872@gmail.com' },
    { icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '+880 1712-877099' },
  ];

  
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <DecryptedText
            text="About Me"
              speed={100}
              maxIterations={10}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
           
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            
            Get to know me better and understand my journey in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-dark-700 rounded-2xl p-2 transform -rotate-1">
                  <img
                    src={profileImage}
                    alt="Shariar Hasan"
                    className="w-full h-96 object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Shariar+Hasan';
                    }}
                  />
                </div>
              </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
               I am an aspiring Software Engineer with a strong foundation in software development and a keen interest in exploring emerging technologies.
                I enjoy tackling complex problems, learning new tools and frameworks, and applying analytical thinking to create practical and efficient solutions.
                 With a proactive mindset and a passion for continuous growth, I aim to contribute meaningfully to collaborative teams 
                 while taking on challenges that push my skills further.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Beyond academics, I actively pursued competitive programming to sharpen my problem-solving and logical reasoning abilities. 
                As Head of the Competitive Programming Community at BUP Infotech Club, I oversaw junior training programs and hosted online contests. During this time, I also solved over 1000 problems across multiple platforms and earned Honorable Mentions at ICPC Asia Dhaka Regional contests. This experience strengthened my perseverance, analytical skills, 
                and ability to approach challenges creatively, while inspiring me to continuously improve and explore innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am particularly interested in roles as a Backend Developer, DevOps Engineer, or AI/ML Engineer, 
                where I can leverage my technical skills, problem-solving mindset, 
                and passion for learning to contribute effectively to real-world projects and cutting-edge solutions.
              </p>
            </div>

            

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 