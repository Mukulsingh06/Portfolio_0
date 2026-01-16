import './App.css'
import React from 'react'
import { useState } from 'react'
import Profile from './components/Profile'
import Project from './components/Project'
import Skillset from './components/Skillset'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [visible, setVisible] = useState("My Area")


  return (
    <div className="bg-black w-screen h-screen overflow-hidden ">
      <div className="text-white absolute z-0 text-[200px] font-extrabold opacity-50 flex justify-center w-screen h-screen items-center pb-30">
        {visible}
      </div>
      <div className='z-10 w-screen h-screen'>
        <Profile onHover={() => setVisible("Yes Its Me")} onLeave={() => setVisible("My Area")} />
        <Project onHover={() => setVisible("My Project")} onLeave={() => setVisible("My Area")} />
        <Skillset onHover={(skillname) => setVisible(skillname)} onLeave={() => setVisible("My Area")} />
        <About onHover={() => setVisible("About Me")} onLeave={() => setVisible("My Area")} />
        <Contact onHover={() => setVisible("Contact Me")} onLeave={() => setVisible("My Area")} />
      </div>
    </div>
  )
}

export default App
