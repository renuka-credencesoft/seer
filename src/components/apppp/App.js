// App.js
import React from 'react';
import './App.css';
import Circle from './Circle';
import CircleTwo from './Circle2';

const App = () => {
  return (
    <div className="app">
      <div className="sectionOne"> <Circle /></div>
      <div className="sectionTwo">

        <CircleTwo />
      </div>
    </div>
  );
}

export default App;
