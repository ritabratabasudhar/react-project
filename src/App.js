import React from 'react';
import './App.css';
//import SignUp from './LoginReg/LoginRegister';
import LoginRegister from './LoginReg/LoginRegister';
import Homepage from './HomePage/Homepage';

class App extends React.Component{
  render()
{
  return (
    <div className="App">
      <Homepage/>
        <div><LoginRegister/></div>
       <h1>hello </h1>
      </div>
  );
}
}

export default App;
