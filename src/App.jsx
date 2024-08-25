import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CxFeedbackForm from './Components/CxFeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<CxFeedbackForm />} />
    </Routes>
    </>
  )
}

export default App
