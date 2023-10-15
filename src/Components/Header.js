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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/blog" element={<Blog/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}
