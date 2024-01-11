import React, { useContext } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import logo from './logo192.png'

function Header() {
  const { user, logoutUser } = useContext(AuthContext)
  const token = localStorage.getItem('authTokens')

  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <NavbarBrand as={Link} to="/">
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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              Contacts
            </Nav.Link>
            {token !== null && (
              <Nav.Link as={Link} to="/report">
                Report
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {token === null ? (
              <>
                <Button variant="primary" className="mr-2">
                  <Nav.Link as={Link} to="/login">
                    LogIn
                  </Nav.Link>
                </Button>
                <Button variant="primary">
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="primary"
                  onClick={logoutUser}
                  style={{ cursor: 'pointer' }}
                >
                  LogOut
                </Button>
              </>
            )}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
