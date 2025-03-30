import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen = ({
  isLoading,
  onLoadingComplete,
}: LoadingScreenProps) => {
  // Auto-dismiss after some time (fallback)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 3000); // Fallback timeout
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Background with gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-white/90 dark:via-gray-900/90 to-secondary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary/20 dark:bg-primary/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-secondary/20 dark:bg-secondary/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              className="mb-8 text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                Doğukan Özkaya
              </motion.span>
            </motion.div>

            {/* Animated shapes */}
            <div className="relative">
              <svg
                width="120"
                height="30"
                viewBox="0 0 120 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="15"
                  cy="15"
                  r="8"
                  fill="currentColor"
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0,
                  }}
                />
                <motion.circle
                  cx="60"
                  cy="15"
                  r="8"
                  fill="currentColor"
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0.3,
                  }}
                />
                <motion.circle
                  cx="105"
                  cy="15"
                  r="8"
                  fill="currentColor"
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0.6,
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
