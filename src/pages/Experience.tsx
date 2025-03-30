import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import PageTransition from "@/components/ui/PageTransition";

// Sample experience data - replace with your own
const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Madlen",
    location: "Istanbul, Türkiye • Hybrid",
    period: "February 2025 - Present",
    description:
      "Driving full stack development for both web and mobile platforms, focusing on delivering seamless user experiences and scalable features for teachers and students.",
    achievements: [
      "Engineered a suite of productivity tools for the teacher web app, enabling efficient lecture planning and content creation.",
      "Collaborated on the design, development, and optimization of the Main Backend API, enhancing performance and maintainability.",
      "Participated in the development of the student-facing mobile app using React Native, ensuring cross-platform compatibility and intuitive UX.",
    ],
    technologies: [
      "React",
      "React Native",
      "Java",
      "PostgreSQL",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "React Query",
      "REST APIs",
      "AWS",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Madlen",
    location: "Istanbul, Türkiye • Hybrid",
    period: "January 2024 - February 2025",
    description:
      "Designed and developed responsive web and mobile applications for educators, students, and developers, with a focus on intuitive UI/UX and robust front-end architecture.",
    achievements: [
      "Integrated RESTful APIs and implemented scalable state management for dynamic data handling across platforms.",
      "Built and maintained multiple responsive, client-facing web applications, significantly improving user engagement.",
      "Developed the student mobile app using React Native, delivering consistent performance across iOS and Android.",
      "Crafted modern, accessible UI/UX designs in Figma for both web and mobile apps, aligned with user-centered design principles.",
    ],
    technologies: [
      "React",
      "React Native",
      "Figma",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "React Query",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "CEIBA TELE ICU",
    location: "Istanbul, Türkiye • Hybrid",
    period: "August 2023 - December 2023",
    description:
      "Transitioned from intern to full-time developer, continuing work on the hospital employee dashboard to improve functionality, stability, and performance.",
    achievements: [
      "Delivered new features and full pages, handling API integrations and dynamic data rendering.",
      "Resolved high-priority bugs and improved load times, contributing to a more reliable user experience.",
    ],
    technologies: ["React", "JavaScript", "REST APIs", "React Query"],
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "CEIBA TELE ICU",
    location: "Istanbul, Türkiye • On-site",
    period: "July 2023 - August 2023",
    description:
      "Contributed to the development of a hospital employee dashboard during a fast-paced internship, gaining hands-on experience with React and API integration in a real-world healthcare setting.",
    achievements: [
      "Developed new UI components and pages for the dashboard used across multiple international hospitals.",
      "Implemented RESTful API integrations and resolved minor bugs to support a smooth user experience.",
    ],
    technologies: ["React", "JavaScript", "REST APIs", "React Query"],
  },
];

const Experience = () => {
  return (
    <PageTransition>
      <div className="py-20 md:py-28 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/15 to-primary/25 dark:from-primary/30 dark:via-secondary/20 dark:to-primary/30 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent dark:from-secondary/20 -z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[100px] opacity-30 -z-10"></div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Work Experience
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
              My professional journey in software development, showcasing the
              companies I've worked with and the impact I've made through my
              contributions.
            </p>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {experienceData.map((job, index) => (
                  <TimelineItem key={job.id} job={job} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const TimelineItem = ({ job, index }: { job: Job; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 md:pl-12`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 relative">
          {/* Decorative arrow */}
          <div
            className={`hidden md:block absolute top-6 ${
              isEven
                ? "left-full border-l-white dark:border-l-gray-800"
                : "right-full border-r-white dark:border-r-gray-800"
            } transform ${
              isEven
                ? "translate-x-0 -translate-y-1/2 border-t-transparent border-b-transparent border-l-8"
                : "translate-x-0 -translate-y-1/2 border-t-transparent border-b-transparent border-r-8"
            } border-8`}
          ></div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {job.title}
          </h3>
          <h4 className="text-primary font-medium mt-1">{job.company}</h4>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-3 gap-4">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{job.period}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-1" />
              <span>{job.location}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {job.description}
          </p>

          {/* Achievements */}
          <div className="mt-4">
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Key Achievements:
            </h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for the other side */}
      <div className="w-full md:w-1/2"></div>
    </motion.div>
  );
};

export default Experience;
