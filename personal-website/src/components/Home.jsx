import React from 'react'
import '../styles/Home.css'
import 'animate.css';

const Home = () => {
  return (
    <div id="home" className='home'>
      <div className="animate__animated animate__lightSpeedInRight home_l1">hello, I am</div>
      <div className="animate__animated animate__lightSpeedInRight home_l2">Alia Cai</div>
      <div className="animate__animated animate__lightSpeedInRight home_l3"><a href='https://github.com/AliaCai'  className='home_l3_connect'>Github</a> | <a   href='https://www.linkedin.com/in/alia-cai-9795752a5' className='home_l3_connect'>LinkedIn</a> | <a href="https://docs.google.com/presentation/d/1LWqkX8LY3o4uRYDpwCZwxX-3dxbCMEORZB8kH3MruXY/edit?usp=sharing" className='home_l3_connect'>Resume</a></div>
    </div>
  )
}

export default Home
