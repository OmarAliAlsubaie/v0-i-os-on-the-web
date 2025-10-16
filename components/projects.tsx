"use client"

import { StatusBar } from "@/components/status-bar"
import { motion } from "framer-motion"
import { useAppState } from "@/lib/app-state"
import { ArrowLeft, Smartphone, Globe, FileText, Languages } from "lucide-react"

export function Projects() {
  const { closeApp } = useAppState()

  const projects = [
    {
      title: "Fitness Tracker Application",
      category: "Mobile App",
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      description: "Comprehensive fitness tracking with workout plans and progress monitoring",
    },
    {
      title: "Prayer Times Application",
      category: "Mobile App",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-600",
      description: "Accurate prayer times with notifications and Qibla direction",
    },
    {
      title: "Invoice Creation Application",
      category: "Mobile App",
      icon: FileText,
      color: "from-purple-500 to-pink-600",
      description: "Professional invoice generation and management system",
    },
    {
      title: "Translation Application",
      category: "Mobile App",
      icon: Languages,
      color: "from-orange-500 to-red-600",
      description: "Multi-language translation with offline support",
    },
    {
      title: "Real Estate Management Website",
      category: "Web Development",
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
      description: "Complete property management and listing platform",
    },
    {
      title: "Project Management Website",
      category: "Web Development",
      icon: Globe,
      color: "from-teal-500 to-blue-600",
      description: "Collaborative project tracking and team coordination",
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
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-gray-400">Mobile applications and web solutions</p>
          </div>

          <div className="grid gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                      </div>
                      <p className="text-xs text-blue-400 font-medium mb-2 uppercase tracking-wide">
                        {project.category}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
