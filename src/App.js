import React from 'react';
import Form from './Form';

import './style.css';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>
        <p className='bold-font green-bg' id='clickCounter'>
          You clicked {count} times
        </p>
        <button id='button1' onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <Form />
    </div>
  );
};

export default App;
