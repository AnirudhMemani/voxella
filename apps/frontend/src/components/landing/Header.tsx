import { EXTERNAL_LINKS, NAVIGATION_ROUTES } from "@/utils/constants";
import { motion } from "framer-motion";
import { Github, Menu, X, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardHoverTransition } from "./animations";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
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
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1000px]">
        <div
          className={`rounded-2xl border-[1px] border-[gray]/20 transition-all duration-200 ease-out ${
            isScrolled
              ? "border-gray-200/50 bg-white/90 shadow-md backdrop-blur-xl"
              : "border-white/30 bg-white/70 backdrop-blur-md"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={cardHoverTransition}
            >
              <motion.div
                className="from-mint-500 to-mint-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br"
                whileHover={{ scale: 1.1 }}
                transition={cardHoverTransition}
              >
                <Zap className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-urbanist text-midnight-900 text-xl font-bold">Voxella</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-midnight-700 hover:text-mint-600 relative font-medium transition-colors duration-200 ease-out"
                  whileHover={{ scale: 1.05 }}
                  transition={cardHoverTransition}
                >
                  {item.name}
                  <motion.div
                    className="bg-mint-500 absolute bottom-0 left-0 h-0.5 w-0"
                    whileHover={{ width: "100%" }}
                    transition={cardHoverTransition}
                  />
                </motion.button>
              ))}
              <motion.a
                href={EXTERNAL_LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-midnight-700 hover:text-mint-600 transition-colors duration-200 ease-out"
                whileHover={{ scale: 1.1 }}
                transition={cardHoverTransition}
                aria-label="View source on GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.button
                onClick={() => navigate(NAVIGATION_ROUTES.LOGIN)}
                className="bg-mint-500 hover:bg-mint-600 font-inter rounded-xl px-6 py-2 font-medium text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={cardHoverTransition}
              >
                Sign in
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative rounded-lg p-2 transition-colors duration-200 ease-out hover:bg-gray-100 md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={cardHoverTransition}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="space-y-2 px-6 pb-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-midnight-700 hover:text-mint-600 hover:bg-mint-50 block w-full rounded-lg px-4 py-3 text-left font-medium transition-colors duration-200 ease-out"
                  whileHover={{ x: 5 }}
                  transition={cardHoverTransition}
                >
                  {item.name}
                </motion.button>
              ))}
              <a
                href={EXTERNAL_LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-midnight-700 hover:text-mint-600 hover:bg-mint-50 flex w-full items-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors duration-200 ease-out"
              >
                <Github className="h-5 w-5" />
                View Source
              </a>
              <motion.button
                onClick={() => navigate(NAVIGATION_ROUTES.LOGIN)}
                className="bg-mint-500 hover:bg-mint-600 font-inter mt-2 w-full rounded-xl px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={cardHoverTransition}
              >
                Sign in
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
