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
              Copyright © 2020 Leonardo Ramos - Todos los derechos reservados.
              </div>
            </div>
            
            <div className="column-footer-content">
            <div className="single-footer-widget">
              <div className="footer-social ">
              Mis redes sociales 
                <a className="social" href="https://www.facebook.com/leonardo.ramosa.13"   target="blank"><i className="fab fa-facebook-square"></i></a>
                <a className="social" href="https://www.instagram.com/leo.ramosa/" target="blank"><i className="fab fa-instagram-square"></i></a>
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
