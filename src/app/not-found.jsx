'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-6">
      
    

      {/* Content Layer */}
      <div className="relative z-10 space-y-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Lost in the Lab?
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto text-lg text-base-content/70"
        >
          The experiment or page you are looking for has drifted into the cosmic void. 
          Let&apos;s get you back to safety.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/" className="btn btn-primary btn-wide rounded-full">
            Return to Home
          </Link>
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"
      />
    </div>
  )
}