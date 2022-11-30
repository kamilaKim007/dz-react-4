import React from 'react'
import Aboutimg from '../../../assets/about/about.png'

const About = () => {
  return (
    <about className='about'>
        <div className="container">
            <div className="about__desk">
                <div className="about__text">
                    <h2 className='about__text-title'>О нас</h2>
                    <p className='about__text-p'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem 
                    ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                     ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                </div>
                <div className="about__img">
                    <img src={Aboutimg} alt="" />
                </div>
            </div>
        </div>
    </about>
  )
}

export default About