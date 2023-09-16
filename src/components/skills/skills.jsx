import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">passionate student to learn and have more web pages to design and have some creativity to make them, dream of having a big company that will help a lot to the future not only of me but of a country. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="IUDesign" className="skillBarImg" />
                <div className="skillBarTetxt">
                    <h2>Blueasy</h2>
                    <p>this is my first page in HTML and CSS </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarTetxt">
                    <h2>Bleux</h2>
                    <p>This page is one using flexbox</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarTetxt">
                    <h2>AppTastico</h2>
                    <p>this page is already using css grid</p>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default skills