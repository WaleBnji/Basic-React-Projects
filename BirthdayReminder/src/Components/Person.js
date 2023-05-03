import React from 'react';

import classes from './Person.module.css';

const Person = (props) => {
  return (
    <div className={classes.person} key={props.id}>
      <img
        src={props.img}
        alt=''
        className='w-16 h-16 object-cover rounded-full'
      />
      <div className='details'>
        <h4 className='font-semibold'>{props.name}</h4>
        <p>{props.age}</p>
      </div>
    </div>
  );
};

export default Person;
