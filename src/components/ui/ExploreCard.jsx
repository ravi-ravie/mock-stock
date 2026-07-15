import React from 'react'
import { Link } from 'react-router-dom'

const ExploreCard = (props) => {
  return (
    <Link to={`/${props.asset.toLowerCase()}`}>
      <div className='bg-amber-200'>
        <div>0{props.cardnum}</div>

        <div>
          <p>{props.subtitle}</p>
          <p>{props.asset}</p>
          <p>view {props.view}</p>
        </div>
      </div>
    </Link>
  )
}

export default ExploreCard