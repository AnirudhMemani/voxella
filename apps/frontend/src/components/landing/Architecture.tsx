import { EXTERNAL_LINKS } from "@/utils/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCheck,
  Database,
  Github,
  Image as ImageIcon,
  KeyRound,
  MonitorSmartphone,
  Radio,
  Server,
  Users,
} from "lucide-react";
import React from "react";
import { cardHover, cardHoverTransition, Reveal } from "./animations";

const Architecture: React.FC = () => {
  // Each stage of the real-time pipeline, straight from the README architecture.
  const pipeline = [
    { icon: MonitorSmartphone, title: "Clients", desc: "React app opens a WebSocket connection" },
    { icon: Server, title: "WebSocket layer", desc: "Stateless `ws` instances, scaled horizontally" },
    { icon: Radio, title: "Redis Pub/Sub", desc: "One channel per room fans messages out" },
    { icon: Database, title: "PostgreSQL", desc: "Messages & state persisted via Prisma" },
  ];

  // Capabilities that are genuinely implemented in the codebase.
  const capabilities = [
    { icon: Users, title: "DMs & group chats", desc: "One-to-one and multi-member conversations" },
    { icon: KeyRound, title: "JWT auth", desc: "bcrypt-hashed passwords; one token for REST + WS" },
    { icon: CheckCheck, title: "Read receipts", desc: "Track who has read each message" },
    { icon: ImageIcon, title: "Image uploads", desc: "Profile & group pictures, cropped, via Cloudinary" },
    { icon: Users, title: "Roles & admins", desc: "Admins, a super-admin, and role transfer" },
    { icon: Server, title: "Type-safe protocol", desc: "Shared WebSocket contracts across the monorepo" },
  ];

  return (
    <section id="architecture" className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-urbanist text-midnight-900 mb-6 text-4xl font-bold md:text-5xl">
            How It&apos;s{" "}
            <span className="from-mint-500 to-mint-600 bg-gradient-to-r bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="font-inter text-midnight-600 mx-auto max-w-3xl text-xl">
            The interesting part of the project is the real-time pipeline. Messages don&apos;t depend on any single
            server instance, so the WebSocket layer can scale out horizontally.
          </p>
        </Reveal>

        {/* Pipeline flow */}
        <Reveal className="mb-16">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {pipeline.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <React.Fragment key={stage.title}>
                  <motion.div
                    whileHover={cardHover}
                    transition={cardHoverTransition}
                    className="flex-1 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-sm"
                  >
                    <div className="from-mint-500 to-mint-600 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                      <StageIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-urbanist text-midnight-900 mb-1 font-semibold">{stage.title}</h3>
                    <p className="font-inter text-midnight-600 text-sm">{stage.desc}</p>
                  </motion.div>

                  {index < pipeline.length - 1 && (
                    <ArrowRight className="text-mint-400 mx-auto h-6 w-6 flex-shrink-0 rotate-90 lg:rotate-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Reveal>

        {/* Capability grid */}
        <Reveal className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const CapIcon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="flex items-start space-x-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-md"
              >
                <div className="bg-mint-100 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl">
                  <CapIcon className="text-mint-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-urbanist text-midnight-900 mb-1 font-semibold">{cap.title}</h3>
                  <p className="font-inter text-midnight-600 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </Reveal>

        <Reveal className="text-center">
          <a
            href={EXTERNAL_LINKS.GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-midnight-900 hover:bg-midnight-800 font-inter inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            Read the full architecture on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Architecture;
