import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar><Link to="/" className='logo-text'> NFLIX</Link></Navbar>
          <Nav>
            <Link to='/movie/animation'>Animation</Link>
            <Link to='/movie/sci-fi'>SF</Link>
            <Link to='/movie/romance'>Romance</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;