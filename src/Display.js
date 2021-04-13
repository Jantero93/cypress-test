import React from 'react';

export default function Display(props) {
  //   console.log('props', props);

  return (
    <div>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1>{props.userName}</h1>
      <h1>{props.endValue}</h1>
    </div>
  );
}
