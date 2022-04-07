import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbars() {
  return (
    <section className="container nav-sec">
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand className="nav-brand"><Link to="/" style={{textDecoration: 'none' , color: 'white', fontSize: '30px'}}>Hideaway Resort</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{color:'white', marginBottom: '5%'}} />
                <Navbar.Collapse id="navbarScroll" style={{color:'white'}}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        id='nav-holder'
                    >
                        <Nav.Link href="#" className='text-muted'>Home</Nav.Link>
                        <Nav.Link href="#" className='text-muted'>Pages</Nav.Link>
                        <Nav.Link href="#" className='text-muted'>Contact</Nav.Link>
                        <Nav.Link href="#" className='text-muted'>Elements</Nav.Link>
                        <Nav.Link href="#" className='text-muted'>Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown" className='text-muted'>
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" style={{marginRight: '30%'}}>
                        <Button variant="outline-light" className='nav-btn'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </section>
  )
}

export default Navbars