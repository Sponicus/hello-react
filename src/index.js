import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const {reset} = props;
  
  return (
    <button onClick={reset}>RESET</button>
  );
};

const Application = () => {
  // your code here
  const [name, setName] = useState('');
  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };

  return (
    <main>
      <input onChange={(event) => setName(event.target.value)} placeholder='type your name' value={name}></input>
      <Button reset={reset} />
      { name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
