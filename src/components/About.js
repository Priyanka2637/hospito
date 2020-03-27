import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import { Grid} from "react-bootstrap";
import IMAGE_ABOUT from "../../public/img/header2.jpg";

import MissionSectionComponent from "../MissionSectionComponent";

class About extends Component {
  render() {
    return (
      <div>
      
      <div>
        
      <section id="services">
    <Grid>
      <div >
      <div>
      <img src={IMAGE_ABOUT} alt="IMPORTANT"  width="100%" height="300px"/></div>
        <h2 >About Hospito</h2><br/>
        <p class="lead mb-0">Hospito is a private organistaion which provides heatlhcare services through its website.It provides online medicine 
        purchasing and delivery service,Scheduling Appointments with top doctors,Providing information about hospitals for specific problems.
        We provide health and medical information to improve the health and wellbeing of people and the communities they live in.</p>
      </div> 
      </Grid>
      </section>
      </div>
     
       <MissionSectionComponent />
       </div>
    );
  }
}

export default About;