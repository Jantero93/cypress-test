import React from 'react';

export default function Display(props) {
  //   console.log('props', props);

  return (
    <div id="result">
      <h1 id="textFirst">{props.firstName}</h1>
      <h1 id="textLast">{props.lastName}</h1>
      <h1 id="textUser">{props.userName}</h1>
      <h1 id="textEnd">{props.endValue}</h1>
    </div>
  );
}
