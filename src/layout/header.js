import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            menu:[
                {
                    name:"blog",
                    path:"/blog"
                },
                {
                    name:"weboard",
                    path:"/weboard"
                }
            ]

        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    activeMenu(e){
        console.log(e.target)
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            { this.state.menu.map((item)=>{
                                return <NavItem onClick={this.activeMenu}>
                                    <NavLink href={item.path}>{item.name}</NavLink>
                                </NavItem>
                            })}
                        
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Account</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;