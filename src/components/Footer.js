import React from 'react';
import './styles/Footer.scss';
function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="container-footer">
          <div className="column-footer">
            <div className="column-footer-content">
              <div className="box-footer">
              Copyright © 2020 Light Digital Perú - Todos los derechos reservados.
              </div>
            </div>
            
            <div className="column-footer-content">
            <div className="single-footer-widget">
              <div className="footer-social ">
              Nuestras redes sociales 
                <a className="social" href="https://www.facebook.com/lightdigital.peru"   target="blank"><i className="fab fa-facebook-square"></i></a>
                <a className="social" href="https://www.instagram.com/light_digital.oficial/" target="blank"><i className="fab fa-instagram-square"></i></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
