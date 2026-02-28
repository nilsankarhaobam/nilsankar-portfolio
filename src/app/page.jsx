'use client'

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-16 text-center space-y-6">

        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Nilsankar&apos;s Lab
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building the Future Through Research & Code
        </motion.p>

        <p className="max-w-3xl mx-auto text-gray-700 px-6">
          Technology is not just tools — it&apos;s a gateway to exploration.
          I enjoy diving deep into complex problems, discovering new possibilities,
          and transforming ideas into innovative solutions.
        </p>

      </section>

      {/* ---------------- DISCOVER SECTION ---------------- */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >

        <div>
          <Image
            src="/images/Discover.png"
            alt="Discover Image"
            width={500}
            height={500}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            Discover Life
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Life is not meant to be consumed — it is meant to be explored.
            Creation is one of the most powerful ways to understand the world.
            Every idea begins as curiosity. Every breakthrough begins with experimentation.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Growth happens when we step outside routine thinking. Innovation
            emerges from iterations, failures, experiments, and unexpected
            connections between ideas.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Creation is more than writing code. It is about solving problems,
            designing better systems, and building experiences that make life
            smarter and more meaningful.
          </p>
        </div>

      </motion.section>

      {/* ---------------- AI SECTION ---------------- */}
      <motion.section
        className="mx-6 md:mx-20 mb-20 bg-amber-500 p-10 rounded-xl text-center space-y-4"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Emerging Artificial Intelligence
        </h3>

        <p className="text-amber-50">
          Artificial Intelligence is evolving at an unprecedented pace.
          From large language models to autonomous systems, AI is actively
          reshaping industries and research.
        </p>

        <p className="text-amber-50">
          Generative AI, multimodal systems, and real-time reasoning engines
          are transforming coding, healthcare, robotics, climate modeling,
          and scientific discovery.
        </p>
      </motion.section>

    </div>
  );
}