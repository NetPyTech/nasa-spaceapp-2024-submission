import React from 'react';
import './CSS/Footer.css'; // Move footer-specific CSS here


{/* ========= Section 3 Footer ========================= */}
const Footer = () => {
    return (
<footer className="footer">
<div className="footer-container">
  <div className="footer-section about">
    <h2>About Us</h2>
    <p>We are dedicated to addressing climate change through technology and innovation.</p>
  </div>
  <div className="footer-section contact">
    <h2>Contact Details</h2>
    <p>Email: code8sky@gmail.com</p>
    <p>Phone: +91 8770975421</p>
  </div>
  
  <div className="footer-section references">
    <h2>References</h2>
    <p>View our references <a href="https://www.nasa.gov/">here</a>.</p>
    ourworldindata.com ,
statista.com
globalforestwatch.org
  </div>
  <div className="footer-section apis">
    <h2>APIs Used</h2>
    <p>Explore the APIs we used <a href="https://api.waqi.info/feed/${cityName}/?token=69ee0ffbf0fa061fc20e0198fca3354547141a55">here</a>.</p>
  </div>
  <div className="footer-section tech-stack">
    <h2>Tech Stack</h2>
    <p>React, Rag, Lamma, LLM, Django, FastAPI, DashToons.</p>
  </div>
  <div className="footer-section features">
    <h2>Features</h2>
    <p>Interactive visualizations, data analysis, and user engagement.</p>
  </div>
  <div className="footer-section hackathons">
    <h2>Hackathons</h2>
    <p>Participated in various hackathons to innovate solutions.</p>
  </div>
</div>
<div className="footer-bottom">
  <p>&copy; {new Date().getFullYear()} CH4. All rights reserved.</p>
</div>
</footer>
    );
};
export default Footer;