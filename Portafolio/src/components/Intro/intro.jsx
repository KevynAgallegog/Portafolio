import React from 'react';
import './intro.css';
import ImageK from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hola,</span>
            <span className="introText">I'M <span className="introName">Kevyn</span><br />Web site Designer</span>
        </div>
        <p className="introPara">I am a skilled web designer </p>
        <Link><button className="btn"><img src={btnImg} alt="" />Hire Me</button></Link>
        <img src={ImageK} alt="" />
    </section>
  )
}

export default intro