import { useState } from 'react'
import './App.css'
import { Divs } from './components/api'
import Headers from './components/header'



function App() {


  return (
    <div className='text-[arial]'>
      <header className='flex flex-col justify-center items-center'>
        <a href="https://www.pexels.com/es-es/"><img src="https://logos-world.net/wp-content/uploads/2025/02/Pexels-Logo-New.png" alt="pexels" className='w-[150px]' /></a>
      </header>
      <main className='flex flex-col justify-center items-center'>
        <br />
        <Divs />
      </main>
      <br />
    </div>
  )
}
// Z8GoIQskpfynexq0mumbbxTerP76Q00dxTWdoqV3IyBuEQkqTu2NyhC1

export default App


