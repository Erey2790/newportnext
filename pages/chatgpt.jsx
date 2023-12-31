import Image from 'next/image'
import React from 'react'
import chatgpt1 from '../public/assets/nextjschatgpt.PNG'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const chatgpt = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
        <Image className='absolute z-1' fill style={{objectFit:"cover"}} src={chatgpt1} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ChatGPT Clone</h2>
          <h3>NextJs / Tailwind / Firebase / Typescript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This app was built using NextJS and is deployed by Vercel. I used Firebase to host the app. This is my first expirience using TypeScript. Users can create an account using Google Auth and can sign in and sign out to their account. The user can now use the prompt to ask questions. I used the OpenAI API to send and receive data. The app is stylized to resemble the orignal ChatGPT using Tailwind.  </p>
          <a href='https://chatgpt-messenger-mu-sage.vercel.app/'><button className='px-8  py-2 mt-4 mr-8'>Demo</button></a>
          <a href='https://github.com/Erey2790/ChatGPT-Messenger'><button className='px-8 py-2 mt-4'>Code</button></a>
        </div>
        {/* box */}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NextJs</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TypeScript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>OpenAI</p>
            </div>
          </div>
        </div>
        {/* back */}
        <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default chatgpt