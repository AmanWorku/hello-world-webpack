import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from './store';

const Greeting = () => {
  const greeting = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.greeting)));
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
