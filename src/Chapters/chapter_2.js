import React from 'react';
import '../CSS/chapters/chapter_2.css'; // Correct path to the CSS file
import chapter1_bg from '../Files/Chapters/chapter1_bg.jpg';

import chapter2_image1 from '../Files/Chapters/chapter_2/1.png';
import chapter2_image2 from '../Files/Chapters/chapter_2/2.png';
import chapter2_image3 from '../Files/Chapters/chapter_2/3.png';
import chapter2_image4 from '../Files/Chapters/chapter_2/4.png';
import chapter2_image5 from '../Files/Chapters/chapter_2/5.png';
import chapter2_image6 from '../Files/Chapters/chapter_2/6.png';
import chapter2_image7 from '../Files/Chapters/chapter_2/7.png';
import chapter2_image8 from '../Files/Chapters/chapter_2/8.png';
import chapter2_image9 from '../Files/Chapters/chapter_2/9.png';
import chapter2_image10 from '../Files/Chapters/chapter_2/10.png';
import chapter2_image11 from '../Files/Chapters/chapter_2/11.png';
import chapter2_image12 from '../Files/Chapters/chapter_2/12.png';
import chapter2_image13 from '../Files/Chapters/chapter_2/13.png';
import chapter2_image14 from '../Files/Chapters/chapter_2/14.png';
import chapter2_image15 from '../Files/Chapters/chapter_2/15.png';
import chapter2_image16 from '../Files/Chapters/chapter_2/16.png';
import chapter2_image17 from '../Files/Chapters/chapter_2/17.png';


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
        <h1 className="header">Chapter 2</h1>
        <div className="image-grid">
          <div className="image-item">
            <img src={chapter2_image1} alt="Chapter Image 1" />
          </div>
          <div className="image-item">
            <img src={chapter2_image2} alt="Chapter Image 2" />
          </div>
          <div className="image-item">
            <img src={chapter2_image3} alt="Chapter Image 3" />
          </div>
          <div className="image-item">
            <img src={chapter2_image4} alt="Chapter Image 4" />
          </div>
          <div className="image-item">
            <img src={chapter2_image5} alt="Chapter Image 5" />
          </div>
          <div className="image-item">
            <img src={chapter2_image6} alt="Chapter Image 6" />
          </div>
           {/* Embedded graph iframe */}
           <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/total-ghg-emissions?tab=chart&country=European+Union+%2828%29~USA~GBR~CHN~IND~OWID_ASI"
              loading="lazy"
              style={{ width: '100%', height: '480px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Annual Temperature Anomalies"
            ></iframe>
          </div>
           {/* Embedded graph iframe */}
          <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/death-rate-by-source-from-air-pollution?country=~IND&tab=chart"
              loading="lazy"
              style={{ width: '100%', height: '480px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Annual Temperature Anomalies"
            ></iframe>
          </div>

          

          <div className="image-item">
            <img src={chapter2_image7} alt="Chapter Image 7" />
          </div>
          <div className="image-item">
            <img src={chapter2_image8} alt="Chapter Image 8" />
          </div>

          
          <div className="image-item">
            <img src={chapter2_image9} alt="Chapter Image 9" />
          </div>
           {/* Embedded graph iframe */}
           <div className="image-item-graph">
            <iframe
              src="https://www.globalforestwatch.org/embed/map/?map=eyJjZW50ZXIiOnsibGF0Ijo3LjIzMDU5MDQ3MzE4Nzg1LCJsbmciOjcuNzMwOTY3MTQzMDQzNzc2NX0sInpvb20iOjIuNTQyNDMzOTUwNzkzMjc2NSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItZ2FpbiIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWdhaW4tMjAwMS0yMDIwIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMS0wMS0wMSIsImVuZERhdGUiOiIyMDIzLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIzLTEyLTMxIn19LHsiZGF0YXNldCI6InRyZWUtY292ZXIiLCJsYXllcnMiOlsidHJlZS1jb3Zlci0yMDEwIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D%22%3E%3C/iframe%3E"
              loading="lazy"
              style={{ width: '100%', height: '480px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Annual Temperature Anomalies"
            ></iframe>
          </div>
          <div className="image-item">
            <img src={chapter2_image10} alt="Chapter Image 10" />
          </div>

           {/* Embedded graph iframe */}
           <div className="image-item-graph">
            <iframe
              src="https://ourworldindata.org/grapher/renewable-share-energy?tab=chart&country=GBR~DEU~OWID_ASI~USA"
              loading="lazy"
              style={{ width: '100%', height: '480px', border: '0px none' }}
              allow="web-share; clipboard-write"
              title="Annual Temperature Anomalies"
            ></iframe>
          </div>



         {/* Embedded graph iframe */}
          <div className="image-item-graph1">
          <iframe
          src="https://ourworldindata.org/grapher/modern-renewable-energy-consumption?country=~DEU&tab=chart"
          loading="lazy"
          style={{ width: '100%', height: '480px', border: '0px none' }}
          allow="web-share; clipboard-write"
          title="Modern Renewable Energy Consumption"
          ></iframe>
          </div>

           

          {/* Embedded graph iframe */}
          <div className="image-item-graph">
          <iframe
          src="https://ourworldindata.org/grapher/share-car-stocks-electric?country=IND~OWID_WRL~CHN~OWID_EU27~GBR~USA~NOR&tab=chart"
          loading="lazy"
          style={{ width: '100%', height: '480px', border: '0px none' }}
          allow="web-share; clipboard-write"
          title="Modern Renewable Energy Consumption"
          ></iframe>
          </div>
          
          <div className="image-item">
            <img src={chapter2_image11} alt="Chapter Image 11" />
          </div>
          <div className="image-item">
            <img src={chapter2_image12} alt="Chapter Image 12" />
          </div>
          <div className="image-item">
            <img src={chapter2_image13} alt="Chapter Image 13" />
          </div>
          <div className="image-item">
            <img src={chapter2_image14} alt="Chapter Image 14" />
          </div>
          <div className="image-item">
            <img src={chapter2_image15} alt="Chapter Image 15" />
          </div>
          <div className="image-item">
            <img src={chapter2_image16} alt="Chapter Image 16" />
          </div>
          <div className="image-item">
            <img src={chapter2_image17} alt="Chapter Image 17" />
          </div>


          


        </div>
      </section>
    </>
  );
};

export default Chapter1;
