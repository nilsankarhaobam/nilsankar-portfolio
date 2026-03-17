'use client'
import { motion } from 'motion/react'

export default function About() {

  const fruits = ["🍎", "🍌", "🍉", "🍇"];

  const updates = [
    "Learning advanced React patterns",
    "Practicing Data Structures & Algorithms",
    "Exploring AI & Machine Learning",
    "Building MERN stack projects",
  ];

  const skills = [
    { name: "React", level: 80, tag: "UI Development" },
    { name: "Node.js", level: 70, tag: "Backend APIs" },
    { name: "MongoDB", level: 65, tag: "Database" },
    { name: "JavaScript", level: 85, tag: "Core Language" },
    { name: "Python", level: 88, tag: "Problem Solving" },
    { name: "MySQL", level: 84, tag: "Relational DB" },
  ];

  const projects = [
    {
      title: "Quiz App",
      desc: "React-based quiz system with dynamic question loading and scoring logic.",
      tech: "React",
      link: "#"
    },
    {
      title: "EV Recharge Bunk",
      desc: "Location-based EV charging management system.",
      tech: "MERN",
      link: "#"
    },
    {
      title: "Smart Expense Tracker",
      desc: "Expense tracking app with analytics dashboard and authentication.",
      tech: "MERN",
      link: "#"
    },
    {
      title: "eCommerce Shop",
      desc: "Full-stack shopping platform with cart and order flow.",
      tech: "MERN",
      link: "#"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>

        <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">
          Full Stack Developer focused on building real-world applications using MERN stack and Next.js.
          I focus on creating scalable, practical solutions and continuously improving my problem-solving skills.
        </p>

        <p className="text-sm opacity-50">
          Last updated: March 2026
        </p>
      </motion.section>


      {/* CURRENT JOURNEY */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Current Focus</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {updates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="card bg-base-200 p-4 shadow hover:shadow-md transition"
            >
              🚀 {item}
            </motion.div>
          ))}
        </div>
      </section>


      {/* SKILLS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span className="opacity-60">{skill.tag}</span>
              </div>

              <div className="w-full bg-base-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              key={i}
              whileHover={{ scale: 1.03 }}
              className="card bg-base-200 p-5 shadow hover:shadow-lg transition block"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <span className="text-xs opacity-60">{project.tech}</span>
              </div>

              <p className="text-sm opacity-70 mt-2">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>


      {/* RECENT UPDATES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Recent Updates</h2>

        <div className="space-y-3">
          {updates.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-3 border border-base-300 rounded-lg"
            >
              ✨ {item}
            </motion.div>
          ))}
        </div>
      </section>


      {/* FUN (SUBTLE) */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold opacity-60">A little fun 🍉</h2>

        <div className="flex justify-center gap-4 text-3xl">
          {fruits.map((fruit, index) => (
            <motion.span
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {fruit}
            </motion.span>
          ))}
        </div>
      </section>

    </div>
  );
}