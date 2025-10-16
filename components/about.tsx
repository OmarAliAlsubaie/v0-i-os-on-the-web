"use client"

import { StatusBar } from "@/components/status-bar"
import { motion } from "framer-motion"
import { useAppState } from "@/lib/app-state"
import { ArrowLeft } from "lucide-react"

export function About() {
  const { closeApp } = useAppState()

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-auto">
      <StatusBar time={new Date()} dark={false} />

      <div className="pt-12 px-6 pb-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={closeApp}
          className="text-blue-400 mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Home</span>
        </motion.button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-balance">Omar Alsubaie</h1>
            <p className="text-xl text-blue-400 font-medium">UX/UI Designer & Software Engineer</p>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-relaxed text-gray-300">
              Highly motivated and results-oriented Software Engineer with academic background in Software Engineering
              from King Saud University.
            </p>

            <p className="text-base leading-relaxed text-gray-300">
              Experience in developing mobile applications and web applications. Proven ability to work independently
              and collaboratively on complex projects.
            </p>

            <p className="text-base leading-relaxed text-gray-300">
              Skilled in various programming languages and frameworks, with a passion for software development and
              innovation.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Education</h2>
            <div>
              <p className="font-semibold text-lg">King Saud University</p>
              <p className="text-gray-400">Software Engineering</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {["Front-end Development", "Mobile Apps", "Web Development", "ERP Systems", "UX/UI Design"].map(
                (skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
