"use client"

import { StatusBar } from "@/components/status-bar"
import { motion } from "framer-motion"
import { useAppState } from "@/lib/app-state"
import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  const { closeApp } = useAppState()

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+966532441434",
      href: "tel:+966532441434",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "omaroutset@gmail.com",
      href: "mailto:omaroutset@gmail.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+966532441434",
      href: "https://wa.me/966532441434",
      color: "from-green-400 to-green-600",
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

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="text-gray-400">Let's discuss your next project</p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{method.label}</p>
                    <p className="text-lg font-semibold">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h2 className="text-xl font-semibold mb-3">Available for</h2>
            <div className="space-y-2">
              {[
                "Front-end Development Projects",
                "Mobile App Development",
                "UX/UI Design Consultancy",
                "ERP System Development",
                "Freelance Opportunities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
