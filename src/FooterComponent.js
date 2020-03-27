import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

class FooterComponent extends Component {

  render() {

    const addressInFooter = (
      <Col md={4}  xs={12} className="footer-col">
          <h3>Location</h3>
          <p>Rajdanga <br/>Kolkata, West Bengal -700107</p>
      </Col>
    );

    var socialSiteRefs = [
      {link:"#", className:"fa fa-fw fa-facebook"},
      {link:"#", className:"fa fa-fw fa-google-plus"},
      {link:"#", className:"fa fa-fw fa-twitter"},
      {link:"#", className:"fa fa-fw fa-linkedin"},
      {link:"#", className:"fa fa-fw fa-dribbble"}
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
      <Col xs={12} md={4} className="footer-col">
          <h3>Around the Web</h3>
          <ul className="list-inline">
              {socailSiteRefLinksComponent}
          </ul>
      </Col>
    );

    const aboutInFooter = (
      <Col xs={12} md={4} className="footer-col">
          <h3>About Hospito</h3>
          <p>We provide health and medical information to improve the health and wellbeing of people and the communities they live in.</p>
      </Col>
    );

    const copyrightInFooter = (
      <Grid>
          <Row>
              <Col lg={12} xs={12} >
                  Copyright &copy; hospito.com 2020
              </Col>
          </Row>
      </Grid>
    );

    return (
      <footer className="text-center">
        <div className="footer-above">
            <Grid>
                <Row>
                    {addressInFooter}
                    {socialInFooter}
                    {aboutInFooter}
                </Row>
            </Grid>
        </div>
        <div className="footer-below">
            {copyrightInFooter}
        </div>
        <div>
            FooterItem
        </div>
     </footer>
    );
  }
}

export default FooterComponent;
