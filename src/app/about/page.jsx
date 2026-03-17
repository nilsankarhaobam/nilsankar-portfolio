'use client'
import { motion } from 'motion/react'

export default function About() {
  const fruits = ["🍎", "🍌", "🍉", "🍇", "🍍", "🥭"];

  const updates = [
    "Learning advanced React patterns",
    "Practicing Data Structures & Algorithms",
    "Exploring AI & Machine Learning",
    "Building MERN stack projects",
  ];

  const skills = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 88 },
    { name: "MySQL", level: 84 },
  ];

  const projects = [
    {
      title: "Quiz App",
      desc: "Interactive quiz platform with scoring and dynamic questions.",
    },
    {
      title: "EV Recharge Bunk",
      desc: "Location-based EV charging management system.",
    },
    {
      title: "Smart Expense Tracker",
      desc: "Track expenses with analytics dashboard and secure auth.",
    },
    {
      title: "eCommerce Shop",
      desc: "Full-stack shopping platform with cart and payments flow.",
    },
  ];

  return (
    <div className="p-6 space-y-16">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Developer focused on building scalable applications, solving problems, 
          and continuously learning new technologies.
        </p>
      </motion.div>


      {/* CURRENT JOURNEY */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Current Journey</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {updates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card bg-base-200 p-4 shadow"
            >
              🚀 {item}
            </motion.div>
          ))}
        </div>
      </div>


      {/* SKILLS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills & Progress</h2>

        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <p>{skill.name}</p>
              <p>{skill.level}%</p>
            </div>

            <div className="w-full bg-base-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-primary h-3 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>


      {/* PROJECTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="card bg-base-200 p-4 shadow cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm opacity-70 mt-1">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>


      {/* RECENT UPDATES */}
      <div className="space-y-6">
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
      </div>


      {/* FUN */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Just for Fun</h2>

        <div className="flex justify-center gap-4 flex-wrap text-4xl">
          {fruits.map((fruit, index) => (
            <motion.span
              key={index}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1 + index * 0.2 }}
            >
              {fruit}
            </motion.span>
          ))}
        </div>
      </div>

    </div>
  );
}

