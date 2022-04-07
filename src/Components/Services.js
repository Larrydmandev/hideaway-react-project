import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Services() {
  return (
    <section className='serv-sec container mt-5'>
      <Row>
        <Col md={4}>
          <div className='serv-div'>
            <img src="./images/thumb-gallery.jpg" className="serv-img" style={{width: '100%'}} alt="" />
            <p className="serv-p text-light">Gallery</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='serv-div'>
            <img src="./images/thumb-amneities.jpg" className="serv-img" style={{width: '100%'}} alt="" />
            <p className="serv-p text-light">Amneities</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='serv-div'>
            <img src="./images/thumb-packages.jpg" className="serv-img" style={{width: '100%'}} alt="" />
            <p className="serv-p text-light">Packages</p>
          </div>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={4}>
          <div>
            <h3 className='serv-h1'>An  <span className='serv-span'>inviting</span>  escape</h3>
          </div>
        </Col>
        <Col md={8}>
          <div>
            <p className='serv-p-1'>
              Crafted with Bootstrap 4, Hideaway is perfectly responsive to every devices available. Thousands of CSS helper classes let you customize this template in any way you want, without writing any code. This is a dummy text that you can change customize as you like with your description.
            </p>
          </div>
        <Button variant="outline-dark" className='serv-btn' size="lg">
          Our History
        </Button>
        </Col>
      </Row>
    </section>
  )
}

export default Services