import React from 'react'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import "./Navigation.css"

export default function Navigation() {
    return (
        <div>
            <Navbar bg="none" variant="light" className="border-bottom">
                <div className="container">
                <Navbar.Brand href="#home">movieDB</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}
