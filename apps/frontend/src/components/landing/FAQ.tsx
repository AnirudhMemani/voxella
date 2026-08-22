import React, { useState } from "react";
import { Github, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EXTERNAL_LINKS } from "@/utils/constants";
import { Reveal } from "./animations";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Voxella open source?",
      answer:
        "Yes. Voxella is a free, open-source side project built to learn full-stack, real-time architecture. All of the code (frontend, REST API, WebSocket server, and database schema) is on GitHub.",
    },
    {
      question: "How does real-time messaging work?",
      answer:
        "Clients open a WebSocket connection to a WebSocket server instance. Each chat room maps to a Redis Pub/Sub channel: when a message is published, every WebSocket instance subscribed to that channel forwards it to its connected clients. This decouples delivery from any single server, so the socket layer can scale out horizontally behind a load balancer.",
    },
    {
      question: "What can I actually do in a chat?",
      answer:
        "Send text messages (with an emoji picker) in one-to-one direct messages and group chats. You get read receipts, unread indicators, and can search for users and existing chats to start a conversation. Profile and group pictures can be uploaded and cropped.",
    },
    {
      question: "How do group chats work?",
      answer:
        "You can create a group, rename it, add or remove members, promote or demote admins, and transfer the super-admin role. Members can leave, and the super-admin can delete the group. There are no channels or automated moderation tools, just direct group management.",
    },
    {
      question: "Are my messages encrypted?",
      answer:
        "Be aware that Voxella is a learning project, not a hardened secure messenger. Passwords are hashed with bcrypt and sessions use JWTs, and production traffic would run over TLS, but messages are stored as plain text in the database. There is no end-to-end encryption, so don't use it for anything sensitive.",
    },
    {
      question: "Can I share files or make voice/video calls?",
      answer:
        "Not currently. Messages are text (plus emoji), and the only uploads are profile and group images via Cloudinary. There is no arbitrary file sharing and no voice or video calling; those aren't implemented.",
    },
    {
      question: "What's the tech stack?",
      answer:
        "A Turborepo monorepo: React + Vite + Tailwind + shadcn/ui + Recoil on the frontend; Node.js + Express with JWT and Zod for the REST API; a standalone `ws` WebSocket server; Redis Pub/Sub (ioredis) for fan-out; and PostgreSQL via Prisma for persistence.",
    },
    {
      question: "Is there a hosted demo I can try?",
      answer:
        "There's no public hosted instance right now. To try it, clone the repository and run the stack locally. The README has full setup and architecture notes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-urbanist text-midnight-900 mb-6 text-4xl font-bold md:text-5xl">
            Frequently Asked{" "}
            <span className="from-mint-500 to-mint-600 bg-gradient-to-r bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="font-inter text-midnight-600 mx-auto max-w-2xl text-xl">
            What Voxella does, how it&apos;s built, and (just as importantly) what it doesn&apos;t do.
          </p>
        </Reveal>

        <Reveal className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 ease-out hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none"
              >
                <h3 className="font-urbanist text-midnight-900 pr-8 text-lg font-semibold">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-mint-500 h-6 w-6" />
                  ) : (
                    <Plus className="text-midnight-400 h-6 w-6" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="font-inter text-midnight-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-16 text-center">
          <div className="from-mint-50 to-mint-100 rounded-3xl bg-gradient-to-r p-8">
            <h3 className="font-urbanist text-midnight-900 mb-4 text-2xl font-bold">Still have questions?</h3>
            <p className="font-inter text-midnight-600 mb-6 text-lg">
              The README covers setup and architecture in detail. For anything else, open an issue on GitHub.
            </p>
            <a
              href={EXTERNAL_LINKS.GITHUB_ISSUES}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mint-500 hover:bg-mint-600 font-inter inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
            >
              <Github className="h-5 w-5" />
              Open an Issue
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
