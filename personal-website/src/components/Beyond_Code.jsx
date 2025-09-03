import React from 'react'
import '../styles/Beyond_Code.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import artwork1 from './assets/artwork/artwork1.png'
import artwork2 from './assets/artwork/artwork2.png'
import artwork3 from './assets/artwork/artwork3.png'
import artwork4 from './assets/artwork/artwork4.png'
import artwork5 from './assets/artwork/artwork5.png'
import artwork6 from './assets/artwork/artwork6.png'
import artwork7 from './assets/artwork/artwork7.png'

const Beyond_Code = () => {
    const settings={
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots:dots=>(
        <div ><ul className='dots'>{dots}</ul></div>
    )
    }
  return (
    <div id="artwork"  className="artwork">
        <div className="artwork_tag_line">
            <div className="artwork_tag">Beyond Code</div>
        </div>
        <div className="artwork_content">
            <div className="artwork_content_intro">Ok I promised you i am going to show you some of my artwork and    <span className='bigger'>HERE IT ISSSS :D </span></div>
            <Slider className='slider-container artwork_content_slider' {...settings}>
 <div>
                    <img src={artwork1} alt="artwork1" />
                </div>
                <div>
                    <img src={artwork2} alt="artwork2" />

                </div>
                <div>
                    <img src={artwork3} alt="artwork3" />
                </div>
                <div>
                    <img src={artwork4} alt="artwork4" />
                </div>
                <div>
                    <img src={artwork5} alt="artwork5" />
                </div>
                <div>
                    <img src={artwork6} alt="artwork6" />
                </div>
                <div>
                    <img src={artwork7} alt="artwork7" />
                </div>
            </Slider>
        </div>
      
    </div>
  )
}

export default Beyond_Code
