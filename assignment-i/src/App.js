import React from 'react';

import './App.css';
import './components/About'
import Home from './components/Home';
import Default from './components/Default';
import { Route } from 'react-router-dom';
import About from './components/About';
import DefaultHeader from './components/DefaultHeader';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {favorites: []};
  }
  render(){
    return(
      <main >
        <DefaultHeader />
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/default' exact component={Default} />
        <Route path='/about' exact component={About}/>
      </main>
    );
  };
}

export default App;
