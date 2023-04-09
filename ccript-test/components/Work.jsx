import Image from 'next/image';
import React from 'react';
import Learn from '../public/assets/learn-image.png'
import Graduate from '../public/assets/graduate-image.png'
import WorkImage from '../public/assets/work-image.png'
const Work = () => {
    return (
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

    );
};

export default Work;