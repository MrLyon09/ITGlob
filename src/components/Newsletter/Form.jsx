// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import './Form.css'
import { useForm, ValidationError } from '@formspree/react';


function Form() {
  const [state, handleSubmit] = useForm("xrgdaeon");
  if (state.succeeded) {
      return <p className='answer'>Thanks for joining!</p>;
  }


  return (
      <form onSubmit={handleSubmit}>

        <div className='news'>
          <span className='news__content'>
            NEWSLETTER
            <h1>SUSCRIBITE</h1>
            <h5>Y enterate de las novedades</h5> 
          </span>
        </div>

      
        <div className="form-btn">
          <input id="email" type="email" name="email" placeholder="Ingresa tu Email"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          
          <button type="submit" disabled={state.submitting}>
            {" "} 
          </button>

        </div>

    </form>
  );
}

export default Form;
