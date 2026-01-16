import React from 'react'
import profile from '../assets/profile.jpg'
import { FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'


const Profile = ({onHover,onLeave}) => {
    return (
            <div className='profile_pic ml-auto m-10 p-2 flex flex-col w-fit text-center' onMouseEnter={onHover} onMouseLeave={onLeave}>
                <div className="">
                <img src={profile} className='peer/one w-auto h-80 border rounded-full grayscale-100 hover:grayscale-0 ' />
                <h1 className='peer-hover/one:block hidden text-white text-3xl absolute top-[300px] right-[125px]'>Mukul Singh</h1>
                </div>
            <div className="icons flex text-white pt-4 gap-5 justify-center">
                <FaLinkedin size={'35'}/>
                <FaGithub size={'35'}/>
                <FaLaptopCode size={'35'}/>
            </div>
            </div>
    )
}

export default Profile
