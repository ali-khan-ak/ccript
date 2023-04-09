import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import NavLogo from '../public/assets/main-image.jpg'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-cover bg-[url("../public/assets/blob-scene-haikei.svg")] '>
      
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='border-solid border-sky-500'>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#1e3d60]'> Grow your skills, define your future</span>
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
            <button class="rounded-full p-3 pl-4 pr-4 m-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400  bg-gradient-to-r from-[#064ea4] to-[#709dff] text-white">Explore Courses</button>
            <button class="rounded-full p-3 pl-4 pr-4 m-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400 bg-[#e7eaee] ">Learn More</button>
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
    </div>
    
  );
};

export default Main;