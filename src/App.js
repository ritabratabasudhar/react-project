import React from 'react';
import './App.css';
import Homepage from './HomePage/Homepage';
import MenuBar from './HomePage/menubar';
import { Router, Route, Switch} from 'react-router-dom'
import LoginRegister from './LoginReg/LoginRegister';
import history from './History/history'
import DestinationList from './DestinationList/DestinationList';
import Checkout from './Checkout/Checkout';
import Profile from './HomePage/myProfile';

class App extends React.Component
{
  render()
{
  return (
    <div className="App">
      <MenuBar/>
      
      <Router history={history}>
      <Switch>
      <Route exact path= '/react-project/'component= {Homepage}/>
      <Route  path="/react-project/login" component ={LoginRegister}/>
      <Route path="/react-project/destinationList" component={DestinationList}/>
      <Route path="/react-project/checkout" component={Checkout}/>  
      <Route path="/react-project/profile"  component={Profile}/>
      </Switch>
      </Router>
      </div>
  );
}
}

export default App;
