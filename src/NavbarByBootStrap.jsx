import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink as NL } from 'react-router-dom';

export default class NavbarByBootStrap extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="danger" dark expand="md">
          <NL to="/"><NavbarBrand className="text-white">Back to the Wild Circus</NavbarBrand></NL>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NL to="/"><NavLink>Home</NavLink></NL>
              </NavItem>
              <NavItem>
                <NL to="/tickets"><NavLink>Get tickets</NavLink></NL>
              </NavItem>
              <NavItem>
                <NL to="/gallery"><NavLink>Gallery</NavLink></NL>
              </NavItem>
              <NavItem>
                <NL to="/contact"><NavLink>Contact</NavLink></NL>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                  <NL to="/admin/accueil"><NavLink className="text-warning">Sign In</NavLink></NL>
                  </DropdownItem>
                  <DropdownItem className="text-warning">
                    Sign Out
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
