import { EXTERNAL_LINKS, NAVIGATION_ROUTES } from "@/utils/constants";
import { motion } from "framer-motion";
import { ArrowRight, Bug, Github, Terminal } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cardHover, cardHoverTransition, Reveal } from "./animations";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const links = [
    {
      icon: Github,
      title: "View the source",
      desc: "Browse the full monorepo: frontend, REST API, WebSocket server, and Prisma schema.",
      cta: "Open GitHub",
      href: EXTERNAL_LINKS.GITHUB_REPO,
    },
    {
      icon: Bug,
      title: "Report an issue",
      desc: "Spotted a bug or have an idea? Open an issue; feedback is welcome.",
      cta: "Open an issue",
      href: EXTERNAL_LINKS.GITHUB_ISSUES,
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-urbanist text-midnight-900 mb-6 text-4xl font-bold md:text-5xl">
            Explore the{" "}
            <span className="from-mint-500 to-mint-600 bg-gradient-to-r bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="font-inter text-midnight-600 mx-auto max-w-3xl text-xl">
            Voxella is open source. Read the code, run it locally, or open an issue. There&apos;s no sign-up wall and
            nothing to buy.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 ease-out hover:shadow-xl"
              >
                <div className="bg-mint-100 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                  <LinkIcon className="text-mint-600 h-6 w-6" />
                </div>
                <h3 className="font-urbanist text-midnight-900 mb-2 text-xl font-bold">{link.title}</h3>
                <p className="font-inter text-midnight-600 mb-6 flex-1 leading-relaxed">{link.desc}</p>
                <span className="font-inter text-mint-600 group-hover:text-mint-700 inline-flex items-center gap-2 font-semibold">
                  {link.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Run it locally */}
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-5xl">
          <div className="from-mint-50 to-mint-100 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r p-8 md:flex-row md:items-center">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/70">
                <Terminal className="text-mint-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-urbanist text-midnight-900 mb-1 text-xl font-bold">Try it locally</h3>
                <p className="font-inter text-midnight-600 leading-relaxed">
                  There&apos;s no hosted demo. Clone the repo and follow the README to run the stack, then sign in.
                </p>
              </div>
            </div>
            <motion.button
              onClick={() => navigate(NAVIGATION_ROUTES.LOGIN)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={cardHoverTransition}
              className="bg-mint-500 hover:bg-mint-600 font-inter flex flex-shrink-0 items-center gap-2 rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
            >
              Sign in
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
