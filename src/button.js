import React,  {useState} from 'react'


const Button = (props) => {

  return (
    <button 
        className={props.className}
        type="button"
        onClick={() => props.handleMail()}>
        <div></div>
        <img src={props.img} alt="logo" />
        {props.text}
    </button>
  )
}

export default Button