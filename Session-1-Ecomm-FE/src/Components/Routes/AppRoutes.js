import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Login'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
