import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

function Footer() {
  return (
    <section className='container foot-sec'>
        <div className='foot-div'>
            <h4 className='text-light foot-h4'>Join the <span className='foot-span'>Hideaway</span> Newsletters</h4>
            <p className='foot-p'>Subscribe to our mailing list to receive updates and promotional offers</p>
            <div>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Control placeholder="Enter Email Here" className='form-placeholder' style={{width: '50%', height: '120%', position: 'relative', right: '10%'}} />
                        </Col>
                        <Col md={6}>
                            <Button variant="light" className='foot-btn' size="md" >
                              Submit
                            </Button>
                        </Col>
                    </Row>
                </Form> 
            </div>
        </div>

        <div className='foot-div-1'>
            <p className='foot-p'>© Hideaway 2018 | Template crafted by Themewagon</p>
        </div>

        <div className='foot-div-2 d-flex'>
           <p><a href="" className='foot-a-1'>Home</a></p>
           <p><a href="" className='foot-a-2'>Book Now</a></p>
           <p><a href="" className='foot-a-3'>Contact</a></p>
           <p><a href="" className='foot-a-4'>Events</a></p>
           <p><a href="" className='foot-a-5'>Policies</a></p>
           <p><a href="" className='foot-a-6'>Term + Conditions</a></p>
        </div>
          
    </section>
  )
}

export default Footer