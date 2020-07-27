import React from 'react';
import './App.css';
import LoginRegister from './LoginReg/LoginRegister';
import Homepage from './HomePage/Homepage';

class App extends React.Component
{
  render()
{
  return (
    <div className="App">
      <Homepage/>
        <div><LoginRegister/></div>
      </div>
  );
}
}

export default App;
