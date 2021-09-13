import React from 'react';
import { Button } from '../Button';
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer-container'>
            <section 
            className="footer-subscription">
                <p className="footer-subscrption-heading">
                    Join Village newsletter to stay updated on the fun near you!
                </p>
                <p className="footer-subscription-text"> 
                You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" 
                        placeholder="Your email" 
                        className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>              
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/about'>What is Village?</Link>
                        <Link to='/about'>FAQ</Link>
                        <Link to='/about'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
