import React from 'react'
import { Link } from 'react-router-dom'

const ExploreCard = (props) => {
  return (
    <Link to={`/${props.asset.toLowerCase()}`} className={`${props.className || ""} block relative`} >
      <div className={` relative md:h-full min-h-55 border border-white/11 bg-cover bg-center   bg-no-repeat overflow-hidden transition-all duration-250 hover:-translate-y-1.25 hover:border-gold/55 hover:shadow-[0_16px_30px_rgba(0,0,0,0.23)]  `}
        style={{ backgroundImage: `url(${props.image})` }}>
        <div className='absolute right-5 top-4.25 text-white/32 font-mono text-[10px] tracking-[1px]'>{props.cardnum}</div>

        <div className='absolute left-6.5 bottom-6 flex flex-col gap-2 '>
          <p className='mb-1.25 font-mono text-[10px] uppercase tracking-[1.4px] text-lightGold '>{props.subtitle}</p>
          <p className='font-display font-semibold text-[42px] leading-none tracking-[-1.5px] mb-4'>{props.asset}</p>
          <p className='text-xs text-[#d2d0c9]'>view {props.view}</p>
        </div>
      </div>
    </Link>
  )
}

export default ExploreCard