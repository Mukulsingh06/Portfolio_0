import './App.css'
import React from 'react'
import { useState } from 'react'
import Profile from './components/Profile'
import Project from './components/Project'
import Skillset from './components/Skillset'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [visible,setVisible] = useState("Mukul Singh")


  return (
    <div className="bg-black w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="text-white absolute z-0 text-[200px] font-extrabold opacity-50">
        {visible}
      </div>
    <div className='z-10 w-screen h-screen'>
      <Profile onHover={() => setVisible("Yes Its Me")} onLeave={() => setVisible("Mukul Singh")} />
      <Project onHover={() => setVisible("My Project")} onLeave={() => setVisible("Mukul Singh")} />
      <Skillset onHover={() => setVisible("My SkillSet")} onLeave={() => setVisible("Mukul Singh")} />
      <About onHover={() => setVisible("About Me")} onLeave={() => setVisible("Mukul Singh")} />
      <Contact onHover={() => setVisible("Contract Me")} onLeave={() => setVisible("Mukul Singh")} />
    </div>
    </div>
  )
}

export default App
