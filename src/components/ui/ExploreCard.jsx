import React from 'react'

const ExploreCard = (props) => {
  return (
    <div className='bg-amber-200'>
       <div>0{props.cardnum}</div>

       <div>
        <p>{props.subtitle}</p>
        <p>{props.asset}</p>
        <p>view {props.view}</p>
       </div>
    </div>
  )
}

export default ExploreCard