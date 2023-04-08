import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../.././public/assets/about_us-image.svg'
const About = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-cover bg-[url("../public/assets/blob-scene-haikei.svg")] '>
      
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='border-solid border-sky-500'>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#1e3d60]'> The big mission behind Educationic</span>
          </h1>
          
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {/* <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            > */}
            <button class="rounded-full p-3 pl-4 pr-4 ml-20 cursor-pointer hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400  bg-gradient-to-r from-[#064ea4] to-[#709dff] text-white">Join Our Team</button>

            {/* </a> */}
          </div>
        </div>
        <div>
        <Image
              src={NavLogo}
              alt='/'
              width='700'
              height='500'
              className='cursor-pointer rounded-lg'
            />
        </div>
      </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <Image
              src={NavLogo}
              alt='/'
              width='700'
              height='500'
              className='cursor-pointer rounded-lg'
            />
        <div className='border-solid border-sky-500'>
        
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#1e3d60]'> The mission behind Education platform</span>
          </h1>
          
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra praesent felis consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et tellus. Aliquet elit senectus iaculis netus gravida.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          </div>
        </div>
        <div>
       
        </div>
      </div>
    </div>
    
  );
};

export default About;