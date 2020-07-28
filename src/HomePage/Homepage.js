import React, { Component } from 'react';
import MenuBar from './menubar';
import SearchAppBar from './searchbar';
import Carousel from './carasoul';
import Body from './body';
import Footer from './Footer';

class HomePage extends Component {
  state = {  }
  render() { 
    return (  
    <div style={{}}>
      <MenuBar/>
      <Carousel/>
      <SearchAppBar/>
      <Body/>
      <Footer/>
    </div>);
  }
}
 export default HomePage
