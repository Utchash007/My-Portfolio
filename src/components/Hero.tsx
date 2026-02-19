import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Shariar Hasan';

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayedName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const PARTICLE_COUNT = 80;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${p.opacity})`;
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToAbout = (): void => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">

      {/* Canvas Particle Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern" />

      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-cyan-900/10 pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="section-badge">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name with typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {displayedName}
            <span className="inline-block w-[3px] h-[0.9em] bg-primary-400 ml-1 align-middle" style={{ animation: 'blink-caret 0.8s step-end infinite' }} />
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text mb-8"
          >
            Aspiring Software Engineer & AI/ML Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I am an aspiring Software Engineer with a strong interest in technology and problem solving.
            Eager to learn, grow, and contribute to impactful projects while exploring different areas of the software industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-5 mb-16"
          >
            <a
              href="https://github.com/Utchash007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href="https://linkedin.com/in/shariarhasan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href="mailto:shariarhasan872@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-400" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-xs text-gray-500 tracking-[0.3em] uppercase mb-2">Scroll</span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5" style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}>
              <div className="w-1 h-1.5 bg-primary-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;