import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
   return (
      <div className="mt-5 about-container">
         <Row>
            <Col xs={12} md={4}>
               <h1 className="mt-5 pt-5 border-end border-3">About Us</h1>
            </Col>
            <Col xs={6} md={8} className="p-5">
               Kid's Learning Care Group, Inc. is the most-largest for-profit child care provider in Bangladesh and a leader in early education. Our programs are designed for children aged 6 weeks to 12 years. Across our 10 unique brands, we’re committed to creating state-of-the-art facilities with the latest technology and expert-driven curricula created by our own Education team.
               <br /> Safety. Care. Education. Results.
               <br /> Safety, Honesty, Trust, Passion for Excellence, Love of Learning, and Innovation.
               
            </Col>
         </Row>
      </div>
   );
};

export default About;