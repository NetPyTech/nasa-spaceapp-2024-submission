import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CSS/home.css';
import { useNavigate } from 'react-router-dom';
import poster from './Files/home/chapters/1.png';
import poster2 from './Files/home/chapters/2.png';
import AirQualityCard from './airQualityCard';
import 'swiper/css';
import 'swiper/css/effect-cards';

import NavBar from './nav';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

   const func = () => {

   }

    const redirectChapter1 = () => {
      navigate("/chapter-1");
    }
    const redirectChapter2 = () => {
      navigate("/chapter-2");
    }

    return (
        <>
        <NavBar/>
        <section className='section-1'>
  
        <AirQualityCard />
        </section>


      {/* ========= Section 2 Chapter Cards ========================= */}
        <section className='section-2'>
          <h1 className='header'>
            Chapters
          </h1>
          
          <div className="chapter-card chap-card-1" onClick={redirectChapter1}>
            <img src={poster} alt="Image 1" className="card-image" />
            <div className="card-content">
              <h2 className='title'>Chapter 1</h2>
              <p className='description'>Description for chapter 1 goes here.
              </p>
            </div>
          </div>

          <div className="chapter-card chap-card-2" onClick={redirectChapter2}>
            <img src={poster2} alt="Image 1" className="card-image" />
            <div className="card-content">
              <h2 className='title'>Chapter 2</h2>
              <p className='description'>Description for Chapter 2 goes here.
              </p>
            </div>
          </div>
<a href='https://www.carbonfootprint.com/integrate.html'>
          <div className="chapter-card chap-card-1" >
            <img src={poster2} alt="Image 1" className="card-image" />
            <div className="card-content">
              <h2 className='title'>Carbon Foot Print Calculator</h2>
              <p className='description'>
              </p>
            </div>
          </div>
          </a>
          
        </section>

        
        {/* ========= Section 3 Footer ========================= */}

        <Footer/>
        </>
    );
};

export default Home;
