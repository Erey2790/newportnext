import React from 'react'
import Image from 'next/image'
import eventsapp1 from '../public/assets/eventsapp.PNG'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const eventsapp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
        <Image className='absolute z-1' fill style={{objectFit:"cover"}} src={eventsapp1} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Events App</h2>
          <h3>NextJs / Sass / Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This app was built using NextJS and is deployed by Vercel. It was my first projects using NextJS(13). Users can browse the app and search for activites in their local cities. NextJs Fast Refresh is amazing and you can notice the difference. It was also my first time using Sass to style the app. I had a really positive experience using Sass.  </p>
          <button className='px-8  py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        {/* box */}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NextJs</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Sass</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Vercel</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
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

export default eventsapp