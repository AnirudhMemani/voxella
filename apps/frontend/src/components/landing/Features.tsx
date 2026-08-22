import { NAVIGATION_ROUTES } from "@/utils/constants";
import { motion } from "framer-motion";
import { CheckCheck, Cloud, Code, Database, MessageCircle, Rocket, Shield, Smartphone, Users, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cardHover, cardHoverTransition, Reveal } from "./animations";

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description:
        "Direct messages and group chats delivered instantly over a WebSocket connection, with read receipts and an emoji picker built into the composer.",
      color: "from-mint-400 to-mint-600",
      bgColor: "from-mint-50 to-mint-100",
      stats: "WebSocket-powered",
      details: ["Direct messages", "Group chats", "Read receipts", "Emoji picker"],
    },
    {
      icon: Rocket,
      title: "Scalable by Design",
      description:
        "Each chat room maps to a Redis Pub/Sub channel, so messages fan out across every WebSocket instance. The socket layer stays stateless and scales out horizontally.",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      stats: "Redis Pub/Sub",
      details: [],
    },
    {
      icon: Users,
      title: "Group Chats & Roles",
      description:
        "Create groups, rename them, add or remove members, and manage a super-admin plus admins, with super-admin transfer and per-member permissions.",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      stats: "Admins & Super-admin",
      details: [],
    },
    {
      icon: Shield,
      title: "Authenticated Sessions",
      description:
        "Register and log in with JWT-based auth and bcrypt-hashed passwords. The same token authenticates both the REST API and the WebSocket connection.",
      color: "from-red-400 to-red-600",
      bgColor: "from-red-50 to-red-100",
      stats: "JWT + bcrypt",
      details: [],
    },
  ];

  const navigate = useNavigate();

  const techFeatures = [
    { icon: Database, title: "PostgreSQL + Prisma", desc: "Messages & chats persisted", color: "text-blue-600" },
    { icon: Cloud, title: "Image Uploads", desc: "Profile & group pictures via Cloudinary", color: "text-green-600" },
    { icon: CheckCheck, title: "Read Receipts", desc: "Track who has read a message", color: "text-mint-600" },
    { icon: Code, title: "Type-safe Protocol", desc: "Shared WebSocket message contracts", color: "text-purple-600" },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="bg-mint-200/20 absolute left-20 top-20 h-72 w-72 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-mint-300/15 absolute bottom-20 right-20 h-96 w-96 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.7, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-urbanist text-midnight-900 mb-6 text-4xl font-bold md:text-5xl">
            Everything You Need to{" "}
            <span className="from-mint-500 to-mint-600 bg-gradient-to-r bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
          <p className="font-inter text-midnight-600 mx-auto max-w-3xl text-xl">
            A focused set of features, each one actually implemented in the codebase: real-time messaging, group
            management, and the infrastructure that keeps it all in sync.
          </p>
        </Reveal>

        {/* Balanced Bento Grid Layout */}
        <Reveal className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Large AI Feature Card - Spans 2 columns */}
          <motion.div
            whileHover={cardHover}
            transition={cardHoverTransition}
            className="from-mint-50 to-mint-100 border-mint-200/50 relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 shadow-lg lg:col-span-2"
            style={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="relative z-10">
              {(() => {
                const MainFeatureIcon = mainFeatures[0].icon;
                return (
                  <motion.div
                    className={`h-16 w-16 bg-gradient-to-r ${mainFeatures[0].color} mb-6 flex items-center justify-center rounded-2xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={cardHoverTransition}
                  >
                    <MainFeatureIcon className="h-8 w-8 text-white" />
                  </motion.div>
                );
              })()}

              <h3 className="font-urbanist text-midnight-900 mb-4 text-2xl font-bold">{mainFeatures[0].title}</h3>

              <p className="font-inter text-midnight-600 mb-6 leading-relaxed">{mainFeatures[0].description}</p>

              <div className="mb-6 flex items-center justify-between">
                <div className="bg-mint-200/50 text-mint-700 font-urbanist rounded-full px-4 py-2 text-lg font-bold">
                  {mainFeatures[0].stats}
                </div>
                <Zap className="text-mint-600 h-6 w-6" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {mainFeatures[0].details.map((detail) => (
                  <div key={detail} className="text-midnight-600 flex items-center text-sm">
                    <div className="bg-mint-500 mr-2 h-2 w-2 rounded-full" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Rapid MVP Card */}
          <motion.div
            whileHover={cardHover}
            transition={cardHoverTransition}
            className="relative overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-lg"
            style={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="relative z-10">
              {(() => {
                const FeatureIcon = mainFeatures[1].icon;
                return (
                  <motion.div
                    className={`h-12 w-12 bg-gradient-to-r ${mainFeatures[1].color} mb-4 flex items-center justify-center rounded-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={cardHoverTransition}
                  >
                    <FeatureIcon className="h-6 w-6 text-white" />
                  </motion.div>
                );
              })()}

              <h3 className="font-urbanist text-midnight-900 mb-3 text-lg font-semibold">{mainFeatures[1].title}</h3>

              <p className="font-inter text-midnight-600 mb-4 text-sm leading-relaxed">{mainFeatures[1].description}</p>

              <span
                className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium ${mainFeatures[1].bgColor} text-midnight-700`}
              >
                {mainFeatures[1].stats}
              </span>
            </div>
          </motion.div>

          {/* User-Centric Design Card */}
          <motion.div
            whileHover={cardHover}
            transition={cardHoverTransition}
            className="relative overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-lg"
            style={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="relative z-10">
              {(() => {
                const FeatureIcon = mainFeatures[2].icon;
                return (
                  <motion.div
                    className={`h-12 w-12 bg-gradient-to-r ${mainFeatures[2].color} mb-4 flex items-center justify-center rounded-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={cardHoverTransition}
                  >
                    <FeatureIcon className="h-6 w-6 text-white" />
                  </motion.div>
                );
              })()}

              <h3 className="font-urbanist text-midnight-900 mb-3 text-lg font-semibold">{mainFeatures[2].title}</h3>

              <p className="font-inter text-midnight-600 mb-4 text-sm leading-relaxed">{mainFeatures[2].description}</p>

              <span
                className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium ${mainFeatures[2].bgColor} text-midnight-700`}
              >
                {mainFeatures[2].stats}
              </span>
            </div>
          </motion.div>

          {/* Security Feature Card */}
          <motion.div
            whileHover={cardHover}
            transition={cardHoverTransition}
            className="relative overflow-hidden rounded-2xl border border-red-200/50 bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-lg"
            style={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="relative z-10">
              {(() => {
                const FeatureIcon = mainFeatures[3].icon;
                return (
                  <motion.div
                    className={`h-12 w-12 bg-gradient-to-r ${mainFeatures[3].color} mb-4 flex items-center justify-center rounded-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={cardHoverTransition}
                  >
                    <FeatureIcon className="h-6 w-6 text-white" />
                  </motion.div>
                );
              })()}

              <h3 className="font-urbanist text-midnight-900 mb-3 text-lg font-semibold">{mainFeatures[3].title}</h3>

              <p className="font-inter text-midnight-600 mb-4 text-sm leading-relaxed">{mainFeatures[3].description}</p>

              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium ${mainFeatures[3].bgColor} text-midnight-700`}
                >
                  {mainFeatures[3].stats}
                </span>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-red-600" />
                  <span className="font-inter text-midnight-600 text-xs">Server-verified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Card - Spans full width */}
          <motion.div
            whileHover={cardHover}
            transition={cardHoverTransition}
            className="relative overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg lg:col-span-3"
            style={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-center">
                <motion.div
                  className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-gray-600 to-gray-800"
                  whileHover={{ scale: 1.1 }}
                  transition={cardHoverTransition}
                >
                  <Code className="h-7 w-7 text-white" />
                </motion.div>
                <div className="text-center">
                  <h3 className="font-urbanist text-midnight-900 text-2xl font-bold">Under the Hood</h3>
                  <p className="font-inter text-midnight-600">The building blocks behind the app</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {techFeatures.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <motion.div
                      key={tech.title}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      }}
                      transition={cardHoverTransition}
                      className="rounded-xl border border-white/40 bg-white/60 p-6 text-center backdrop-blur-sm"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <TechIcon className={`h-8 w-8 ${tech.color} mx-auto mb-3`} />
                      <div className="font-inter text-midnight-700 mb-2 text-sm font-medium">{tech.title}</div>
                      <div className="font-inter text-midnight-500 text-xs">{tech.desc}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-gray-600" />
                  <span className="font-inter text-midnight-600 text-sm">Responsive web UI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-gray-600" />
                  <span className="font-inter text-midnight-600 text-sm">Turborepo monorepo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="text-center">
          <div className="from-mint-50 to-mint-100 relative overflow-hidden rounded-3xl bg-gradient-to-r p-12">
            {/* Animated background elements */}
            <motion.div
              className="bg-mint-200/20 absolute left-0 top-0 h-32 w-32 rounded-full blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="bg-mint-300/20 absolute bottom-0 right-0 h-24 w-24 rounded-full blur-2xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <h3 className="font-urbanist text-midnight-900 mb-4 text-2xl font-bold md:text-3xl">
                Want to see how it works?
              </h3>
              <p className="font-inter text-midnight-600 mx-auto mb-8 max-w-2xl text-lg">
                The full architecture and setup instructions live in the README. Read the code, or spin it up locally
                and sign in.
              </p>
              <motion.button
                onClick={() => navigate(NAVIGATION_ROUTES.LOGIN)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={cardHoverTransition}
                className="bg-mint-500 hover:bg-mint-600 font-inter rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
              >
                Sign in
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
