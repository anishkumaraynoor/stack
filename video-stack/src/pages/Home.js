import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <div style={{ backgroundColor: '#444344' }}>
      <Container>
        <Row>
          <Col lg={6} md={6} className='p-5'>
            <h1 className='text-white anton'><span style={{ color: 'red' }}>V</span>ideo <span style={{ color: 'red' }}>U</span>ploader</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, exercitationem. Temporibus delectus, dolorum quaerat repellendus quis nemo porro unde ut totam, voluptates corrupti minima. Dolore debitis totam placeat et odio.</p>
            <Link to={'/main'}>
              <b style={{ borderRadius: '20px' }} className='btn text-white border'>Get Started<span><img width={30} height={30} src="https://i.postimg.cc/wMb63Ch8/playbtn-removebg-preview.png" alt="" /></span></b>
            </Link>

          </Col>
          <Col lg={6} md={6} className='py-2'>
            <div>
              <img className='w-50 d-block me-auto ms-auto' src="https://i.postimg.cc/pdJxgHN2/HTML-CSS-play-pause-button-4-1.gif" alt="" />
            </div>

          </Col>
        </Row>
      </Container>


      <Container className='p-2 pb-5'>
      <h3 className='text-secondary text-center'>Features</h3>
        <Row className='border border-black'>
          <Col lg={4} md={6}>
            <Card className='m-4 p-2 bg-secondary text-white'>
              <Card.Img variant="top" src="https://i.postimg.cc/BndLvPCQ/card2-1.gif" />
              <Card.Body>
                <Card.Title className='fs-4' style={{ color: 'red' }}>Manage Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, praesentium? Ex ducimus ullam error corporis officiis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} >
            <Card className='m-4 p-2 bg-secondary text-white'>
              <Card.Img variant="top" src="https://i.postimg.cc/762209fG/player.gif" />
              <Card.Body>
                <Card.Title className='fs-4' style={{ color: 'red' }}>Categorise Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, praesentium? Ex ducimus ullam error corporis officiis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className='m-4 p-2 bg-secondary text-white'>
              <Card.Img variant="top" src="https://i.postimg.cc/D009W02B/giphy-1.gif" />
              <Card.Body>
                <Card.Title className='fs-4' style={{ color: 'red' }}>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, praesentium? Ex ducimus ullam error corporis officiis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home