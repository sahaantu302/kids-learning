import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Subject = (props) => {
   const { name, img, age, startDate, price, duration } = props.subject;
   return (
      <div>
         <Col>
                  <Card>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                     <Card.Title>{name}</Card.Title>
                  <Card.Text>Start: {startDate}</Card.Text>
                  <Card.Text>Year Olds: {age}</Card.Text>
                  <Card.Text>Duration: {duration}</Card.Text>
                  <Button variant="primary">{price}</Button>
                  </Card.Body>
                  </Card>
               </Col>
      </div>
   );
};

export default Subject;