
import React from 'react';
import {Navbar, Nav, NavItem }  from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../public/img/logo.png";

class NavigationMenu extends React.Component {

	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey) {
		this.props.onChange(eventKey);
  }

	render() {
		return (
			<Navbar collapseOnSelect fixedTop className="em-text">
			    <Navbar.Header>
			      <Navbar.Brand>
				  <img src={Logo} alt="Hospito" style={{height: "80px"}}/>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse >

					<Nav pullRight>
						<LinkContainer to="/">
						<NavItem>Home</NavItem>
						</LinkContainer>
						<LinkContainer to="/about">
						<NavItem>About</NavItem>
						</LinkContainer>
						<LinkContainer to="/service">
						<NavItem>Service</NavItem>
						</LinkContainer>
						<LinkContainer to="/contact">
						<NavItem>Contact</NavItem>
						</LinkContainer>
						<LinkContainer to="/login">
						<NavItem className="btn btn-primary btn-xs">Login</NavItem>
						</LinkContainer>
					</Nav>

				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavigationMenu;
