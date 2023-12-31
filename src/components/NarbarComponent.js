import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/CSS/navbarStyle.css'
import { Link } from 'react-router-dom';
function NarbarComponent() {
  return (
    <div  className='navStyle' >
       <Navbar scrolling dark collapseOnSelect expand="md" className="bg-body-tertiary " >
      <Container>
        <Navbar.Brand href="/">DriveSmart-Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Item style={{padding:"0 1em 0 1em"}} ><Link className=' text-dark text-decoration-none' to='/'>Admin Panel</Link></Nav.Item>
            <Nav.Item style={{padding:"0 1em 0 1em"}}><Link className=' text-dark text-decoration-none' to='#aboutus'>About us</Link></Nav.Item>
            <Nav.Item style={{padding:"0 1em 0 1em"}}><Link className=' text-dark text-decoration-none' to='#contactus'>Contact us</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default NarbarComponent