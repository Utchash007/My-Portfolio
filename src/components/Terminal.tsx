import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { skills, experience, education } from '../data/skills';

interface TerminalLine {
  text: string;
  type: 'system' | 'ok' | 'command' | 'output' | 'error' | 'header' | 'instruction' | 'divider';
}

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOOT_LINES: TerminalLine[] = [
  { text: '', type: 'divider' },
  { text: '  SHARIAR-HASAN-PORTFOLIO v2.0.0', type: 'header' },
  { text: '', type: 'divider' },
  { text: '[ OK ] Starting kernel...', type: 'ok' },
  { text: '[ OK ] Loading portfolio modules...', type: 'ok' },
  { text: '[ OK ] Initializing React v19.0.0 runtime...', type: 'ok' },
  { text: '[ OK ] Mounting TailwindCSS v3.4.0 engine...', type: 'ok' },
  { text: '[ OK ] Connecting to localhost:5173...', type: 'ok' },
  { text: '[ OK ] Loading developer profile assets...', type: 'ok' },
  { text: '[ OK ] Compiling project showcase...', type: 'ok' },
  { text: '[ OK ] Verifying competitive programming badges...', type: 'ok' },
  { text: '[ OK ] Loading ICPC achievements...', type: 'ok' },
  { text: '[ OK ] Hydrating contact form endpoints...', type: 'ok' },
  { text: '[ OK ] All systems operational.', type: 'ok' },
  { text: '', type: 'system' },
  { text: "Type 'help' to see available commands.", type: 'instruction' },
];

const BOOT_DELAY = 80;

// ──────────── Command Handlers ────────────

function getHelpOutput(): TerminalLine[] {
  return [
    { text: '', type: 'system' },
    { text: '  Available Commands:', type: 'header' },
    { text: '', type: 'divider' },
    { text: '  help       — Show this help message', type: 'output' },
    { text: '  about      — Learn about me', type: 'output' },
    { text: '  skills     — View my technical skills', type: 'output' },
    { text: '  projects   — Browse my projects', type: 'output' },
    { text: '  experience — View my work experience', type: 'output' },
    { text: '  education  — View my education', type: 'output' },
    { text: '  contact    — Get my contact info', type: 'output' },
    { text: '  clear      — Clear the terminal', type: 'output' },
    { text: '', type: 'system' },
  ];
}

function getAboutOutput(): TerminalLine[] {
  return [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║          About — Shariar Hasan       ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
    { text: '  I am an aspiring Software Engineer with a strong', type: 'output' },
    { text: '  foundation in software development and a keen', type: 'output' },
    { text: '  interest in exploring emerging technologies.', type: 'output' },
    { text: '', type: 'system' },
    { text: '  🏆 1000+ Problems Solved across platforms', type: 'output' },
    { text: '  🏅 2x ICPC Asia Dhaka Regional (Honorable Mention)', type: 'output' },
    { text: '  💼 Currently working as Software Engineer @ Softifybd', type: 'output' },
    { text: '', type: 'system' },
    { text: '  Interested in: Backend Dev · DevOps · AI/ML', type: 'instruction' },
    { text: '', type: 'system' },
  ];
}

function getSkillsOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║           Technical Skills            ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
  ];

  const categories: { key: keyof typeof skills; label: string }[] = [
    { key: 'frontend', label: '🎨 Frontend' },
    { key: 'backend', label: '⚙️  Backend' },
    { key: 'aiml', label: '🧠 AI / ML' },
    { key: 'tools', label: '🔧 Tools' },
  ];

  for (const { key, label } of categories) {
    lines.push({ text: `  ${label}`, type: 'instruction' });
    const skillList = skills[key].map((s) => s.name).join(', ');
    lines.push({ text: `    ${skillList}`, type: 'output' });
    lines.push({ text: '', type: 'system' });
  }

  return lines;
}

function getProjectsOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║              Projects                ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
  ];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    lines.push({ text: `  [${i + 1}] ${project.title}`, type: 'instruction' });
    lines.push({ text: `      ${project.description.slice(0, 90)}...`, type: 'output' });
    lines.push({ text: `      Tech: ${project.technologies.join(', ')}`, type: 'output' });
    lines.push({ text: `      GitHub: ${project.github}`, type: 'output' });
    lines.push({ text: '', type: 'system' });
  }

  return lines;
}

function getExperienceOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║           Work Experience             ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
  ];

  for (const exp of experience) {
    lines.push({ text: `  💼 ${exp.position} @ ${exp.company}`, type: 'instruction' });
    lines.push({ text: `     ${exp.duration}`, type: 'output' });
    lines.push({ text: `     ${exp.description.slice(0, 100)}...`, type: 'output' });
    lines.push({ text: `     Tech: ${exp.technologies.join(', ')}`, type: 'output' });
    lines.push({ text: '', type: 'system' });
  }

  return lines;
}

function getEducationOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║              Education               ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
  ];

  for (const edu of education) {
    lines.push({ text: `  🎓 ${edu.degree}`, type: 'instruction' });
    lines.push({ text: `     ${edu.institution}`, type: 'output' });
    lines.push({ text: `     ${edu.duration}`, type: 'output' });
    if (edu.grade) {
      lines.push({ text: `     CGPA: ${edu.grade}`, type: 'output' });
    }
    lines.push({ text: '', type: 'system' });
  }

  return lines;
}

