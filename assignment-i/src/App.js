import React from 'react';

import './App.css';
import './components/About'
import Home from './components/Home';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {favorites: []};
  }
  render(){
    return(
      <main>
        <Home/>
      </main>
    );
  };
}

export default App;
