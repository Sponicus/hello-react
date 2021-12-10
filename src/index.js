import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const [name, setName] = useState('');
  const {reset} = props;
  return (
    <main>
      <input onChange={(event) => setName(event.target.value)} placeholder='type your name'></input>
      <button onClick={reset}>RESET</button>
      <h1>Hello {name}</h1>
    </main>
  );
};

const Application = () => {
  // your code here
  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <Button reset={reset}/>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