function getContactOutput(): TerminalLine[] {
  return [
    { text: '', type: 'system' },
    { text: '  ╔══════════════════════════════════════╗', type: 'header' },
    { text: '  ║            Contact Info               ║', type: 'header' },
    { text: '  ╚══════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'system' },
    { text: '  📧 Email:    shariarhasan872@gmail.com', type: 'output' },
    { text: '  📧 Alt:      utchash2001@gmail.com', type: 'output' },
    { text: '  🐙 GitHub:   github.com/Utchash007', type: 'output' },
    { text: '  💼 LinkedIn: linkedin.com/in/shariarhasan', type: 'output' },
    { text: '  📍 Location: Dhaka, Bangladesh', type: 'output' },
    { text: '', type: 'system' },
    { text: "  Feel free to reach out — I'd love to connect!", type: 'instruction' },
    { text: '', type: 'system' },
  ];
}

// ──────────── Terminal Component ────────────

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    });
  }, []);

  // Boot sequence
  useEffect(() => {
    if (!isOpen) return;

    // Reset state on open
    setLines([]);
    setInputValue('');
    setIsBooting(true);
    setCommandHistory([]);
    setHistoryIndex(-1);

    let currentIndex = 0;
    let cancelled = false;

    const runBoot = () => {
      if (cancelled) return;
      if (currentIndex < BOOT_LINES.length) {
        const lineToAdd = BOOT_LINES[currentIndex];
        currentIndex++;
        setLines(prev => [...prev, lineToAdd]);
        setTimeout(runBoot, BOOT_DELAY);
      } else {
        setIsBooting(false);
      }
    };

    // Small initial delay before boot starts
    const initialTimer = setTimeout(runBoot, 200);

    return () => {
      cancelled = true;
      clearTimeout(initialTimer);
    };
  }, [isOpen]);

  // Scroll on new lines
  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  // Focus input when boot finishes
  useEffect(() => {
    if (!isBooting && isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isBooting, isOpen]);

  // Process commands
  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const commandLine: TerminalLine = { text: `$ ${cmd}`, type: 'command' };

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    let output: TerminalLine[];

    switch (trimmed) {
      case 'help':
        output = getHelpOutput();
        break;
      case 'about':
        output = getAboutOutput();
        break;
      case 'skills':
        output = getSkillsOutput();
        break;
      case 'projects':
        output = getProjectsOutput();
        break;
      case 'experience':
        output = getExperienceOutput();
        break;
      case 'education':
        output = getEducationOutput();
        break;
      case 'contact':
        output = getContactOutput();
        break;
      default:
        output = [
          { text: '', type: 'system' },
          { text: `  Command not found: ${trimmed}`, type: 'error' },
          { text: "  Type 'help' to see available commands.", type: 'instruction' },
          { text: '', type: 'system' },
        ];
    }

    setLines(prev => [...prev, commandLine, ...output]);
  }, []);

  const handleSubmit = useCallback(() => {
    if (inputValue.trim()) {
      const cmd = inputValue;
      processCommand(cmd);
      setCommandHistory(prev => [cmd, ...prev]);
      setHistoryIndex(-1);
      setInputValue('');
    }
  }, [inputValue, processCommand]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  }, [handleSubmit, commandHistory, historyIndex]);

  // Render a single terminal line
  const renderLine = useCallback((line: TerminalLine, index: number) => {
    if (line.type === 'divider') {
      return <div key={index} className="terminal-divider" />;
    }

    const classMap: Record<string, string> = {
      system: 'terminal-line-system',
      ok: 'terminal-line-ok',
      command: 'terminal-line-command',
      output: 'terminal-line-output',
      error: 'terminal-line-error',
      header: 'terminal-line-header',
      instruction: 'terminal-line-instruction',
    };

    return (
      <div key={index} className={`terminal-line ${classMap[line.type] || ''}`}>
        {line.text || '\u00A0'}
      </div>
    );
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="terminal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Terminal window */}
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* ── Title Bar ── */}
            <div className="terminal-titlebar">
              {/* Traffic Lights */}
              <div className="terminal-traffic-lights">
                <button
                  className="terminal-dot terminal-dot-red"
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  aria-label="Close terminal"
                  type="button"
                />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>

              {/* Title */}
              <div className="terminal-title">
                <span className="terminal-title-icon">&gt;_</span>
                <span>shariar@portfolio:~</span>
              </div>

              {/* Close button */}
              <button
                className="terminal-close-btn"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                aria-label="Close terminal"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* ── Drag Handle ── */}
            <div className="terminal-drag-handle">
              <span>···</span>
            </div>

            {/* ── Content Area ── */}
            <div className="terminal-content" ref={contentRef}>
              {lines.map((line, i) => renderLine(line, i))}

              {/* ── Input Line ── */}
              {!isBooting && (
                <div className="terminal-input-line">
                  <span className="terminal-prompt">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    className="terminal-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a command..."
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
