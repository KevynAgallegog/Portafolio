import React from 'react';
import './work.css'
import Portafolio1 from '../../assets/portfolio-1.png';
import Portafolio2 from '../../assets/portfolio-2.png';
import Portafolio3 from '../../assets/portfolio-3.png';
import Portafolio4 from '../../assets/portfolio-4.png';
import Portafolio5 from '../../assets/portfolio-5.png';
import Portafolio6 from '../../assets/portfolio-6.png';




const works = () => {
  return (
    <section id='works'>
    <h2 className="worksTitle">My Portafolio</h2>
    <span className="worksDesc">Workshops and backend pages that I have done in the course of my studies. </span>
    <div className="worksImgs">
        <img src={Portafolio1} alt="" className="worksImg" />
        <img src={Portafolio2} alt="" className="worksImg" />
        <img src={Portafolio3} alt="" className="worksImg" />
        <img src={Portafolio4} alt="" className="worksImg" />
        <img src={Portafolio5} alt="" className="worksImg" />
        <img src={Portafolio6} alt="" className="worksImg" />
       
    </div>
    <button className='workBtn'>See More</button>
</section>

  )}



export default works