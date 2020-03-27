import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel ,Grid} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import "./Login.css";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  

  function validateForm() {
    return email.length > 0 && password.length > 0 && confirmPassword.length > 0 && otpCode.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  var socialSiteRefs = [
    {link:"#", className:"fa fa-fw fa-facebook"},
    {link:"#", className:"fa fa-fw fa-twitter"},
    {link:"#", className:"fa fa-fw fa-linkedin"},
  ];

  var socailSiteRefLinksComponent = [];
  for(var i=0; i< socialSiteRefs.length; i++) {
    var socialSiteRef = socialSiteRefs[i];
    socailSiteRefLinksComponent.push(
      <li key={i}>
          <a target="_blank" href={socialSiteRef.link} className="btn-social btn-outline"><i className={socialSiteRef.className}></i></a>
      </li>
    );
  }

  const socialInFooter = (
        <ul className="list-inline" style={{"width": "41%",
            "display": "block",
            "margin": "auto"}}>
            {socailSiteRefLinksComponent}
        </ul>
  );

  return (
    <section id="services">
    <Grid>
    <div className="Login">
        {/* {socialInFooter} */}
        <h1 style={{"color":"white"}}>Forgot Password</h1><br/>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </FormGroup>
        <FormGroup controlId="otpCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            type="otpCode"
            onChange={e => setOtpCode(e.target.value)}
            value={otpCode}
          />
        </FormGroup>
        <Button block  variant="primary" bsSize="large" disabled={!validateForm()} type="submit">
            <i className="fa fa-check" ></i>
        Submit
        </Button>
      </form>
    </div>
    </Grid>
    </section>
  );
}