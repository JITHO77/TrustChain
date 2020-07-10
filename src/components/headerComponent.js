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
                    <div>
                    <Navbar dark expand="md">
                   
                        <NavbarBrand href="/"><h2>Trust Chain</h2></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                        <NavLink href="/components/">
                                         Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">
                                   Donate
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">
                                    Request
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/"> 
                                    Aboutus
                                     </NavLink>
                                </NavItem>
                            </Nav>  
                            </Collapse>  
                           
                    </Navbar>
                    </div>
               
        );
    }
}

export default Header