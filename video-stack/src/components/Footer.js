import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'



function Footer() {
  return (
    <div className='bg-dark'>
      <Container>
        <Row className='py-3'>
          <Col lg={3} md={6} >
            <img
              alt=""
              src="https://i.postimg.cc/ZnLKw0Kc/images-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b className='fs-4 text-white ms-2 anton'><span style={{color:'red'}}>V</span>ideo <span style={{color:'red'}}>U</span>ploader</b>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque tempora quas esse quae qui, hic ipsum consectetur enim cum dignissimos quia fugiat est. Doloremque aut eius quos quia assumenda.</p>

          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Links</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a class="text-danger">Loading Page</a>
              </li>
              <li>
                <a class="text-danger">Home</a>
              </li>
              <li>
                <a class="text-danger">Watch History</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Guides</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <h6 class="text-white">React</h6>
              </li>
              <li>
                <h6 class="text-white">React Bootstrap</h6>
              </li>
              <li>
                <h6 class="text-white">Routing</h6>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Contact Us</h5>
            <div className='d-grid'>
              <input type="email" placeholder="enter email" id="" />
              <button style={{ lineHeight: '8px' }} className='btn btn-danger'>Send</button>
            </div>
            <section class="text-center mb-5">
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer