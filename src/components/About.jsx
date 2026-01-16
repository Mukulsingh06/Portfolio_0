import React from 'react'

const About = ({ onHover, onLeave }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-180 h-110 z-999 absolute top-0 left-165 m-10 rounded-4xl p-5" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className='flex flex-col ml-auto mr-auto'>
        <p className='text-5xl p-5 mx-auto'>About</p>
        <p className='text-center text-xl px-4.5 py-2 border border-white rounded-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis suscipit labore praesentium cupiditate, assumenda accusamus perferendis nemo rem corporis ipsam eligendi quia! Dolorum reprehenderit accusamus porro perferendis vitae atque dolores odio iure veritatis. Quas libero repellendus sed at neque reiciendis perspiciatis nam consectetur repudiandae iure expedita sit quis nostrum aspernatur corporis in tenetur, doloribus velit, praesentium placeat fuga beatae. Velit temporibus aliquid totam quo iusto reiciendis, hic similique quibusdam cumque qui, deleniti, doloribus voluptas accusantium eum debitis inventore voluptatum eos.
        </p>
      </div>
    </div>
  )
}

export default About
