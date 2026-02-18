import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, X } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  value: string;
  link: string | null;
}

interface SocialLink {
  icon: React.ReactElement;
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Primary Email',
      value: 'shariarhasan872@gmail.com',
      link: 'mailto:shariarhasan872@gmail.com'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Secondary Email',
      value: 'utchash2001@gmail.com',
      link: 'mailto:utchash2001@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: null
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/Utchash007',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shariarhasan',
    },
    {
      icon: <X className="w-5 h-5" />,
      name: 'Twitter',
      url: 'https://x.com/utchash2001',
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info: ContactInfo, index: number) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="contact-card flex items-center space-x-4"
                >
                  <div className="p-2.5 rounded-lg bg-primary-500/10">
                    <div className="text-primary-400">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social: SocialLink, index: number) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-200 text-gray-400 hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                setTimeout(() => (e.target as HTMLFormElement).reset(), 5);
              }}
              action="https://formspree.io/f/xovlopeg"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;