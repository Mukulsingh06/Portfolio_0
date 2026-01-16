import React from 'react'

const Project = ({ onHover, onLeave }) => {
  return (
    <div className='bg-[rgba(255,255,255,0.15)] w-1/2 h-130 ml-auto mt-20 m-10 opacity-100 backdrop-blur-sm rounded-4xl p-5' onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="text-white flex flex-col gap-5 text-center justify-center p-2">
        <p className='text-5xl pb-5'>Projects</p>
        <div className="border border-white rounded-2xl p-2">
          <p className='text-3xl pt-2 pb-2'>ABC</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni facilis in ducimus fugiat corporis explicabo beatae natus eos mollitia!</p>
        </div>
        <div className="border border-white rounded-2xl p-2">
          <p className='text-3xl pt-2 pb-2'>MNO</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni facilis in ducimus fugiat corporis explicabo beatae natus eos mollitia!</p>
        </div>
        <div className="border border-white rounded-2xl p-2">
          <p className='text-3xl pt-2 pb-2'>XYZ</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni facilis in ducimus fugiat corporis explicabo beatae natus eos mollitia!</p>
        </div>
      </div>
    </div>
  )
}

export default Project
