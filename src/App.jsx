import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/Price/PriceList'
import DeshBoard from './components/DeshBoard/DeshBoard'
import PhoneVar from './components/PhoneBar/PhoneVar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-blue-500'>helllo tailwind</h1>
     <PriceList></PriceList>
     <DeshBoard></DeshBoard>
     <PhoneVar></PhoneVar>
    </div>
  )
}

export default App
