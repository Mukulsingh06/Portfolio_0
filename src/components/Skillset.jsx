import React from 'react'
import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { MdCss, MdHtml } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJsonwebtokens, SiMongodb } from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'

const Skillset = ({ onHover, onLeave }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-150 h-110 z-999 absolute top-0 m-10 rounded-4xl p-5" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className='flex flex-col ml-auto mr-auto'>
        <p className='text-5xl p-5 mx-auto'>SkillSet</p>
         <ul className='grid grid-cols-6 gap-6 p-3'>
          <li><MdHtml size={50} className='hover:text-orange-600 hover:scale-125'/></li>
          <li><MdCss size={50} className='hover:text-cyan-500 hover:scale-150'/></li>
          <li><FaJsSquare size={50} className='hover:text-yellow-200 hover:scale-110'/></li>
          <li><FaPython size={50} className='hover:text-teal-400 hover:scale-110'/></li>
          <li><FaJava size={50} className='hover:text-indigo-400 hover:scale-110'/></li>
          <li><FaNodeJs size={50} className='hover:text-green-300 hover:scale-110'/></li>
          <li><FaReact size={50} className='hover:text-cyan-400 hover:scale-110'/></li>
          <li><FaBootstrap size={50} className='hover:text-yellow-100 hover:scale-110'/></li>
          <li><RiTailwindCssFill size={50} className='hover:text-indigo-600 hover:scale-110'/></li>
          <li><SiMongodb size={50} className='hover:text-emerald-600 hover:scale-110'/></li>
          <li><TbBrandMysql size={50} className='hover:text-purple-600 hover:scale-110'/></li>
          <li><SiJsonwebtokens size={50} className='hover:text-pink-400 hover:scale-110'/></li>
         </ul>
      </div>
    </div>
  )
}

export default Skillset
