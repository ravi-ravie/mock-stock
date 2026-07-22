import React from 'react'
import { RiArrowRightUpLongFill } from "@remixicon/react";

const AboutMe = () => {
  return (
    <div className='px-4 pt-20 pb-15 flex flex-col gap-10 relative overflow-hidden'>
        <div className='flex flex-col gap-4'>
            <p className='flex items-center gap-4 text-lightGold text-[0.625rem] tracking-[2px] [word-spacing:5px] uppercase'><span className='line-deco'></span>A little about me</p>
            <h1 className='text-[2.875rem] leading-12 tracking-tighter font-semibold font-display'>Made with <br/><span className='golditalic'>curiosity.</span></h1>
        </div>

        <div className='flex flex-col gap-4'>
            <p className='text-base leading-[1.7] text-[#b8b7b0]'>I'm Ravi — I love learning something new through building. I enjoy working on food UI concepts and real-world projects that push me to think beyond just code. Always open to connect.</p>
            <p className='text-base leading-[1.7] text-[#b8b7b0]'>mockStock started as a way to get better at React — playing with real data, layout, and  small details.</p>
            <div className='flex gap-4.75 mt-7.75'> 

                <a className='border-b border-[#8d7b57] pb-1.5  text-[#dedad0] text-xs hover:text-lightGold transition-colors duration-200 flex items-center gap-3' href="https://x.com/ravii_ravie" target="_blank">X (Twiiter) <RiArrowRightUpLongFill  size={12} className='text-gold' /></a>

                <a className='border-b border-[#8d7b57] pb-1.5 text-[#dedad0] text-xs hover:text-lightGold transition-colors duration-200 flex items-center gap-3' href="https://www.linkedin.com/in/ravindra-singh-index1/" target="_blank">LinkedIn <RiArrowRightUpLongFill  size={12} className='text-gold' /></a>

                <a className='border-b border-[#8d7b57] pb-1.5 text-[#dedad0] text-xs hover:text-lightGold transition-colors duration-200 flex items-center gap-3' href="https://github.com/ravi-ravie" target="_blank">GitHub <RiArrowRightUpLongFill  size={12} className='text-gold' /></a>
            </div>
        </div>
        <div className='upper-glow'></div>
    </div>
  )
}

export default AboutMe