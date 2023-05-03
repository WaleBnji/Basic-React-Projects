import React from 'react';
import Person from './Person';

const List = (props) => {
  <React.StrictMode>
    {props.people.map((person) => {
      const { id, image, name, age } = person;
      return <Person id={id} img={image} name={name} age={age} />;
    })}
  </React.StrictMode>;
};

export default List;
