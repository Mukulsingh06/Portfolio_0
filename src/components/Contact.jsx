import React, { useState } from 'react';

const Contact = ({ onHover, onLeave }) => {

  const [active, setActive] = useState(true);

  return (
    <div className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-225 h-130 z-999 absolute bottom-0 m-10 mb-14 rounded-4xl p-5" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="border border-white w-full rounded-4xl p-3 flex flex-col items-center justify-center ">
        <div className="z-2 bg-white">
        </div>
        <div className="z-1">
          <button>Customer</button>
          <button>Collaboration</button>
        </div>
        <div className="z-0">

        </div>
      </div>
    </div>
  )
}

export default Contact
