import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel ,Grid} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import IMAGE_ABOUT from "../../public/img/header2.jpg";
// import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
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
    <section id="services" style={{"backgroundImage":"IMAGE_ABOUT"}}>
    <Grid>
    <div className="Login">
        {socialInFooter}
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
        <Button block  variant="primary" bsSize="large" disabled={!validateForm()} type="submit">
        Login
        </Button>
        <div className="login-footer">
        <LinkContainer style={{"color":"white", "textAlign": "left","width": "50%"}} to ="/registration" ><span >Registration</span></LinkContainer>
       <LinkContainer style={{"color":"white", "textAlign": "right","width": "50%"}} to ="/forgotPassword" ><span >Forgot Password?</span></LinkContainer>
       </div>
      </form>
    </div>
    </Grid>
    </section>
  );
}