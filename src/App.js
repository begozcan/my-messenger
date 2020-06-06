import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.scss';
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
          <Navbar />
      </header>
      <Counter />
    </div>
  );
}

export default App;
