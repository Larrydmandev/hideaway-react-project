import React from 'react'
import { Button } from 'react-bootstrap'

function Welcome() {
  return (
    <section className='container wel-sec'>
         <div className='wel-div'>
             <h1 className='wel-h1 text-light'>Eagerly <span className='wel-span'>waiting</span> to welcome you.</h1>
              <Button variant="outline-light" className='wel-btn' size="lg">
                Book Your Stay
              </Button>
         </div>
    </section>
  )
}

export default Welcome