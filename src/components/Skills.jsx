import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import LogoLoop from '../utils/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiSupabase,SiShadcnui, SiTailwindcss, 
  SiPython, SiMongodb, SiSqlite, SiPythonanywhere, SiPostgresql, SiDjango, 
  SiFastapi, SiFlask, SiStreamlit, SiGraphql, SiMysql,
SiGit, SiGithub, SiGitkraken, SiDocker,SiLinux, SiPytorch, 
SiJupyter, SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiGooglecolab, 
SiMediapipe, SiMlflow} from 'react-icons/si';
import { IoLogoJavascript, IoLogoHtml5,IoLogoCss3 } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrUbuntu } from "react-icons/gr";
import { title } from 'framer-motion/client';
const Skills = () => {
  
const techLogos = [
  { node: <IoLogoJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <IoLogoHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  {node: <IoLogoCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  //{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  //{ node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
];


const backend=[
  {node: <SiPython />, title: "Python", href: "https://www.python.org"},
  {node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com"},
  {node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com"},
  {node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com"},
  {node: <SiStreamlit />, title: "Streamlit", href: "https://streamlit.io"},
  {node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org"},
];

const db=[
    {node:<SiMysql />, title: "MySQL", href: "https://www.mysql.com"},
    {node:<SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org"},
    {node:<SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com"},
    {node:<SiSqlite />, title: "SQLite", href: "https://www.sqlite.org"},
    {node:<SiSupabase />, title: "Supabase", href: "https://supabase.com"},
];


const tools=[
    {node: <SiPythonanywhere />, title: "PythonAnywhere", href: "https://www.pythonanywhere.com"},
    {node: <SiGit />, title: "Git", href: "https://git-scm.com"},
    {node: <SiGithub />, title: "GitHub", href: "https://github.com"},
    {node: <SiGitkraken />, title: "GitKraken", href: "https://www.gitkraken.com"},
    {node: <SiDocker />, title: "Docker", href: "https://www.docker.com"},
    {node: <GrUbuntu />, title: "Ubuntu", href: "https://ubuntu.com"},
    {node: <VscVscodeInsiders />, title: "VS Code Insiders", href: "https://code.visualstudio.com/insiders/"}
];

const aiml=[
      {node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org"},
      {node: <SiJupyter />, title: "Jupyter", href: "https://jupyter.org"},
      {node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org"},
      {node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org"},
      {node: <SiNumpy />, title: "NumPy", href: "https://numpy.org"},
      {node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org"},
      {node: <SiGooglecolab />, title: "Google Colab", href: "https://colab.research.google.com"},
      {node: <SiMediapipe />, title: "MediaPipe", href: "https://mediapipe.dev"},
      {node: <SiMlflow />, title: "MLflow", href: "https://mlflow.org"},
];
  return (
    <section id="skills" className="section-padding  bg-slate-950" >
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise spans across various technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
           Backend Technologies
          </h2>
        <div className="mb-8 -mx-4 sm:-mx-8 lg:-mx-64">
           <LogoLoop
            logos={backend}
            speed={100}
          direction="left"
          logoHeight={95}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#020617"
          ariaLabel="Technology partners"
          />
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
           Frontend Technologies
          </h2>
        <div className="mb-8 -mx-4 sm:-mx-8 lg:-mx-64">
           <LogoLoop
            logos={techLogos}
            speed={100}
          direction="right"
          logoHeight={95}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#020617"
          ariaLabel="Technology partners"
          />
        </div>
        </motion.div>

        <motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          AI/ML Frameworks
          </h2>
        <div className="mb-8 -mx-4 sm:-mx-8 lg:-mx-64">
           <LogoLoop
            logos={aiml}
            speed={100}
          direction="right"
          logoHeight={95}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#020617"
          ariaLabel="Technology partners"
          />
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
           Database
          </h2>
        <div className="mb-8 -mx-4 sm:-mx-8 lg:-mx-64">
           <LogoLoop
            logos={db}
            speed={100}
          direction="left"
          logoHeight={95}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#020617"
          ariaLabel="Technology partners"
          />
        </div>
        </motion.div>

        
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
           Other Tools
          </h2>
        <div className="mb-8 -mx-4 sm:-mx-8 lg:-mx-64">
           <LogoLoop
            logos={tools}
            speed={100}
          direction="left"
          logoHeight={95}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#020617"
          ariaLabel="Technology partners"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 