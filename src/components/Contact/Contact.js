import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
   return (
      <div className="w-75 contact-container">
         <h1>Contact Us</h1>
         <Form className="w-75 mx-auto">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Massage" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-50">
               Send
            </Button>
         </Form>
      </div>
   );
};

export default Contact;