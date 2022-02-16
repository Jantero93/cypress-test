import React from 'react';
import Form from './Form';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>
        <p id='clickCounter'>You clicked {count} times</p>
        <button id='button1' onClick={() => setCount(count + 1)}>
          {'Click me'}
        </button>
      </div>
      <Form />
    </div>
  );
}

export default App;
