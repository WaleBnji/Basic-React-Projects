import React from 'react';
import Tour from './Destination';
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our destinations</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
