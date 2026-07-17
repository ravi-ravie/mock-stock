import React from 'react'
import ProjectCard from '../components/ui/ProjectCard'

const ProjectInfo = () => {
  return (
    <div className='main-padding'>
        <div>
            <p>BEHIND MOCKSTOCK</p>
            <h1>A calmer way to <br/> read the market.</h1>
            <p>mockStock is a concept platform that turns a sea of market data into an inviting place to discover what matters.</p>
        </div>

        <div className='flex flex-col gap-5'>
            <ProjectCard num={1} title='What it is' subtitle='mA focused market explorer for stocks, crypto, and ETFs.'/>
            <ProjectCard num={2} title='Built with' subtitle='Modern web technologies, purposeful interaction, and a human point of view.'/>
            <ProjectCard num={3} title='Data, someday' subtitle='A live market-data layer can bring this considered interface to life.'/>
        </div>
    </div>
  )
}

export default ProjectInfo