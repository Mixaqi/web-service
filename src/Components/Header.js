import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse
} from "react-bootstrap";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
        <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      </>
    );
  }
}
