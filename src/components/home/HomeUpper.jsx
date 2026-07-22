import React from 'react'
import { RiArrowRightUpLongFill, RiPlayFill } from '@remixicon/react'

const HomeUpper = () => {
    return (
        <div className='flex flex-col justify-between overflow-hidden  pb-10 relative min-h-screen px-8 lg:px-20 sm:px-12 pt-42 font-mono' >
            <div className='flex justify-between relative'>
                <div className='flex flex-col gap-5 pt-0'>
                    <p className='flex items-center gap-4 text-lightGold text-[0.625rem] tracking-[2px] [word-spacing:5px] uppercase'><span className='line-deco'></span>Market discovery, simplified</p>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-semibold font-display'>Markets, in <br /><span className='golditalic'>your rhythm.</span></h1>
                        <p className='text-sm sm:text-base text-[#c7c7c1] max-w-105 leading-8 font-sans'>Explore the assets shaping tomorrow with a clearer, calmer view of the market.</p>
                    </div>

                    <div className='flex flex-col items-start font-sans gap-4 sm:flex-row sm:flex-wrap'>
                        <button className='bg-gold text-black flex w-[90%]  justify-between py-3 px-3.5 tracking-[1.5px] rounded items-center hover:-translate-y-1 duration-200 text-xs 
                    sm:w-fit sm:gap-4 '>Explore markets <RiArrowRightUpLongFill size={14} /></button>
                        <button className='flex  justify-between py-3 px-3.5 tracking-[1.5px] rounded items-center w-[90%] border border-white/20 hover:-translate-y-1 duration-200 hover:bg-white/8 text-xs
                    sm:w-fit sm:gap-4'>How it works <RiPlayFill size={14} color="rgba(215,174,103,1)" /></button>
                    </div>
                </div>

                <div className='hidden md:flex flex-col gap-18  justify-end'>
                    <div className='flex gap-4'>
                        <span className='h-20 w-px bg-gold'></span>
                        <div>
                            <p className='font-mono text-[9px] tracking-[1.1px] text-[#b3b2ab]'>MARKETS COVERED</p>
                            <strong className='font-display font-semibold text-[27px] mt-1 mb-0.5 tracking-[-0.5px]'>3</strong>
                            <p className='font-mono text-[9px] tracking-[2px] text-[#b3b2ab]'>Stock, crypto & ETF</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span className='h-20 w-px bg-gold'></span>
                        <div>
                            <p className='font-mono text-[9px] tracking-[1.1px] text-[#b3b2ab]'>CURATED ASSETS</p>
                            <strong className='font-display font-semibold text-[27px] mt-1 mb-0.5 tracking-[-0.5px]'>18,000<small className='text-sm font-sans text-gold ml-0.5'>+</small></strong>
                            <p className='font-mono text-[9px] tracking-[2px] text-[#b3b2ab]'>Quality over quantity</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='flex gap-3 [word-spacing:3px] items-center text-[#b8b7b2] tracking-[1.2px] text-[0.625rem] '><span className='vertical-line-deco'></span>SCROLL TO EXPLORE</p>

            <div className='upper-glow'></div>

            <svg className="lines chart-position" viewBox="0 0 1440 690" preserveAspectRatio="none" aria-hidden="true">
                <path className="line red" d="M-20 394 C88 345 135 428 228 374 S382 419 493 306 S677 395 776 285 S935 376 1047 278 S1224 347 1460 170"></path>
                <path className="line gold" d="M-20 478 C108 386 174 512 281 431 S463 494 559 375 S719 453 838 338 S1006 403 1114 300 S1308 355 1460 244"></path>
                <path className="line gray" d="M-20 294 C65 255 121 313 213 270 S385 318 458 223 S634 291 753 170 S922 254 1014 158 S1225 219 1460 83"></path>
                <g className="chart-dots"><circle cx="753" cy="170" r="5"></circle><circle cx="1114" cy="300" r="4"></circle><circle cx="1047" cy="278" r="4"></circle></g>
            </svg>

            <div className="mountains mountain-far"></div>
            <div className="mountains mountain-mid"></div>
            <div className="mountains mountain-near"></div>
        </div>
    )
}

export default HomeUpper