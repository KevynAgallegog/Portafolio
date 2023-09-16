import React from 'react'
import './contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';


const contact = () => {
  return (
    <section className="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Give yourself the opportunity to contact me</span>
            <form className='contactForm'>
                <input type="text"className='name' placeholder='name'/>
                <input type="email" className='email' placeholder='email' />
                <textarea className='msg' name="message"  rows="5"></textarea>
                <button type='submit'  className="submitBtn" >Submit</button>
                <div className="links">
                   <a href="https://www.facebook.com/kevynandres.gallegoguerra"> <img  src={Facebook} alt="Facebook" className="link" /></a>
                    <img src={Twitter} alt="twitter" className="link" />
                    <img src={Youtube} alt="Youtube" className="link" />
                   <a href="https://instagram.com/kevin_galle_?igshid=MzNlNGNkZWQ4Mg=="><img src={Instagram} alt="Instagram" className="link" /></a> 
                </div>
            </form>
        </div>
    </section>
  )
}

export default contact