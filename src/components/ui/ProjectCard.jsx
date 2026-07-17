import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='bg-slate-300'>
        <p>0{props.num}</p>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
    </div>
  )
}

export default ProjectCard