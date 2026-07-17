import React from 'react'

const HomeUpper = () => {
  return (
    <div className='flex flex-col justify-between gap-4 h-screen  main-padding'>
        <div className=''>
            <p className='flex items-center gap-4'><span className='line-deco'></span>Market discovery, simplified</p>

            <div className=''>
                <h1>Markets, in <br/> your rhythm.</h1>
                <p>Explore the assets shaping tomorrow with a clearer, calmer view of the market.</p>
            </div>x

            <div className='flex flex-col items-start'>
                <button>Explore markets</button>
                <button>How it works</button>
            </div>
        </div>

        <p><span></span>SCROLL TO EXPLORE</p>
        <div className='upper-glow'></div>
    </div>
  )
}

export default HomeUpper