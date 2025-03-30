import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import PageTransition from "@/components/ui/PageTransition";
import { useState, useEffect } from "react";
import sketchedImage from "@assets/sketched.png";
import eye from "@assets/eye.png";

// Array of roles/skills to cycle through
const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Effect to cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);

      // Wait for exit animation to complete before changing text
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(true);
      }, 500); // Half a second for exit animation
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const findAngle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      //instead of sketched-image, use body
      const body = document.getElementById("home");
      const bodyRect = body?.getBoundingClientRect();

      const bodyCenterX = (bodyRect?.left || 0) + (bodyRect?.width || 0) / 2;
      const bodyCenterY = (bodyRect?.top || 0) + (bodyRect?.height || 0) / 2;

      const angle = findAngle(mouseX, mouseY, bodyCenterX, bodyCenterY);

      const eyes = document.querySelectorAll(".eye");
      console.log(eyes);
      if (eyes.length > 0) {
        eyes.forEach((eye) => {
          (eye as HTMLElement).style.transform = `rotate(${90 + angle}deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <PageTransition>
      <section
        className="min-h-screen flex items-center relative py-24"
        id="home"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-white/80 dark:via-gray-900/80 to-secondary/30 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent dark:from-secondary/25 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-gray-900 dark:text-white">
                  Hello, I'm{" "}
                </span>
                <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Doğukan Özkaya</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 h-10">
                <AnimatePresence mode="wait">
                  {isAnimating && (
                    <motion.span
                      key={roles[currentRoleIndex]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      <span>{roles[currentRoleIndex]}</span>
                      <motion.span
                        className="inline-block ml-1 bg-primary h-6 w-[3px] align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ 
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 0.2,
                        }}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-10 max-w-2xl">
                I craft responsive, engaging web experiences using modern
                frontend and backend technologies. Passionate about clean code,
                seamless user experiences, and building innovative, scalable
                solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit"
                >
                  <Link
                    to="/experience"
                    className="btn btn-primary px-6 sm:px-8 py-3 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                  >
                    <span>View My Work</span>
                    <FiArrowRight />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit"
                >
                  <a
                    href="/resume.pdf"
                    className="btn bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 sm:px-8 py-3 flex items-center justify-center sm:justify-start gap-2 border border-gray-300 dark:border-gray-700 w-full sm:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Download CV</span>
                    <FiDownload />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image or Animation */}
            <motion.div
              className="order-2 mx-auto max-w-md md:max-w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={sketchedImage}
                    id="sketched-image"
                    className="h-full w-full object-contain p-4"
                    alt="Dogukan Ozkaya"
                  />
                  <div
                    className="absolute eye hidden lg:block"
                    style={{
                      top: "150px",
                      right: "160px",
                    }}
                  >
                    <img
                      src={eye}
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      alt="Eye"
                    />
                  </div>
                  <div
                    className="absolute eye hidden lg:block"
                    style={{
                      top: "152px",
                      right: "209px",
                    }}
                  >
                    <img
                      src={eye}
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      alt="Eye"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-primary/30 rounded-lg"></div>
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 bg-secondary/30 rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
