import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import { AiOutlineMail } from 'react-icons/ai';
import NavLogo from '../../public/assets/main-image.jpg'
import Learn from '../../public/assets/learn-image.png'
import Graduate from '../../public/assets/graduate-image.png'
import WorkImage from '../../public/assets/work-image.png'
import {auth} from '../../firebase/firebaseApp';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

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
    <><Navbar /><div id='home' className='w-full h-screen text-center bg-cover bg-[url("../public/assets/blob-scene-haikei.svg")] '>

          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div className='border-solid border-sky-500'>
                  <h1 className='py-4 text-gray-700'>
                      <span className='text-[#1e3d60]'> Grow your skills, define your future</span>
                  </h1>

                  <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                      Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.
                  </p>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  </div>
              </div>
              <div>
                  <Image
                      src={NavLogo}
                      alt='/'
                      width='700'
                      height='500'
                      className='cursor-pointer rounded-lg' />
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
      </>
    
  );
};

export default Main;