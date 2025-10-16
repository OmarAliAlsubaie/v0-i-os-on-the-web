"use client"

import { StatusBar } from "@/components/status-bar"
import { motion } from "framer-motion"
import { useAppState } from "@/lib/app-state"
import { ArrowLeft, Briefcase } from "lucide-react"

export function Experience() {
  const { closeApp } = useAppState()

  const experiences = [
    {
      period: "2020 - Current",
      company: "Envato",
      role: "Front-end Developer & ERP Developer",
      description:
        "Remote work for agencies, consultancy for startups, crafting digital solutions that meet both business and consumer needs.",
      projects: [
        "Fitness Tracker Application",
        "Prayer Times Application",
        "Invoice Creation Application",
        "Translation Application",
      ],
    },
    {
      period: "2021 - 2022",
      company: "Apple",
      role: "Design & Web Development",
      description: "Developed comprehensive web solutions with focus on user experience and modern design principles.",
      projects: ["Real Estate Management Website", "Project Management Website"],
    },
  ]

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

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Experience</h1>
            <p className="text-gray-400">A journey through software development and innovation</p>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Key Projects</p>
                    <div className="space-y-1">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          <span className="text-sm text-gray-300">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
