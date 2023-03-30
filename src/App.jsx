import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-center text-3xl font-bold text-red-500'>Demo Assingment</h1>
      <h2 className='text-3xl text-red-600'>Testing after deployed in netlify</h2>
    </div>
  )
}

export default App
