import React from 'react';

export const EggList = ({ eggs }) => {
 
  const eggList = eggs.map((egg, index) => <EasterEgg name={egg} key={index} />)
  
  return <ul>
    {eggList}
  </ul>
};

export const EasterEgg = ({ name }) => (<li>{name}</li>);