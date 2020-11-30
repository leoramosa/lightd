import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import whatsapp from '../../images/whatsapp.png'

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
              <div className="content-btn">
                <div className="img-what">
                  <img src={whatsapp} alt=""/>
                </div>
                Envíame un mensaje
              </div>
            </div>
          </a>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
