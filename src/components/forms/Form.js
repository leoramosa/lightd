import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className='form-content-left'>
          Escríbeme por Whatsapp:
          <div className="whastapp-btn">
          <a href="https://wa.me/51938459420">
          <div className="whatsapp">
              <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51950653902&amp;text=Hola%2C%20deseo%20adquirir%20una%20pagina%20web%2C%20quiero%20comenzar%20un%20proyecto%20con%20ustedes" rel="noopener noreferrer" target="_blank"> <i className="fab fa-whatsapp"></i> Envíame un mensaje</a>
            </div>
          </a>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
