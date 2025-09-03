import React from 'react'
import "../styles/Project.css"
import biquadris from './assets/biquadris.png'
import calc from './assets/MERN_Calc.png'
import unity_game from './assets/unity_game.png'
const Project = () => {
  return (
    <div id="project"  className='project'>
        <div className="project_tag_line">
            <div className="project_tag">Project</div>
        </div>
        <div className="project_contents">
            <div className="project_content">
                <div className="project_content_img">
                    <img src={biquadris} alt="biquadris logo" />
                </div>
                <div className="project_content_desc">
                    <div className="project_content_desc_title">Biquadris</div>
                    <br />
                    <div className="project_content_desc_desc">As part of a three-person team, I developed Biquadris, a two-player Tetris-inspired game that features block manipulation, adjustable difficulty levels, and unique special functions. To ensure a scalable and maintainable codebase, I implemented Observer, Decorator, and Factory design patterns, leveraging object-oriented principles in C++. I also integrated the XQuartz library to render dynamic graphics, enhancing both gameplay interaction and the overall visual experience.
                    </div>
                    <br />
                    <div className="project_content_desc_skills">
                        <span className='skill purple'>C++</span>
                    </div>
                </div>
            </div>
            <div className="project_content">
                <div className="project_content_img">
                    <img src={calc} alt="MERN Calculator logo" />
                </div>
                <div className="project_content_desc">
                    <div className="project_content_desc_title"> MERN Calculator</div>
                    <br />
                    <div className="project_content_desc_desc">I designed and built a full-stack calculator web application that records and manages calculation data using a MongoDB database. The backend, powered by Node.js and Express.js, handled database interactions and supported CRUD operations, which I tested and refined through Postman. On the frontend, I developed a React.js interface styled with CSS and designed in Figma, ensuring a clean, user-friendly experience that integrated seamlessly with the backend for real-time updates.
                </div>
                <br />
                    <div className="project_content_desc_skills"><span className='skill yellow'>MongoDB</span> <span className='skill green'>Express.js</span> <span className='skill orange'>React.js</span> <span className='skill brown'>Node.js</span> <span className='skill gray'>CSS</span> <span className='skill crimson'>Figma</span></div>
                </div>
            </div>
            <div className="project_content">
                <div className="project_content_img">
                    <img src={unity_game} alt="Go! Mushroom logo" />
                </div>
                <div className="project_content_desc">
                    <div className="project_content_desc_title">Go! Mushroom</div>
                    <br />
                    <div className="project_content_desc_desc"> I created Go! Mushroom, a 3D single-player Unity game developed in C#, where players race against the clock to collect 10 mushrooms within two minutes. To build the immersive environment, I utilized imported assets to construct a 3D background and employed Unity’s Animator Controller to synchronize character movements with keyboard inputs. This project combined technical scripting with creative design, resulting in an engaging, interactive gameplay experience.</div>
                    <br />
                    <div className="project_content_desc_skills"><span className='skill orange'>Unity</span> <span className='skill brown'>C#</span></div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Project
