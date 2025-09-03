import React from 'react'
import '../styles/About.css'
import about_alia from './assets/about_alia.png'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about_tag">About</div>
      <div className="about_content">
        <div className="about_content_pic">
            <img src={about_alia} alt="a smiling alia" />
        </div>
        <div className="about_content_des">
            <div>
                Hello, I am Alia and I am 2nd year cs student in university of waterloo. I am really into web development and machine learning because they can bring so many of my small ideas into reality!
            </div>
            <br/>
            <div>
                The Tecnology I know include but not limited to <span className='skill purple'>React</span>, <span className='skill yellow'>Express</span>, <span className='skill green'>MongoDB</span>, <span className='skill orange'>Python</span>, <span className='skill brown'>C</span>, <span className='skill gray'>C++</span>, and <span className='skill crimson'>Unity</span>.
            </div>
             <br />
            <div>
                Other than that, I also really like hiking and painting. You can def see some of my artwork later on! Nice to meet you!
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
