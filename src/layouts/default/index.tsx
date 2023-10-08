import React from "react"

import { Outlet } from "react-router-dom"

import DefaultNavbar from "./Navbar"

export default function DefaultLayout() {
  const [darkMode, setDarkMode]= React.useState(true)

  return (
    <main className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} text-foreground bg-background min-h-100`}>
      <DefaultNavbar />

      <Outlet />
    </main>
  )
}
