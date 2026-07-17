import React from 'react'
import {RiArrowRightUpLongFill, RiPlayFill} from '@remixicon/react'

const HomeUpper = () => {
  return (
    <div className='flex flex-col  gap-56 pb-10   main-padding font-mono'>
        <div className='flex flex-col gap-9 pt-12'>
            <p className='flex items-center gap-4 text-lightGold text-sm tracking-[2px] [word-spacing:5px] uppercase'><span className='line-deco'></span>Market discovery, simplified</p>

            <div className='flex flex-col gap-6'>
                <h1 className='text-7xl font-semibold font-display'>Markets, in <br/><span className='text-lightGold italic'>your rhythm.</span></h1>
                <p className='text-xl text-[#c7c7c1] leading-8 font-sans'>Explore the assets shaping tomorrow with a clearer,<br/> calmer view of the market.</p>
            </div>

            <div className='flex flex-col items-start font-sans gap-4'>
                <button className='bg-gold text-black flex w-4/5 justify-between py-4 px-6 tracking-[1.5px] rounded items-center hover:-translate-y-1 duration-200 '>Explore markets <RiArrowRightUpLongFill /></button>
                <button className='flex w-4/5 justify-between py-4 px-6 tracking-[1.5px] rounded items-center border border-white/20 hover:-translate-y-1 duration-200 hover:bg-white/8'>How it works <RiPlayFill size={23} color="rgba(215,174,103,1)" /></button>
            </div>
        </div>

        <p className='flex gap-4 items-center text-[#b8b7b2] '><span className='vertical-line-deco'></span>SCROLL TO EXPLORE</p>
        <div className='upper-glow'></div>


        <svg class="lines chart-position" viewBox="0 0 1440 690" preserveAspectRatio="none" aria-hidden="true">
            <path class="line red" d="M-20 394 C88 345 135 428 228 374 S382 419 493 306 S677 395 776 285 S935 376 1047 278 S1224 347 1460 170"></path>
            <path class="line gold" d="M-20 478 C108 386 174 512 281 431 S463 494 559 375 S719 453 838 338 S1006 403 1114 300 S1308 355 1460 244"></path>
            <path class="line gray" d="M-20 294 C65 255 121 313 213 270 S385 318 458 223 S634 291 753 170 S922 254 1014 158 S1225 219 1460 83"></path>
            <g class="chart-dots"><circle cx="753" cy="170" r="5"></circle><circle cx="1114" cy="300" r="4"></circle><circle cx="1047" cy="278" r="4"></circle></g>
        </svg>

        <div class="mountains mountain-far"></div>
        <div class="mountains mountain-mid"></div>
        <div class="mountains mountain-near"></div>
    </div>
  )
}

export default HomeUpper