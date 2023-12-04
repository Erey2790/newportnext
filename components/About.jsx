import Image from 'next/image'
import React from 'react'
import codingImage from '../public/assets/coding_photo.avif'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>   I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</p>
                <p className='py-2 text-gray-600'>I started web development in 2020 when my local university started a coding bootcamp. Thanks to the bootcamp, I was able to grow as a full stack developer and learn new technologies. I'm thankful for the experience because I got to develop projects in groups with my classmates. I spend most of my time creating new projects to stay fresh and up to date with the current techs.  </p>
                <a href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p></a>
            </div>
            <div className='w-full h-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                <Image alt='coding image' className="rounded-xl" width={2000} height={2000} src={codingImage}/>
            </div>
        </div>
    </div>
  )
}

export default About