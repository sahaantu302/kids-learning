import React from 'react';
import img from '../img/image-asset.jpeg';
import { Card } from 'react-bootstrap';
import './Main.css';

const Main = () => {
   return (
      <div>
         <Card className="bg-dark text-white">
               <Card.Img src={img} alt="Card image" height="500" />
               <Card.ImgOverlay>
                  <Card.Title className="main-header">Prepare Every Child For School <br />
                  <span className="text-danger">And The Future</span></Card.Title>
               
                  <Card.Text>
                     We offer child care and early education programs at more than 900 locations across the country and around the world.
                  </Card.Text>
               </Card.ImgOverlay>
         </Card>
            
      </div>
   );
};

export default Main;