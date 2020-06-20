import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Akki from './component/Akki'
import NavBar from './component/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
     <Akki />
    </div>
  );
}

export default App;
