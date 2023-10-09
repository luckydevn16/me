import React from 'react'

import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate("/about")
  }, [navigate])

  return <div className="container p-8 mx-auto">Home</div>
}
