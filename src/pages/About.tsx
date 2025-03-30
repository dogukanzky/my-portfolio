import { motion } from "framer-motion";
import { FiCloud, FiCode, FiDatabase } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiR,
  SiGit,
  SiSpring,
  SiPostgresql,
  SiAmazonwebservices,
  SiCisco,
  SiPython,
  SiReactquery,
} from "react-icons/si";
import PageTransition from "@/components/ui/PageTransition";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <PageTransition>
      <div className="py-20 md:py-28 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/25 via-white/70 dark:via-gray-900/70 to-primary/25 dark:from-secondary/30 dark:to-primary/30 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent dark:from-primary/25 -z-10"></div>

        <div className="container">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate full-stack developer with 2 years of
                  professional experience building modern web applications.
                  While I specialize in crafting responsive, user-friendly
                  frontend interfaces, I also have hands-on experience in
                  backend development with Java Spring Boot.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  My journey began with HTML, CSS, and JavaScript, and evolved
                  to include modern tools and frameworks like React, React
                  Native, TypeScript, and Tailwind CSS. Over time, I expanded my
                  skill set to backend technologies, contributing to API
                  development and backend logic using Java Spring Boot. I’m
                  dedicated to writing clean, maintainable code across both the
                  frontend and backend, and staying up-to-date with the latest
                  technologies and best practices.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  When I'm not coding, you can find me traveling, playing basketball,
                  or diving into online courses to continuously
                  grow as a developer.
                </p>
              </div>
              <div className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Borned in Hatay, living in Ankara</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>2+ years of frontend development experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      4th year student at Computer Technology and Information
                      Systems at Bilkent University
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fluent in English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Remote and on-site work experience with distributed teams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard
                icon={<FiCode size={36} />}
                title="Frontend Development"
                description="Building responsive and performant user interfaces using React, React Native, TypeScript, and Tailwind CSS."
              />
              <SkillCard
                icon={<FiDatabase size={36} />}
                title="Backend Development"
                description="Creating scalable APIs with Java Spring Boot, integrating PostgreSQL databases, and ensuring clean backend logic."
              />
              <SkillCard
                icon={<FiCloud size={36} />}
                title="Deployment & Cloud"
                description="Deploying and managing applications using AWS services and maintaining production-ready environments."
              />
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Tech Stack</h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <TechItem icon={<SiReact size={40} />} name="React" />
              <TechItem icon={<SiReact size={40} />} name="React Native" />
              <TechItem icon={<SiReactquery size={40} />} name="React Query" />
              <TechItem icon={<SiTypescript size={40} />} name="TypeScript" />
              <TechItem icon={<SiJavascript size={40} />} name="JavaScript" />
              <TechItem icon={<SiSpring size={40} />} name="Spring Boot" />
              <TechItem icon={<SiPostgresql size={40} />} name="PostgreSQL" />
              <TechItem icon={<SiAmazonwebservices size={40} />} name="AWS" />
              <TechItem icon={<SiPython size={40} />} name="Python" />
              <TechItem icon={<SiR size={40} />} name="R" />
              <TechItem
                icon={<SiTailwindcss size={40} />}
                name="Tailwind CSS"
              />
              <TechItem icon={<SiCisco size={40} />} name="Cisco" />
              <TechItem icon={<SiCss3 size={40} />} name="CSS3" />
              <TechItem icon={<SiHtml5 size={40} />} name="HTML5" />
              <TechItem icon={<SiGit size={40} />} name="Git" />
              <TechItem icon={<SiVite size={40} />} name="Vite" />
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

const SkillCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const TechItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      variants={itemVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="text-gray-700 dark:text-gray-300 mb-3">{icon}</div>
      <span className="font-medium">{name}</span>
    </motion.div>
  );
};

export default About;
