import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <Navbar fixed="top" bg="light" expand="lg">
            <Container fluid>
               <Navbar.Brand as={Link} to="/home">
                  KID'S LEARNING CARE
               </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/classes">Our Classes</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
   );
};

export default Header;