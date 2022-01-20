import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Main from '../Main/Main';
import Subject from '../Subject/Subject';

const Home = () => {
   const [subjects, setSubjects] = useState([]);
   useEffect(() => {
      fetch('./courses.JSON')
         .then(res => res.json())
         .then(data=>setSubjects(data))
   }, [])
   return (
      <div className="mt-5">
         <Main></Main>

         <div className="mt-5 m-4">
            <h1>Our Classes</h1>
            <Row xs={1} md={3} className="g-4">
            {subjects.slice(0,3).map(subject => <Subject
                  key={subject.key}
                  subject={subject}
               ></Subject>) }
         </Row>
         </div>
      </div>
   );
};

export default Home;