import React, { useEffect, useState } from 'react';
import getGreeting from './api';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const newGreeting = await getGreeting();
      setGreeting(newGreeting);
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
