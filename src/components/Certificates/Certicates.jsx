// src/components/Certificates.jsx

import React from 'react';
import './Certificates.css';
import { certData } from '../../constants/certData';
import CertificateComponent from './CertificateComponent';

const Certificates = () => {
  return (
      <div id="certificates" className="certificates">
        <h2 className="titleFontFamily colorTitle">Certificados</h2>
        <br />
        <div className="cards">
          {certData.map((cert, index) => (
            <div key={index}>
              <CertificateComponent 
                img={cert.img}
                cardTitle={cert.cardTitle}
                cardText={cert.cardText}
                urlBtn={cert.urlBtn}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Certificates;