import React, { Component } from 'react';
import ContactSectionComponent from '../ContactSectionComponent';
import {Grid} from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="services">
          <Grid>
          <div className="ChatBox">
        <div style={{float:"center", marginTop:"10%", }}>
    <iframe style={{float:"center", marginTop:"-10%", width:"90%"}}
    allow="microphone;"
    width="260"
    height="500"
    src="https://console.dialogflow.com/api-client/demo/embedded/bec5d9dd-8f79-44bc-9143-76128a4a6df6">
</iframe>
</div>
</div>
</Grid>
</section>
<ContactSectionComponent />
      </div>
    );
  }
}

export default Contact;