import React, { useEffect, useState } from "react";
import './enter.css';

const Enter = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const expression = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z],{2,8})?$/;
    if (!expression.test(String(e.target.value).toLowerCase())){
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(emailError){
      alert('Email is invalid');
      setEmail('');
    }else {
      alert('Welcome to the team!');
      setEmail('');
    }
  }

  return (
    <form className='enterForm'>
      <div className="login">
        <input 
          onChange={emailHandler} 
          type="email" 
          name="email" 
          value={email}/>
      </div>
      <button 
        onClick={onSubmit}
        type="submit" 
        className='btn'
        >Join
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4836_9)">
            <path d="M2.1875 7.5H11.8125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.875 3.5625L11.8125 7.5L7.875 11.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_4836_9">
              <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  )
};
  
  
export default Enter;