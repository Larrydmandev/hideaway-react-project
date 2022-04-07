import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Info() {
  return (
    <section className='info-sec container'>
        <Row>
            <Col md={6} style={{position: 'relative', bottom:'10%'}}> 
            <p style={{marginLeft: '30%'}} className="map-p map-p-2">Alabian Solutions Limited</p>
               <div>
                   <iframe className='main-iframe'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341775346873!
                        2d3.3422253148425853!3d6.604381995223933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
                        3.1!3m3!1m2!1s0x103b8d7c33eb87b3%3A0xfc23c9556f669273!2sAlabian+Solutions+Lim
                        ited!5e0!3m2!1sen!2sng!4v1516009132030" style={{width :'110%', height: '350px' , border: '0'}}
                        frameBorder="0" allowFullScreen
                      >
                    </iframe>
               </div>
            </Col>
                
            <Col md={6}> 
                <p style={{marginLeft: '30%'}} className='map-p map-p-1'>Instagram / Facebook / Twitter</p> 

               <Row className='mb-2'>
                   <Col md={4} className='info-col'>
                     <div style={{position: 'relative', left:'40%'}} className="info-div">
                        <img src="./images/3.jpg" style={{width:'100%', height: '100%'}} className="info-img" alt="" />
                     </div>
                   </Col>
                   <Col md={4} className='info-col-1'>
                      <div style={{position: 'relative', left:'30%'}} className="info-div">
                         <img src="./images/8.jpg" style={{width:'100%', height: '100%'}} alt="" />
                     </div>
                   </Col>
                   <Col md={4} className='info-col-2'>
                       <div style={{position: 'relative', left:'20%'}} className="info-div">
                         <img src="./images/5.jpg" style={{width:'100%', height: '100%'}} alt="" />
                     </div>
                   </Col>
               </Row>
               <Row>
                  <Col md={4} className='info-col'>
                     <div style={{position: 'relative', left:'40%'}} className="info-div">
                         <img src="./images/1.jpg" style={{width:'100%', height: '100%'}} alt="" />
                     </div>
                   </Col>
                   <Col md={4} className='info-col-3'>
                      <div style={{position: 'relative', left:'30%'}} className="info-div">
                         <img src="./images/6.jpg" style={{width:'100%', height: '100%'}} alt="" />
                     </div>
                   </Col>
                   <Col md={4} className='info-col-4'>
                       <div style={{position: 'relative', left:'20%'}} className="info-div">
                         <img src="./images/12.jpg" style={{width:'100%', height: '100%'}} alt="" />
                     </div>
                   </Col>
               </Row>
            </Col>
        </Row>

        
    </section>
  )
}

export default Info