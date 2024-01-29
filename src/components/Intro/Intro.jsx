import React from 'react'
import './intro.css'
import profile from '../../assets/profile.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/cvImage.png'
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Kashish</span><br />Software Engineer</span>
            <Link><button className='btn'><img src={btnImg} alt="" srcset="" className='btnImg'/>Download CV</button></Link>
        </div>
        <img src={profile} alt="profile" className='bg' />
    </section>
  )
}

export default Intro