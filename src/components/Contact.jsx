import React from 'react'

const Contact = ({ onHover, onLeave }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-225 h-130 z-999 absolute bottom-0 m-10 mb-14 rounded-4xl p-5" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className='flex flex-col ml-auto mr-auto'>
        <p className='text-5xl p-5 mx-auto'>Contact Me</p>

      </div>
    </div>
  )
}

export default Contact
