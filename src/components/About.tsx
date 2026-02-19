import { motion } from 'framer-motion';
import DecryptedText from '../utils/DecryptedText/DecryptedText';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Top gradient border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Right-side teal glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <DecryptedText
              text="Get to know me better"
              speed={100}
              maxIterations={10}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Understanding my journey in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-2xl blur-xl" />

              {/* Image frame */}
              <div className="relative bg-[#111] rounded-2xl p-1.5 border border-white/10">
                <img
                  src="/profile.jpg"
                  alt="Shariar Hasan"
                  className="w-full h-[420px] object-cover object-top rounded-xl"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x500/0a0a0a/14b8a6?text=Shariar+Hasan';
                  }}
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#111] border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-400" />
                </span>
                <span className="text-white font-medium text-sm">Available for work</span>
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
            <div className="space-y-5 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                I am an aspiring Software Engineer with a strong foundation in software development and a keen interest in exploring emerging technologies.
                I enjoy tackling complex problems, learning new tools and frameworks, and applying analytical thinking to create practical and efficient solutions.
                With a proactive mindset and a passion for continuous growth, I aim to contribute meaningfully to collaborative teams
                while taking on challenges that push my skills further.
              </p>
              <p>
                Beyond academics, I actively pursued competitive programming to sharpen my problem-solving and logical reasoning abilities.
                As Head of the Competitive Programming Community at BUP Infotech Club, I oversaw junior training programs and hosted online contests. During this time, I also solved over <span className="text-primary-400 font-medium">1000+ problems</span> across multiple platforms and earned <span className="text-primary-400 font-medium">Honorable Mentions at ICPC Asia Dhaka Regional</span> contests. This experience strengthened my perseverance, analytical skills,
                and ability to approach challenges creatively, while inspiring me to continuously improve and explore innovative solutions.
              </p>
              <p>
                I am particularly interested in roles as a <span className="text-white font-semibold">Backend Developer</span>, <span className="text-white font-semibold">DevOps Engineer</span>, or <span className="text-white font-semibold">AI/ML Engineer</span>,
                where I can leverage my technical skills, problem-solving mindset,
                and passion for learning to contribute effectively to real-world projects and cutting-edge solutions.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Problems Solved</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">2x</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">ICPC Regional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;