import { EXTERNAL_LINKS, NAVIGATION_ROUTES } from "@/utils/constants";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedContainer, cardHoverTransition, Reveal } from "./animations";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Real capabilities backed by the codebase, no invented metrics.
  const highlights = [
    { value: "WebSockets", label: "Real-time delivery" },
    { value: "Redis Pub/Sub", label: "Horizontally scalable" },
    { value: "PostgreSQL", label: "Persisted with Prisma" },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Gradient Wave Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Wave 1 - Innermost */}
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 204, 113, 0.10) 0%, rgba(46, 204, 113, 0.05) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.3, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 2 */}
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 204, 113, 0.12) 0%, rgba(46, 204, 113, 0.04) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Wave 3 */}
        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 204, 113, 0.08) 0%, rgba(46, 204, 113, 0.03) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Wave 4 - Outermost */}
        <motion.div
          className="absolute h-[900px] w-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 204, 113, 0.06) 0%, rgba(46, 204, 113, 0.02) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Rotating gradient rings */}
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full border-2 border-transparent"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(46, 204, 113, 0.1), rgba(46, 204, 113, 0.05), rgba(46, 204, 113, 0.1))",
            maskImage: "radial-gradient(circle, transparent 45%, black 50%, transparent 55%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 45%, black 50%, transparent 55%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute h-[800px] w-[800px] rounded-full border-2 border-transparent"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(46, 204, 113, 0.08), rgba(46, 204, 113, 0.03), rgba(46, 204, 113, 0.08))",
            maskImage: "radial-gradient(circle, transparent 48%, black 52%, transparent 56%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 48%, black 52%, transparent 56%)",
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="bg-mint-200/30 absolute left-10 top-20 h-72 w-72 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-mint-300/20 absolute bottom-20 right-10 h-96 w-96 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <AnimatedContainer>
              <h1 className="font-urbanist text-midnight-900 relative mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                {/* Text glow effect */}
                <div className="font-urbanist from-mint-400 to-mint-600 absolute inset-0 bg-gradient-to-r bg-clip-text text-5xl font-bold leading-tight text-transparent opacity-20 blur-sm md:text-7xl lg:text-8xl">
                  Connect <span className="font-instrument italic">Instantly</span>
                  <br />
                  Anywhere
                </div>
                Connect{" "}
                <motion.span
                  className="font-instrument from-mint-500 to-mint-600 relative bg-gradient-to-r bg-clip-text italic text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Additional glow for the "Instantly" text */}
                  <motion.span
                    className="font-instrument text-mint-400 absolute inset-0 italic opacity-30 blur-md"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Instantly
                  </motion.span>
                  Instantly
                </motion.span>
                <br />
                Anywhere
              </h1>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <p className="font-inter text-midnight-600 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
                Voxella is an open-source, real-time chat app: direct messages and group chats over WebSockets, fanned
                out with Redis Pub/Sub so the socket layer scales horizontally. Built as a learning project to explore a
                production-style architecture end to end.
              </p>
            </AnimatedContainer>
          </div>

          <AnimatedContainer delay={0.3} className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={EXTERNAL_LINKS.GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-mint-500 hover:bg-mint-600 font-inter group relative flex items-center space-x-2 overflow-hidden rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
            >
              {/* Button glow effect */}
              <div className="from-mint-400 to-mint-600 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-200 ease-out group-hover:opacity-20" />
              <Github className="relative z-10 h-5 w-5" />
              <span className="relative z-10">View Source on GitHub</span>
            </motion.a>

            <motion.button
              onClick={() => navigate(NAVIGATION_ROUTES.LOGIN)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-midnight-900 font-inter hover:border-mint-300 group flex items-center space-x-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold transition-all duration-200 ease-out hover:bg-gray-50"
            >
              <span>Sign in</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </AnimatedContainer>

          {/* Note: no hosted demo; sign-in requires running the stack locally (see the README). */}

          {/* Architecture highlights, verifiable in the codebase, not marketing metrics */}
          <Reveal
            delay={0.5}
            className="mx-auto max-w-4xl rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              {highlights.map((item) => (
                <motion.div
                  key={item.value}
                  whileHover={{ scale: 1.05 }}
                  transition={cardHoverTransition}
                  className="group"
                >
                  <h3 className="font-urbanist text-mint-600 group-hover:text-mint-700 mb-2 text-2xl font-bold transition-colors md:text-3xl">
                    {item.value}
                  </h3>
                  <p className="font-inter text-midnight-600 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
