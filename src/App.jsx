import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-center text-3xl font-bold text-red-500'>Demo Assingment</h1>
      <h3 className='text-center text-4xl'>testing for manual deploy in netlify</h3>
     </div>
  )
}

export default App
