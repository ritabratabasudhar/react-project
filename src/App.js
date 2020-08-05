import React from 'react';
import './App.css';
import Homepage from './HomePage/Homepage';
import MenuBar from './HomePage/menubar';
import { Router, Route, Switch} from 'react-router-dom'
import LoginRegister from './LoginReg/LoginRegister';
import history from './History/history'
import DestinationList from './DestinationList/DestinationList';

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
    
      </Switch>
      </Router>
      </div>
  );
}
}

export default App;
