import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'



function MainPage() {
    //state for state lifting
    const [addUpdate, setAddUpdate] = useState("")
  return (
    <div >
        <div style={{ backgroundColor: '#444344' }}>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                    <h2 className='text-white pt-5'><span style={{ color: 'red' }}>S</span>tart <span style={{ color: 'red' }}>U</span>ploading  <span style={{ color: 'red' }}>V</span>ideos  <span style={{ color: 'red' }}>F</span>or  <span style={{ color: 'red' }}>F</span>ree</h2>
                    <Link to={'/history'}>
                    <b className='fs-4 text-warning'><span><i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i></span>View Watch History</b>
                    </Link>
                    
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, exercitationem. Temporibus delectus, dolorum quaerat repellendus quis nemo porro unde ut totam, voluptates corrupti minima. Dolore debitis totam placeat et odio.</p>
                    
                   
                    <Add updateData={setAddUpdate}></Add>
                    </Col>
                    <Col  lg={6} md={6} >
                    <div>
                        <img className='w-50 d-block me-auto ms-auto' src="https://i.postimg.cc/90Fpzvth/live-removebg-preview.png" alt="" />
                    </div>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
        <div style={{backgroundColor:'black'}}>
            <Container>
                    <Row>
                        <Col lg={8} md={8} >
                        <Videos data={addUpdate}></Videos>
                        </Col>
                        <Col lg={4} md={4} >
                        <Categories></Categories>
                        </Col>
                    </Row>
                </Container>
        </div>
    </div>
  )
}

export default MainPage