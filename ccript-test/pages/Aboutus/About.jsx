import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../.././public/assets/about_us-image.svg'
import Aboutus from '../.././public/assets/aboutus-image1.jpg'
import Learn from '../.././public/assets/learn-image.png'
import Graduate from '../.././public/assets/graduate-image.png'
import Work from '../.././public/assets/work-image.png'
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

                        <button class="rounded-full p-3 pl-4 pr-4 ml-20 cursor-pointer hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400  bg-gradient-to-r from-[#064ea4] to-[#709dff] text-white">Join Our Team</button>
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
            <div className='w-full h-screen text-center bg-[#1e3d60] flex justify-center items-center flex-col' >
                <p className='text-4xl sm:text-5xl md:text-6xl font-[Raleway] text-[#ffffff]'>Why learn with our courses?</p>
                <div className='flex justify-center items-center flex-row space-x-1 '>
                    <div className='flex flex-col justify-center items-center'>

                        <Image
                            src={Learn}
                            alt='/'
                            width='200'
                            height='200'
                            className='cursor-pointer rounded-lg mr-2.5'
                        />
                        <p className='ext-3xl sm:text-4xl text-[#ffffff]'>1. Learn</p>
                        <p className='py-4 text-[#ffffff] sm:max-w-[70%] m-auto'>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                    </div>


                    <div className='flex flex-col justify-center items-center'>

                        <Image
                            src={Graduate}
                            alt='/'
                            width='200'
                            height='200'
                            className='cursor-pointer rounded-lg mr-2.5'
                        />
                        <p className='ext-3xl sm:text-4xl text-[#ffffff]'>2. Graduate</p>
                        <p className='py-4 text-[#ffffff] sm:max-w-[70%] m-auto'>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>

                        <Image
                            src={Work}
                            alt='/'
                            width='200'
                            height='200'
                            className='cursor-pointer rounded-lg mr-2.5'
                        />
                        <p className='ext-3xl sm:text-4xl text-[#ffffff]'>3. Work</p>
                        <p className='py-4 text-[#ffffff] sm:max-w-[70%] m-auto'>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-row space-x-20'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
            <div className='w-full  text-center bg-cover bg-[url("../public/assets/blob-haikei.svg")]' >
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                    <Image
                        src={Aboutus}
                        alt='/'
                        width='600'
                        height='500'
                        className='cursor-pointer rounded-lg mr-2.5'
                    />
                    <div className='border-solid border-sky-500'>

                        <h2 className='py-4 text-gray-700'>
                            <span className='text-[#1e3d60]'> The mission behind Education platform</span>
                        </h2>

                        <p className='py-4 text-gray-600 sm:max-w-[100%] m-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra praesent felis consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et tellus. Aliquet elit senectus iaculis netus gravida.
                        </p>

                    </div>
                </div>
                <div className='max-w-[1240px] w-full  mx-auto p-2 flex justify-center items-center '>

                    <div className='border-solid border-sky-500'>

                        <h2 className='py-4 text-gray-700'>
                            <span className='text-[#1e3d60]'> The story of our founders</span>
                        </h2>

                        <p className='py-4 mr-4 text-gray-600 sm:max-w-[100%] '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra praesent felis consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et tellus. Aliquet elit senectus iaculis netus gravida.
                        </p>

                    </div>
                    <Image
                        src={Aboutus}
                        alt='/'
                        width='600'
                        height='500'
                        className='cursor-pointer rounded-lg ml-2.5'
                    />
                </div>
            </div>
        </div>

    );
};

export default About;