import React, { Component } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'react-bootstrap'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Home from '../Pages/Home'
import Report from '../Pages/Report'
import Loginpage from '../Pages/Loginpage'
import Registerpage from '../Pages/Registerpage'
import logo from './logo192.png'
import { AuthProvider } from '../context/AuthContext'
import PrivateRoute from '../utils/PrivateRoute'

export default class Header extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
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
                  <Nav.Link href="/report">Report</Nav.Link>
                </Nav>
                <Nav>
                  <Button href="/login" variant="primary">
                    LogIn
                  </Button>
                  <Button href="register" variant="primary">
                    SignIn
                  </Button>
                </Nav>
              </NavbarCollapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="register" element={<Registerpage />} />
            <Route
              path="/report"
              element={
                <PrivateRoute>
                  <Report />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </Router>
    )
  }
}
