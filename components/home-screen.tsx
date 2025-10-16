"use client"

import { useState, useEffect } from "react"
import { StatusBar } from "@/components/status-bar"
import { AppIcon } from "@/components/app-icon"
import { Widget } from "@/components/widget"
import { AppLibrary } from "@/components/app-library"
import { motion, AnimatePresence } from "framer-motion"
import { useAppState } from "@/lib/app-state"

interface HomeScreenProps {
  time: Date
}

export function HomeScreen({ time }: HomeScreenProps) {
  const [showAppLibrary, setShowAppLibrary] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const dayOfMonth = time.getDate()
  const { openControlCenter } = useAppState()

  // Preload critical SVG icons
  useEffect(() => {
    const preloadIcons = [
      "facetime",
      "calendar",
      "photos",
      "camera",
      "mail",
      "notes",
      "reminders",
      "clock",
      "phone",
      "messages",
      "music",
      "safari",
    ]

    preloadIcons.forEach((icon) => {
      const img = new Image()
      img.src = `/icons/${icon}.svg`
    })
  }, [])

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50 && currentPage < 1) {
      // Swipe left
      setCurrentPage(currentPage + 1)
    } else if (info.offset.x > 50 && currentPage > 0) {
      // Swipe right
      setCurrentPage(currentPage - 1)
    } else if (info.offset.x < -50 && currentPage === 1) {
      // Open App Library from last page
      setShowAppLibrary(true)
    }
  }

  // Add touch handler for swipe down from top
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      if (touchY < 30) {
        // Touch started near the top of the screen
        const handleTouchMove = (moveEvent: TouchEvent) => {
          const currentY = moveEvent.touches[0].clientY
          if (currentY - touchY > 30) {
            // Swiped down at least 30px
            openControlCenter()
            document.removeEventListener("touchmove", handleTouchMove)
          }
        }

        document.addEventListener("touchmove", handleTouchMove, { once: true })
      }
    }

    document.addEventListener("touchstart", handleTouchStart)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
    }
  }, [openControlCenter])

  return (
    <div
      className="h-full w-full flex flex-col relative select-none overflow-hidden"
      style={{
        backgroundImage: `url(/wallpaper.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StatusBar time={time} dark />

      {/* Pages Container */}
      <motion.div
        className="flex-1 relative"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {currentPage === 0 && (
            <motion.div
              key="page-0"
              className="absolute inset-0 px-6 pt-4 pb-6 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Widgets */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Widget
                  className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/10"
                  title="About"
                  content={
                    <div className="text-white">
                      <div className="text-lg font-semibold mb-1">Omar Alsubaie</div>
                      <div className="text-sm text-blue-400 mb-2">UX/UI Designer</div>
                      <div className="text-xs text-gray-300">Software Engineer</div>
                      <div className="text-xs text-gray-400 mt-2">King Saud University</div>
                    </div>
                  }
                />
                <Widget
                  className="bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-md"
                  title="Contact"
                  content={
                    <div className="text-white">
                      <div className="text-xs mb-2">Get in touch</div>
                      <div className="text-sm font-medium mb-1">+966532441434</div>
                      <div className="text-xs mb-3">omaroutset@gmail</div>
                      <div className="text-xs text-white/80">Available for projects</div>
                    </div>
                  }
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <AppIcon
                  id="about"
                  name="About"
                  color="bg-gradient-to-br from-slate-700 to-slate-900"
                  customIcon={<div className="w-full h-full flex items-center justify-center text-3xl">👤</div>}
                />
                <AppIcon
                  id="experience"
                  name="Experience"
                  color="bg-gradient-to-br from-blue-600 to-blue-800"
                  customIcon={<div className="w-full h-full flex items-center justify-center text-3xl">💼</div>}
                />
                <AppIcon
                  id="projects"
                  name="Projects"
                  color="bg-gradient-to-br from-purple-600 to-pink-600"
                  customIcon={<div className="w-full h-full flex items-center justify-center text-3xl">🚀</div>}
                />
                <AppIcon
                  id="contact"
                  name="Contact"
                  color="bg-gradient-to-br from-green-600 to-emerald-600"
                  customIcon={<div className="w-full h-full flex items-center justify-center text-3xl">📧</div>}
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <AppIcon id="calendar" name="Calendar" color="" />
                <AppIcon id="photos" name="Photos" color="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400" />
                <AppIcon id="camera" name="Camera" color="bg-gray-800" />
                <AppIcon id="clock" name="Clock" color="bg-black" />
              </div>
            </motion.div>
          )}

          {currentPage === 1 && (
            <motion.div
              key="page-1"
              className="absolute inset-0 px-6 pt-4 pb-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Second page app icons */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <AppIcon id="maps" name="Maps" color="" />
                <AppIcon id="health" name="Health" color="" />
                <AppIcon id="wallet" name="Wallet" color="bg-gradient-to-b from-yellow-400 to-red-500" />
                <AppIcon id="settings" name="Settings" color="bg-gray-200" />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <AppIcon id="news" name="News" color="bg-red-600" />
                <AppIcon id="tv" name="TV" color="bg-black" />
                <AppIcon id="podcasts" name="Podcasts" color="" />
                <AppIcon id="appstore" name="App Store" color="" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Page Indicators */}
      <div className="flex justify-center mb-2">
        <div className="flex gap-1.5">
          <button
            className={`w-1.5 h-1.5 rounded-full ${currentPage === 0 ? "bg-white" : "bg-white/30"}`}
            onClick={() => setCurrentPage(0)}
          />
          <button
            className={`w-1.5 h-1.5 rounded-full ${currentPage === 1 ? "bg-white" : "bg-white/30"}`}
            onClick={() => setCurrentPage(1)}
          />
          <button className={`w-1.5 h-1.5 rounded-full ${showAppLibrary ? "bg-white" : "bg-white/30"}`} />
        </div>
      </div>

      {/* Dock */}
      <div className="grid grid-cols-4 gap-4 px-6 mb-6">
        <AppIcon id="phone" name="Phone" color="bg-green-500" />
        <AppIcon id="safari" name="Safari" color="" />
        <AppIcon id="messages" name="Messages" color="" />
        <AppIcon id="music" name="Music" color="" />
      </div>

      {/* App Library */}
      <AppLibrary isVisible={showAppLibrary} onClose={() => setShowAppLibrary(false)} />
    </div>
  )
}
