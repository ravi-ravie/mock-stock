import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='border-t border-gold pt-4.5 px-4.75 pb-5.25 bg-[#1f1f1f]/60 '>
        <p className='font-mono text-[10px] text-gold'>0{props.num}</p>
        <h2 className='font-display font-semibold text-2xl mt-5.5 mb-2.25 tracking-[-0.8px]'>{props.title}</h2>
        <p className='text-[13px] text-[#999891] leading-[1.6] m-0'>{props.subtitle}</p>
    </div>
  )
}

export default ProjectCard