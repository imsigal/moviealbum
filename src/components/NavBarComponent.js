import React, { Component } from 'react';
import { Navbar, Nav  } from 'react-bootstrap';


export default class NavBarComponent extends Component {


    render()
    {
      
        return (
            <Navbar bg="info" variant="dark" expand="lg">
                <Navbar.Brand href="#/">Actors Data Album</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/actors">Actors</Nav.Link>   
                </Nav>
                </Navbar.Collapse>
          </Navbar>
     
        );
    }
}
