import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import { AiOutlineMail } from 'react-icons/ai';
import Mainimage from '../../public/assets/main-image.jpg'
import Learn from '../../public/assets/learn-image.png'
import Graduate from '../../public/assets/graduate-image.png'
import WorkImage from '../../public/assets/work-image.png'
import { auth } from '../../firebase/firebaseApp';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import graphic from '../../public/assets/graphic-design.jpg';
import WebDesign from '../../public/assets/Web-Design.jpg'
import IdentityDesign from '../../public/assets/IdentityDesign.jpg'
import LogoDesign from '../../public/assets/LogoDesign.jpg'
import CoursesItem from './CousesItem';
import library from '../../public/assets/library.jpg'
const Main = () => {
    // const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        router.push("/");
        return <div>Please sign in to continue</div>;
    }

    return (
        <>
            {/* Navigation Bar */}
            <Navbar />
            {/* Main Body */}
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
                            <button className='shadow-xl p-2 shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#1e3d60] to-[#709dff] text-white'>Explore Courses</button>
                            <button className='shadow-xl p-2 shadow-gray-400 rounded-xl uppercase bg-[#e7eaee] text-black'>Learn More</button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={Mainimage}
                            alt='/'
                            width='700'
                            height='500'
                            className='cursor-pointer rounded-lg' />
                    </div>
                </div>
            </div>
            <div id='home' className='w-full h-screen text-center bg-cover  '>

                <div className='w-full h-screen text-center  flex justify-center items-center flex-col' >
                    <div id='projects' className='w-full'>
                        <div className='max-w-[1240px] mx-auto px-2 py-16'>
                            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                                Courses
                            </p>
                            <h2 className='py-4'>Courses We Offer</h2>
                            <div className='grid md:grid-cols-2 gap-8'>
                                <CoursesItem
                                    title='Graphic Design 101'
                                    backgroundImg={graphic}
                                    projectUrl='/#'
                                    tech='Graphic Design 101'
                                />
                                <CoursesItem
                                    title='Web Design and Development'
                                    backgroundImg={WebDesign}
                                    projectUrl='/#'
                                    tech='Web Design and Development'

                                />
                                <CoursesItem
                                    title='Brand and Identity Design'
                                    backgroundImg={IdentityDesign}
                                    projectUrl='/#'
                                    tech='Brand and Identity Design'

                                />
                                <CoursesItem
                                    title='Advance Logo Design'
                                    backgroundImg={LogoDesign}
                                    projectUrl='/#'
                                    tech='Advance Logo Design'

                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='home' className='w-full h-screen text-center bg-cover bg-[url("../public/assets/blob-scene-haikei.svg")] '>

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
                                src={WorkImage}
                                alt='/'
                                width='200'
                                height='200'
                                className='cursor-pointer rounded-lg mr-2.5'
                            />
                            <p className='ext-3xl sm:text-4xl text-[#ffffff]'>3. Work</p>
                            <p className='py-4 text-[#ffffff] sm:max-w-[70%] m-auto'>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id='home' className='w-full h-screen text-center bg-cover'>

                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div className='border-solid border-sky-500'>
                        <h1 className='py-4 text-gray-700'>
                            <span className='text-[#1e3d60]'> Courses taught by industry leaders around the world</span>
                        </h1>

                        <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <div className='flex items-center justify-between flex-col max-w-[330px] m-auto py-4'>
                            <button className='shadow-xl p-3 shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#1e3d60] to-[#709dff] text-white'>Explore Courses</button>
                            <button className='shadow-xl p-3 px-7 m-5 shadow-gray-400 rounded-xl uppercase bg-[#e7eaee] text-black'>Learn More</button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={library}
                            alt='/'
                            width='700'
                            height='500'
                            className='cursor-pointer rounded-lg' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Main;