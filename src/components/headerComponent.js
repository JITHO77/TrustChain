import React, {Component} from 'react';
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
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render(){
        return(
                    
                    <Navbar dark expand="md">
                         <div className="container">
                        <NavbarBrand href="/"><h2>Trust Chain</h2></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                        <NavLink href="/home">
                                         Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">
                                    About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/donate">
                                    Donate
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/request"> 
                                    Request
                                     </NavLink>
                                </NavItem>
                            </Nav>  
                            </Collapse>  
                            </div>
                    </Navbar>
                   
               
        );
    }
}

export default Header