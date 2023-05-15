import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
  const [displayInfo, setDisplayInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setDisplayInfo(!displayInfo);
          }}
        >
          {displayInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {displayInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
