import React from 'react'
import Carousels from '../Components/Carousels'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Navbars from '../Components/Navbars'
import Services from '../Components/Services'
import Welcome from '../Components/Welcome'

function Homepage() {
  return (
    <>
        {/* <Navbars/> */}
        <Carousels/>
        <Services/>
        <Welcome/>
        <Info/>
        <Footer/>
    </>
  )
}

export default Homepage