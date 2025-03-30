import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import PageTransition from "@/components/ui/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // In a real application, you would send the form data to a backend service
      // For example, using Formspree or EmailJS

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful submission
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "There was a problem sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section
        className="min-h-screen flex items-center relative py-12"
        id="home"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/25 via-secondary/15 to-primary/25 dark:from-primary/30 dark:via-secondary/20 dark:to-primary/30 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent dark:from-secondary/25 -z-10"></div>

        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main content grid - heading and contact info side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left side - heading and text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Get In Touch
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-0">
                  I'm always looking for new opportunities to collaborate and
                  contribute to projects. Whether you have a question, a
                  suggestion, or just want to say hi, I'm here for it.
                </p>
              </div>

              {/* Right side - Contact Info */}
              <div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <ContactInfoItem
                      icon={<FiMail />}
                      title="Email"
                      content="dogukanzky@gmail.com"
                      href="mailto:dogukanzky@gmail.com"
                    />

                    <ContactInfoItem
                      icon={<FiMapPin />}
                      title="Location"
                      content="Ankara, Türkiye"
                    />
                  </div>

                  {/* Social Links */}
                  <div className="mt-8">
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-4">
                      Connect with me
                    </h4>
                    <div className="flex space-x-4">
                      <SocialLink
                        href="https://github.com/dogukanzky"
                        icon={<FiGithub />}
                        label="GitHub"
                      />
                      <SocialLink
                        href="https://www.linkedin.com/in/dogukan-ozkaya/"
                        icon={<FiLinkedin />}
                        label="LinkedIn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Hidden and outside the main grid */}
            <div className="hidden mt-10">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>

                {submitSuccess ? (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-md mb-6">
                    <p>
                      Thank you for your message! I'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-36"
                      ></textarea>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-md">
                        <p>{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary px-6 py-3 flex items-center gap-2 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

const ContactInfoItem = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => {
  return (
    <div className="flex">
      <div className="text-primary mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        {href ? (
          <a
            href={href}
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{content}</p>
        )}
      </div>
    </div>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      {icon}
    </a>
  );
};

export default Contact;
