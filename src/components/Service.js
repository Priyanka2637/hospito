import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import {Row, Col, Grid} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import ServicesSectionComponent from "../ServicesSectionComponent";

function ServiceBox(props) {
    return (
      <Col lg={3} md={6} className="text-center">
          <div className="service-box">
              <i className={props.style}></i>
              <h3>{props.title}</h3>
              <p className="text-muted">{props.description}</p>
          </div>
      </Col>
    );
  }

class Service extends Component {
  render() {
    return (
      
          <section id="services">
            <Grid>
            <div>
                <br/><br/>
        <LinkContainer style={{color:"white", marginLeft:"80%"}} to ="/medicine" ><button className="btn btn-info btn-lg" >Buy Medicine Online</button></LinkContainer>
        <ServicesSectionComponent />
         <Row>
            <Col lg={12} className="text-center">
                <h2 className="section-heading">Our Other Services</h2>
                <hr className="primary" />
            </Col>
        </Row>
              <Row style={{marginLeft:"30%"}}>
                  <ServiceBox style="fa fa-4x fa-ambulance text-primary sr-icons" title="Emergency" description="Book ambulance now" />
                  <ServiceBox style="fa fa-4x fa-medkit text-primary sr-icons" title="Buy Medicine" description="We love to provide you medicine on time." />
              </Row>
              <LinkContainer style={{color:"blue" ,marginLeft:"52%","width": "50%"}} to ="/medicine" ><span >Click Here to Buy</span></LinkContainer>
              <br/><br/><br/><br/>
              </div>
      </Grid>
      </section>
     
    );
  }
}

export default Service;