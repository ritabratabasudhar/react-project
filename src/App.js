import React from 'react';
import './App.css';
//import SignUp from './LoginReg/LoginRegister';
import LoginRegister from './LoginReg/LoginRegister';

class App extends React.Component{
  render()
{
  return (
    <div className="App">
        <div><LoginRegister/></div>

      </div>
  );
}
}

export default App;
