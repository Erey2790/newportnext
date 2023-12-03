import React from 'react'
import Image from 'next/image'
import newtaskmasterpro1 from '../public/assets/newtaskmasterpro.PNG'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const taskmasterpro = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
      <Image className='absolute z-1' fill style={{objectFit:"contain"}} src={newtaskmasterpro1} alt='/' />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>TaskMaster Pro</h2>
        <h3> JavaScript / CSS / HTML</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>This app was built using Javascript and is deployed by Github Pages. Users can create a task, mark it as 'in progress', 'in review', and 'done'. If the user wants to edit the task, they can by dragging and dropping. This is another project that helped me develop my javascript fundamentals. The app is styled with vanilla CSS.  </p>
        <a href='https://erey2790.github.io/taskmaster-pro/'>
        <button className='px-8  py-2 mt-4 mr-8'>Demo</button>
        </a>
        <a href='https://github.com/Erey2790/taskmaster-pro'>
        <button className='px-8 py-2 mt-4'>Code</button>
        </a>
      </div>
      {/* box */}
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Github Pages</p>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
            
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

export default taskmasterpro