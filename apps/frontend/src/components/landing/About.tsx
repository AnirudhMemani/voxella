import React from "react";
import { Boxes, Layers, Shuffle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cardHover, cardHoverTransition, Reveal } from "./animations";

const About: React.FC = () => {
  const stats = [
    { number: "WebSockets", label: "Real-time transport" },
    { number: "Redis Pub/Sub", label: "Message fan-out" },
    { number: "JWT + bcrypt", label: "Authentication" },
    { number: "Prisma", label: "PostgreSQL ORM" },
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-urbanist text-midnight-900 mb-6 text-4xl font-bold md:text-5xl">
            About the{" "}
            <span className="from-mint-500 to-mint-600 bg-gradient-to-r bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="font-inter text-midnight-600 mx-auto max-w-3xl text-xl">
            Voxella is a full-stack, open-source chat app built as a side project to learn how a real-time,
            horizontally-scalable messaging system fits together, from the WebSocket layer down to the database.
          </p>
        </Reveal>

        {/* Stats Section */}
        <Reveal className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={cardHover}
              transition={cardHoverTransition}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow duration-200 ease-out hover:shadow-2xl">
                {/* Subtle animated background */}
                <div className="from-mint-50/0 to-mint-100/0 hover:from-mint-50/20 hover:to-mint-100/10 absolute inset-0 bg-gradient-to-br transition-all duration-200 ease-out" />

                <div className="relative z-10">
                  <h3 className="font-urbanist text-mint-600 mb-2 text-xl font-bold md:text-2xl">{stat.number}</h3>
                  <p className="font-inter text-midnight-600 font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Reveal>

        {/* Mission Section */}
        <Reveal className="relative mb-20 overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
          {/* Animated background elements */}
          <div className="bg-mint-100/30 animate-pulse-soft absolute right-0 top-0 h-40 w-40 rounded-full" />
          <div className="bg-mint-200/20 animate-bounce-gentle absolute bottom-0 left-0 h-32 w-32 rounded-full" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-urbanist text-midnight-900 mb-6 text-3xl font-bold">Why I Built It</h3>
              <p className="font-inter text-midnight-600 mb-6 text-lg leading-relaxed">
                I wanted to move past toy tutorials and build the harder parts of a chat app myself: keeping WebSocket
                connections in sync across multiple server instances, fanning messages out with Redis Pub/Sub, and
                modelling direct messages, group chats, and roles in a real relational schema.
              </p>
              <p className="font-inter text-midnight-600 text-lg leading-relaxed">
                It&apos;s a learning project, so the code is open source and the emphasis is on a clean,
                production-style architecture rather than a long list of features. The README walks through the full
                design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Real-time", desc: "WebSocket message delivery" },
                { icon: Shuffle, title: "Scalable", desc: "Stateless sockets + Redis fan-out" },
                { icon: Layers, title: "Full-stack", desc: "REST, WebSocket & Prisma/Postgres" },
                { icon: Boxes, title: "Monorepo", desc: "Turborepo with shared types" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={cardHoverTransition}
                  className="bg-mint-50 hover:bg-mint-100 rounded-2xl p-6 text-center transition-colors duration-200 ease-out"
                >
                  <item.icon className="text-mint-600 mx-auto mb-3 h-8 w-8" />
                  <h4 className="font-urbanist text-midnight-900 mb-2 font-semibold">{item.title}</h4>
                  <p className="font-inter text-midnight-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
