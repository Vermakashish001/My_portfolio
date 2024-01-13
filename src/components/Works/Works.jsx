import React from 'react'
import './works.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const workImg = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
]

const Works = () => {
  return (
    <section id='works'>
        <h2 className="works-title">My Works</h2>
        <span className="workDesc">I do my best to make my works look good and clean. Also I try to make them as responsive as possible.</span>
        <div className="workImgs">
            {workImg.map((item) => (
                <img src={item.img} alt="" key={item.id} className='worksImg'/>
            ))}
        </div>
        <button className='workBtn'>Show More</button>
    </section>
  )
}

export default Works