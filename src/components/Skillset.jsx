import React from 'react'
import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { MdCss, MdHtml } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJsonwebtokens, SiMongodb } from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'



const Skillset = ({ onHover, onLeave }) => {

  const skills = [
    { name: "HTML", icon: MdHtml, color: "hover:text-orange-600" },
    { name: "CSS", icon: MdCss, color: "hover:text-cyan-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "hover:text-yellow-200" },
    { name: "Python", icon: FaPython, color: "hover:text-teal-400" },
    { name: "Java", icon: FaJava, color: "hover:text-indigo-400" },
    { name: "Node.js", icon: FaNodeJs, color: "hover:text-green-300" },
    { name: "React", icon: FaReact, color: "hover:text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "hover:text-yellow-100" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "hover:text-indigo-600" },
    { name: "MongoDB", icon: SiMongodb, color: "hover:text-emerald-600" },
    { name: "MySQL", icon: TbBrandMysql, color: "hover:text-purple-600" },
    { name: "JWT", icon: SiJsonwebtokens, color: "hover:text-pink-400" }
  ];

  return (
    <div className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-150 h-110 z-999 absolute top-0 m-10 rounded-4xl p-5">
      <div className='flex flex-col ml-auto mr-auto'>
        <p className='text-5xl p-5 mx-auto'>SkillSet</p>
        <ul className='grid grid-cols-5 gap-6 p-4 items-center '>
          {skills.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              onMouseEnter={() => onHover(name)}
              onMouseLeave={onLeave}
              className="cursor-pointer"
            >
              <Icon size={70} className={`${color} hover:scale-125 transition`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skillset
