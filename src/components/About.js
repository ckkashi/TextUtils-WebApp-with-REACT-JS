import React from 'react';


export default function About(props) {
  return (
    <div className={`container text-${props.mode!=='light'?'light':'dark'}`}>
        <h1>About</h1>
        <p>In this web app you analyze your given text very easily.</p>
    </div>
  )
}

