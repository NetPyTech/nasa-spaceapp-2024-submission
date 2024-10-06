import React from 'react';
import '../CSS/chapters/chapter_1.css'; // Correct path to the CSS file
import chapter1_bg from '../Files/Chapters/chapter1_bg.jpg';

import chapter1_image1 from '../Files/Chapters/chatpter_1/1.png';
import chapter1_image2 from '../Files/Chapters/chatpter_1/2.png';
import chapter1_image3 from '../Files/Chapters/chatpter_1/3.png';
import chapter1_image4 from '../Files/Chapters/chatpter_1/4.png';
import chapter1_image5 from '../Files/Chapters/chatpter_1/5.png';
import chapter1_image6 from '../Files/Chapters/chatpter_1/6.png';
import chapter1_image7 from '../Files/Chapters/chatpter_1/7.png';
import chapter1_image8 from '../Files/Chapters/chatpter_1/8.png';
import chapter1_image9 from '../Files/Chapters/chatpter_1/9.png';
import chapter1_image10 from '../Files/Chapters/chatpter_1/forest.png'; // forest.png at 10th position
import chapter1_image11 from '../Files/Chapters/chatpter_1/10.png'; // Correct image 10
import chapter1_image12 from '../Files/Chapters/chatpter_1/11.png'; // Renamed the second image to avoid conflict
import chapter1_image13 from '../Files/Chapters/chatpter_1/12.png';
import chapter1_image14 from '../Files/Chapters/chatpter_1/forest1.png';
import chapter1_image15 from '../Files/Chapters/chatpter_1/globaldeforstation.png';

const Chapter1 = () => {
  return (
    <>
      {/* Section with background image */}
      <section className="chapter-1-section-1">
        <div className="bg-image">
          <img src={chapter1_bg} alt="Background Image" />
        </div>
      </section>

      {/* Section with 2 images per row */}
      <section className="chapter-1-section-2">
        <h1 className="header">Chapter 1</h1>
        <div className="image-grid">
          <div className="image-item">
            <img src={chapter1_image1} alt="Chapter Image 1" />
          </div>
          <div className="image-item">
            <img src={chapter1_image2} alt="Chapter Image 2" />
          </div>
          <div className="image-item">
            <img src={chapter1_image3} alt="Chapter Image 3" />
          </div>
          <div className="image-item">
            <img src={chapter1_image4} alt="Chapter Image 4" />
          </div>
          <div className="image-item">
            <img src={chapter1_image5} alt="Chapter Image 5" />
          </div>
          <div className="image-item">
            <img src={chapter1_image6} alt="Chapter Image 6" />
          </div>
          <div className="image-item">
            <img src={chapter1_image7} alt="Chapter Image 7" />
          </div>
          
          {/* Embedded graph iframe */}
          <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/annual-temperature-anomalies?time=1975&tab=map"
              loading="lazy"
              style={{ width: '100%', height: '500px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Annual Temperature Anomalies"
            ></iframe>
          </div>

          {/* Second iframe */}
          <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/extinct-species-since-1500?tab=chart"
              loading="lazy"
              style={{ width: '100%', height: '500px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Extinct Species"
            ></iframe>
          </div>

          {/* Shifted remaining images */}
          <div className="image-item">
            <img src={chapter1_image8} alt="Chapter Image 8" />
          </div>
          <div className="image-item">
            <img src={chapter1_image9} alt="Chapter Image 9" />
          </div>

          {/* Forest.png in the 10th position */}
          <div className="image-item">
            <img src={chapter1_image10} alt="Forest Image" />
          </div>
          <div className="image-item">
            <img src={chapter1_image14} alt="Forest Image" />
          </div>


          {/* 10.png and 11.png shifted after forest.png */}
          <div className="image-item">
            <img src={chapter1_image15}  alt="globaldeforstation" />
          </div>


          <div className="image-item">
            <img src={chapter1_image13} alt="Chapter Image 12" />
          </div>

          {/* third iframe */}
          <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/forest-area-as-share-of-land-area?tab=chart&time=earliest..latest&country=England~Scotland~FRA~USA~IND~OWID_ASI~OWID_WRL"
              loading="lazy"
              style={{ width: '100%', height: '480px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Extinct Species"
            ></iframe>
          </div>
          <div className="image-item">
            <img src={chapter1_image11} alt="Chapter Image 10" />
          </div>
          <div className="image-item">
            <img src={chapter1_image12} alt="Chapter Image 11" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chapter1;
