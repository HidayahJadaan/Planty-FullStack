import React from 'react'
import './dashboard.scss'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/">logout</Link>
      </div>
  )
}
