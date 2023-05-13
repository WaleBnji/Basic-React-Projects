import React from 'react';
import classes from './Person.module.css';

const Person = ({ id, img, name2, age }) => {
  return (
    <div className={classes.person} key={id}>
      <img src={img} alt='' className='w-16 h-16 object-cover rounded-full' />
      <div className='details'>
        <h4 className='font-semibold'>{name2}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Person;
