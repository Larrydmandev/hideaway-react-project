import React from 'react'
import { Carousel } from 'react-bootstrap'
import Navbars from './Navbars'


function Carousels() {
  return (
    <section className="container car-sec">
        <Carousel fade>
           <Carousel.Item className='car-item'>
                <Navbars/>  
                {/* <img
                className="d-block w-100"
                src="./images/main-header-1.jpg"
                alt="First slide"
                style={{height: '85vh'}}
                /> */}
                <Carousel.Caption className="caption">
                    <p className="caption-p">WEST VIRGINIA / UNITED STATES</p>
                    <h3 className="caption-h3 caption-h3-1">Live Wonderful life</h3>
                </Carousel.Caption>
            </Carousel.Item>
           <Carousel.Item className='car-item-2'>
                <Navbars/> 
                {/* <img
                className="d-block w-100"
                src="./images/main-header-2.jpg"
                alt="First slide"
                style={{height: '85vh'}}
                /> */}
                <Carousel.Caption className="caption">
                    <p className="caption-p">WEST VIRGINIA / UNITED STATES</p>
                    <h3 className="caption-h3 caption-h3-2">Perfect Vacation Place</h3>
                </Carousel.Caption>
            </Carousel.Item>
           <Carousel.Item className='car-item-3'>
                <Navbars/> 
                {/* <img
                className="d-block w-100"
                src="./images/main-header-3.jpg"
                alt="First slide"
                style={{height: '85vh'}}
                /> */}
                <Carousel.Caption className="caption">
                    <p className="caption-p">WEST VIRGINIA / UNITED STATES</p>
                    <h3 className="caption-h3 caption-h3-3">The Hideaway Inn</h3>
                </Carousel.Caption>
            </Carousel.Item>
           

            
        </Carousel>
    </section>
  )
}

export default Carousels