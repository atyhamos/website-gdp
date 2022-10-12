import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ReactGA from 'react-ga'

const TRACKING_ID = 'UA-245233807-1'
ReactGA.initialize(TRACKING_ID)

const NavigationBar = () => {
  // Refactor and use proper React Router instead (https://github.com/remix-run/react-router)
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Navbar
      expand='lg'
      className='text-dark'
      style={{ backgroundColor: '#007700' }}
      fixed='top'
    >
      <Container className='mw-100'>
        <Navbar.Brand className='p-2'>
          <Link className='text-decoration-none text-dark' to='/'>
            Green Doctors Programme
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto fw-bold'>
            <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/about'>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/solutions'>
                Our Solutions
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/blog'>
                Green Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/contact'>
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
