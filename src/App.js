import React from 'react';
import './App.css';
import Classes from './classes.js'

function App() {
  return (
    <div>
    <Classes className="AIC" startDay="Saturday"/>
    <Classes className="CNC" startDay="Sunday"/>
    </div>
  )
}

export default App;
