import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import NavigationMenu from './NavigationMenu.js'
import BasePageComponent from './BasePageComponent.js'
import PageHeaderSectionComponent from './PageHeaderSectionComponent.js'
import ContactSectionComponent from './ContactSectionComponent.js';
import HospitalsComponent from './HospitalsComponent.js';
import HospitalPageComponent from './components/HospitalPageComponent.js'

class Home extends Component {

    constructor(props) {
      super(props);
  
      this.state = { currentViewName : "BaseView",
                     searchResult: {
                       cityName: '',
                       searchKey: ''
                     },
                     hospitalId: ''
                   };
  
      this.handleSectionChange = this.handleSectionChange.bind(this);
      this.fetchCurrentView = this.fetchCurrentView.bind(this);
      this.handleSearchResult = this.handleSearchResult.bind(this);
      this.handleSelectedHospital = this.handleSelectedHospital.bind(this);
      this.fetchCurrentView = this.fetchCurrentView.bind(this);
    }
  
    handleSectionChange(newView) {
      var baseUrl = window.location.origin;
      window.location.href = baseUrl + "/#" + newView;
      this.setState({
        currentViewName : 'BaseView',
        searchResult: ''
      });
    }
  
    handleSearchResult(result) {
      this.setState({
        currentViewName: 'HospitalsView',
        searchResult: result
      });
    }
  
    handleSelectedHospital(hospitalId) {
      console.log("Got hospital id");
      console.log(hospitalId);
      this.setState({
        currentViewName: 'HospitalDetailView',
        hospitalId: hospitalId
      });
    }
  
    fetchCurrentView() {
      switch (this.state.currentViewName) {
        case "BaseView":
          return <BasePageComponent handleSearchResult={this.handleSearchResult}/>
        case "HospitalsView":
          return <HospitalsComponent cityName={this.state.searchResult.cityName} searchKey={this.state.searchResult.searchKey} handleSelectedHospital={this.handleSelectedHospital}/>
        case "HospitalDetailView":
          console.log(this.state.hospitalId)
          return <HospitalPageComponent hospitalId={this.state.hospitalId} />
        default:
          return <BasePageComponent handleSearchResult={this.handleSearchResult}/>
      }
    }

render(){
    var currentView = this.fetchCurrentView();

    return(
        
           <div>
               {currentView}
               
                </div>
    );
}}  

export default Home;