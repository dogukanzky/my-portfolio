import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
// import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

// Layout Components
import Navbar from "@/components/layout/Navbar";
// Loading Components
import LoadingScreen from "@/components/ui/LoadingScreen";
import LoadingProvider, { useLoading } from "@/context/LoadingContext";

// App Wrapper with Loading Provider
const AppWrapper = () => {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LoadingProvider>
  );
};

// Routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Content
const AppContent = () => {
  const { isLoading, completeLoading } = useLoading();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.dataset.theme = "dark";
    } else {
      setDarkMode(false);
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.dataset.theme = "light";
      localStorage.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={completeLoading}
      />
      <div
        className={`min-h-screen flex flex-col ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
      </div>
    </>
  );
};

export default AppWrapper;
