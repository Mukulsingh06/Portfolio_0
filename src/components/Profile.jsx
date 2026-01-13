import React from 'react'
import profile from '../assets/profile.jpg'
import { FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'


const Profile = ({onHover,onLeave}) => {
    return (
            <div className='profile_pic ml-auto m-10 p-2 flex flex-col w-fit text-center' onMouseEnter={onHover} onMouseLeave={onLeave}>
                <img src={profile} className='w-auto h-100 border rounded-full grayscale-100 hover:grayscale-0' />
                <h1 className='text-white text-3xl pt-4'>Mukul Singh</h1>
            <div className="icons flex text-white pt-4 gap-5 justify-center">
                <FaLinkedin size={'35'}/>
                <FaGithub size={'35'}/>
                <FaLaptopCode size={'35'}/>
            </div>
            </div>
    )
}

export default Profile
