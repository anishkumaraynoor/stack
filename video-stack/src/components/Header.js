import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'}>
              <img
                alt=""
                src="https://i.postimg.cc/ZnLKw0Kc/images-removebg-preview.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Link>
            <b className='fs-1 text-white ms-2 anton'><span style={{color:'red'}}>V</span>ideo <span style={{color:'red'}}>U</span>ploader</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header