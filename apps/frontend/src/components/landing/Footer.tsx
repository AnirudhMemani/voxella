import { EXTERNAL_LINKS } from "@/utils/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Zap } from "lucide-react";
import React from "react";
import { cardHoverTransition, Reveal } from "./animations";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-midnight-900 relative overflow-hidden text-white">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="bg-mint-500/5 absolute right-0 top-0 h-96 w-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Brand & CTA */}
            <Reveal>
              {/* Logo */}
              <div className="mb-6 flex items-center space-x-3">
                <motion.div
                  className="from-mint-500 to-mint-600 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"
                  whileHover={{ scale: 1.1 }}
                  transition={cardHoverTransition}
                >
                  <Zap className="h-7 w-7 text-white" />
                </motion.div>
                <span className="font-urbanist text-3xl font-bold">Voxella</span>
              </div>

              <h3 className="font-urbanist mb-4 text-2xl font-bold leading-tight md:text-3xl">
                An open-source,{" "}
                <span className="from-mint-400 to-mint-500 bg-gradient-to-r bg-clip-text text-transparent">
                  real-time chat app
                </span>
              </h3>

              <p className="font-inter mb-8 max-w-md text-lg text-gray-300">
                Built as a side project to explore WebSockets, Redis Pub/Sub, and a scalable messaging architecture.
              </p>

              <motion.a
                href={EXTERNAL_LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={cardHoverTransition}
                className="bg-mint-500 hover:bg-mint-600 font-inter group flex w-fit items-center space-x-2 rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
              >
                <Github className="h-5 w-5" />
                <span>View Source</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </motion.a>
            </Reveal>

            {/* Right Side - Quick Links & Contact */}
            <Reveal delay={0.1} className="lg:text-right">
              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="font-urbanist mb-6 text-xl font-semibold">Quick Links</h4>
                <div className="flex flex-wrap gap-6 lg:justify-end">
                  {quickLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ scale: 1.05, x: -5 }}
                      transition={cardHoverTransition}
                      className="font-inter hover:text-mint-400 text-lg text-gray-300 transition-colors duration-200 ease-out"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="space-y-3 lg:flex lg:flex-col lg:items-end">
                <motion.a
                  href={EXTERNAL_LINKS.GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={cardHoverTransition}
                  className="font-inter hover:text-mint-400 inline-flex items-center gap-2 text-xl text-white transition-colors duration-200 ease-out"
                >
                  <Github className="h-5 w-5" />
                  AnirudhMemani/voxella
                </motion.a>
                <motion.a
                  href={EXTERNAL_LINKS.GITHUB_ISSUES}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={cardHoverTransition}
                  className="font-inter hover:text-mint-400 block text-lg text-gray-300 transition-colors duration-200 ease-out"
                >
                  Report an issue
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.2} className="border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="font-inter text-gray-400">© {currentYear} Voxella · An open-source side project.</p>

            <div className="flex items-center space-x-8">
              <motion.a
                href={EXTERNAL_LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={cardHoverTransition}
                className="font-inter hover:text-mint-400 inline-flex items-center gap-2 text-gray-400 transition-colors duration-200 ease-out"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
