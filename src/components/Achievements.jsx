import { motion } from 'framer-motion';
import { Award, Trophy, Code, Users } from 'lucide-react';
import { SiCodeforces, SiCodechef, SiLeetcode} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import icpcLogo from '../assets/icpc_foundation-3.png';
const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Notable accomplishments in competitive programming, contests, and professional recognition
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg mr-4">
                <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Programming Contests
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img src={icpcLogo} alt="ICPC Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">ICPC</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Honorable Mention 2023 & 2024</p>
                  </div>
                  <a 
                    href="https://icpc.global/ICPCID/VRAXMHLVC062" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 dark:text-slate-100 hover:text-slate-400 dark:hover:text-slate-400 text-sm font-medium transition-colors"
                  >
                    Visit →
                  </a>
                </div>
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <Trophy className="text-green-600 dark:text-green-400 w-12 h-12" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">MIST Independence Day</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">8th place in 2023</p>
                  </div>
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                    🥈
                  </span>
                </div>
              </motion.div>

              {/* Participation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <Code className="text-blue-600 dark:text-blue-400 w-12 h-12" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Other Contests</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">BUET IUPC, IUT ICT Fest</p>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    🎯
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="card p-8 mb-12"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mr-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Online Platforms
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <SiCodeforces className="text-lime-600 dark:text-lime-400 w-12 h-12" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Codeforces Pupil</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Max Rating: 1201</p>
                  </div>
                  <a 
                    href="https://codeforces.com/profile/Shariar67" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-600 dark:text-lime-400 hover:text-lime-800 dark:hover:text-lime-300 text-sm font-medium transition-colors"
                  >
                    Visit →
                  </a>
                </div>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <SiCodechef className="text-orange-600 dark:text-orange-400 w-12 h-12" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">CodeChef 2 Star</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Max Rating: 1453</p>
                  </div>
                  <a 
                    href="https://www.codechef.com/users/utchash_007" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    Visit →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-center mb-4">
                  <SiLeetcode className="text-yellow-600 dark:text-yellow-400 w-12 h-12" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">LeetCode</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total solved: 100+</p>
                  </div>
                  <a 
                    href="https://leetcode.com/u/shariarhasan872/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 text-sm font-medium transition-colors"
                  >
                    Visit →
                  </a>
                </div>
              </motion.div>
            </div>

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
            >
              <div className="flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">🎯</span>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Solved 1000+ problems across platforms
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
