import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


export  class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: 'yellow'}} color="faded" light>
          <NavbarBrand href="/index" className="mr-auto">StarWars</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" href="/index/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/carrusel" href="/carrusel/">Carrusel</NavLink>              
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}