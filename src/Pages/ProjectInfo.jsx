import React from 'react'
import ProjectCard from '../components/ui/ProjectCard'

const ProjectInfo = () => {
  return (
    <div className='px-4 pt-20 pb-15 flex flex-col gap-12 relative overflow-hidden' >
        <div className='flex flex-col gap-4'>
            <p className='flex items-center gap-4 text-lightGold text-[0.625rem] tracking-[2px] [word-spacing:5px] uppercase'><span className='line-deco'></span>BEHIND MOCKSTOCK</p>
            <h1 className='text-[2.875rem] leading-12 tracking-tighter font-semibold font-display'>A calmer way to <span className='golditalic'>read the market.</span></h1>
            <p className='leading-7 text-[#bbb9b1] text-base max-w-130'>mockStock is a personal project built to strengthen my React fundamentals - component structure, state, and working with real data.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5'>
            <ProjectCard num={1} title='What it is' subtitle='A market explorer for stocks, crypto, and ETFs.'/>
            <ProjectCard num={2} title='Built with' subtitle='React, Tailwind CSS, and react-paginate for handling pagination across large datasets.'/>
            <ProjectCard num={3} title='The data' subtitle='Crypto prices come live from the CoinGecko API. Stock and ETF data is sourced from local JSON files.'/>
        </div>
        <div className='upper-glow'></div>
    </div>
  )
}

export default ProjectInfo