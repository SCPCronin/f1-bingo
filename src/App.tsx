import React from 'react';
import logo from './logo.svg';
import Grid from './components/Grid'
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid rows={3} columns={3}/>
    </div>
  );
}

export default App;
