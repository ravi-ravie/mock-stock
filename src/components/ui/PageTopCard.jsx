import React from 'react'

const PageTopCard = (props) => {
  return (
    <div className='bg-slate-400'>
        <p><span></span>{props.label}</p>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
  )
}

export default PageTopCard