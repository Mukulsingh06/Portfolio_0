import React, { useState } from 'react';

const Contact = ({ onHover, onLeave }) => {
  const [active, setActive] = useState(true);

  return (
    <div
      className="bg-[rgba(255,255,255,0.15)] text-white backdrop-blur-sm flex w-225 h-130 z-999 absolute bottom-0 m-10 mb-14 rounded-4xl p-5"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative border border-white w-full rounded-4xl p-3 flex items-center justify-center ">
        <div className="absolute z-10 bg-white w-60 h-10 rounded-3xl" />
        <div className="absolute z-30 w-60 h-10 flex items-center justify-between px-2 text-black">
          <button
            onClick={() => setActive(true)}
            className="w-1/2 h-full z-40"
          >
            Customer
          </button>
          <button
            onClick={() => setActive(false)}
            className="w-1/2 h-full z-40"
          >
            Collaboration
          </button>
        </div>
        <div
          className={`absolute z-20 h-10 bg-black rounded-3xl
    transition-all duration-300 ease-in-out opacity-70
    ${active
              ? 'w-31 translate-x-[-59px]'
              : 'w-33 translate-x-[55px]'
            }
  `}
        />
      </div>
    </div>
  );
};

export default Contact;
