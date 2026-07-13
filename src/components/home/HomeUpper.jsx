import React from 'react'

const HomeUpper = () => {
  return (
    <div className='flex flex-col justify-between gap-4 h-screen px-5 py-20 '>
        <div>
            <p><span></span>Market discovery, simplified</p>

            <div className=''>
                <h1>Markets, in <br/> your rhythm.</h1>
                <p>Explore the assets shaping tomorrow with a clearer, calmer view of the market.</p>
            </div>

            <div className='flex flex-col items-start'>
                <button>Explore markets</button>
                <button>How it works</button>
            </div>
        </div>

        <p><span></span>SCROLL TO EXPLORE</p>
    </div>
  )
}

export default HomeUpper