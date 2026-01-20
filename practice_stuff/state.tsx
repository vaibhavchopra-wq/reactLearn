import {useState} from 'react';

function TestState(){
   const [count, setcount] = useState(0);
   function handleCount(){
    setcount(count*5);
   }
   return  <button onClick={handleCount} >
      Clicked {count} times
   </button>
   
}


// higher level state definition

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}