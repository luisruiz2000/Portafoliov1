import React from 'react';
import './certificates.css';
import { CERT_DATA } from '../../constants/cert_data';
import CertificateComponent from './CertificateComponent';

const Certificates = () => {
  return (
      <div id="certificates" className="certificates">
        <h2 className="titleFontFamily colorTitle">Certificados</h2>
        <br />
        <div className="cards">
          {CERT_DATA.map((cert, index) => (
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