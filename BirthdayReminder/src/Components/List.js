import React from 'react';
import Person from './Person';
export default function List(props) {
  return (
    <div>
      {props.people.map((person) => {
        const { id, image, name, age } = person;
        return <Person key={id} id={id} img={image} name2={name} age={age} />;
      })}
    </div>
  );
}
