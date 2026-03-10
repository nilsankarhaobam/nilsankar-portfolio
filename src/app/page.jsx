'use client'

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 ">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-16 pb-8 text-center space-y-6">

        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Nilsankar&apos;s Lab
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building the Future Through Research & Code
        </motion.p>

        <p className="max-w-3xl mx-auto  px-6">
          Technology is not just tools — it&apos;s a gateway to exploration.
          I enjoy diving deep into complex problems, discovering new possibilities,
          and transforming ideas into innovative solutions.
        </p>

      </section>

      {/* ---------------- DISCOVER SECTION ---------------- */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 pt-8 pb-16"
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

          <p className=" leading-relaxed">
            Life is not meant to be consumed — it is meant to be explored.
            Creation is one of the most powerful ways to understand the world.
            Every idea begins as curiosity. Every breakthrough begins with experimentation.
          </p>

          <p className="leading-relaxed">
            Growth happens when we step outside routine thinking. Innovation
            emerges from iterations, failures, experiments, and unexpected
            connections between ideas.
          </p>

          <p className=" leading-relaxed">
            Creation is more than writing code. It is about solving problems,
            designing better systems, and building experiences that make life
            smarter and more meaningful.
          </p>
        </div>

      </motion.section>

      {/* ---------------- AI SECTION ---------------- */}
      <motion.section
        className="mx-6 md:mx-20 bg-amber-500 p-10 rounded-xl text-center space-y-4"
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

      {/* Cosmic Universe sections begins */}
      <motion.div initial={{x:-80}} whileInView={{ x:0}} transition={{duration:2}} viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-center gap-6 md:px-20 px-6 py-16  ">
        

        <div  className="space-y-3 md:w-1/2">
          <div>
          <h1 className="text-2xl font-semibold text-center">“The Void Between Stars” — My Personal Reflection on the Unknown</h1>
        </div>
          <p className=" leading-relaxed">
            There&apos;s a silence in space — not empty, but deep. It&apos;s the quiet between stars, where no light has touched, and no voice has been heard. I&apos;ve spent years staring at it — not with a telescope, but with my mind. I wonder: if the universe is vast, why do we feel so small? Why do we crave meaning? Why do we dream of galaxies, of alien worlds, of time travel?
          </p>

          <p className=" leading-relaxed">
            This is my story — not about discoveries, but about questions. About the awe of being alone in a cosmic ocean, and the courage to ask: “What if there&apos;s more than we know?” I built this page not to show off code — but to hold space for my thoughts. I let animations flow like nebulae, let hover effects mimic stars blinking, and let the layout feel like a journey through the dark — until you find light.
          </p>

          <p className=" leading-relaxed">
            This is not a project. It&apos;s a conversation with the universe — and with myself.
          </p>
        </div>

         <div>
          <Image
            src="/images/cars.jpg"
            alt="Universe"
            width={500}
            height={500}
            priority
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      {/* Cosmic Universe sections ends */}

      {/* Explore sections begin */}

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once:true}} className="mx-6 md:mx-20 mb-20 bg-blue-400 p-10 rounded-xl text-center space-y-4 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Discover More</h1>
        </div>

        <div>
          <p className="text-amber-50">
            Dive deeper into a collection of ideas, experiments, and creations. From projects and research to thoughts and discoveries, this space reflects my journey through technology and innovation.
          </p>
        </div>

        <div>
          <button className="btn btn-primary">Explore</button>
        </div>
      </motion.div>
      {/* Explore sections end */}

    </div>
  );
}