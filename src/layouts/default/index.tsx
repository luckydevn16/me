import React from "react"

import localforage from "localforage"
import { Outlet } from "react-router-dom"

import DefaultNavbar from "./Navbar"

export default function DefaultLayout() {
  const [loading, setLoading] = React.useState(true)
  const [darkMode, setDarkMode]= React.useState(true)

  const initialize = async () => {
    const mode = await localforage.getItem("darkMode")
    await setDarkMode(mode as boolean)
    await setLoading(false)
  }

  React.useEffect(() => {
    initialize()
  }, [])

  if (loading) return null

  return (
    <main className={`flex flex-col min-w-[300px] min-h-screen ${darkMode ? 'dark' : ''} text-foreground bg-background min-h-100`}>
      <DefaultNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Outlet />
    </main>
  )
}
