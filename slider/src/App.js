import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [users, setUsers] = useState(data);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const lastIndex = users.length - 1;
    if (counter < 0) {
      setCounter(lastIndex);
    }
    if (counter > lastIndex) {
      setCounter(0);
    }
  }, [users, counter]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCounter(counter + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [counter]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className='section-center'>
        {users.map((individual, individualIndex) => {
          const { id, image, name, title, quote } = individual;
          let position = 'nextSlide';
          if (individualIndex === counter) {
            position = 'activeSlide';
          }
          if (
            individualIndex === counter - 1 ||
            (counter === 0 && individualIndex === users.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button
          className='prev'
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
