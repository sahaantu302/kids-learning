import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Subject from '../Subject/Subject';

const Classes = () => {
   const [subjects, setSubjects] = useState([]);
   useEffect(() => {
      fetch('./courses.JSON')
         .then(res => res.json())
         .then(data=>setSubjects(data))
   }, [])
   return (
      <div className="mt-5 pt-5">
         <h1>Our Classes</h1>
         <Row xs={1} md={3} className="g-4 m-4">
            
            {
               subjects.map(subject => <Subject
                  key={subject.key}
                  subject={subject}
               ></Subject>)
            }
         </Row>
      </div>
   );
};

export default Classes;