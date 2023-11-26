import Image from 'next/image'
import React from 'react'
import codingImage from '../public/assets/coding_photo.avif'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>insert paragraph about you do this later. blah blah blah blah blah alsdj lakj alsdfj  lsdjlkj </p>
                <p className='py-2 text-gray-600'>more description about u and your skills rt paragraph about you do this later. blah blah blah blah gkjggjhg  gkjg  jghjghlkhk kjg jgjg jg g kjg jhg jg jg kjg kjhgkblah alsdj lakj alsdfj  lsdjlkj </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                <Image className="rounded-xl" width={2000} height={2000} src={codingImage}/>
            </div>
        </div>
    </div>
  )
}

export default About