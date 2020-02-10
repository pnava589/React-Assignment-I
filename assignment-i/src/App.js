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
    this.state = {movies:[], favorites:[]};
  }

  async componentDidMount() {
    try {
        const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
        const response = await fetch(url);
        const jsonData = await response.json();
        this.setState( {movies: jsonData } );
        }
        catch (error) {
        console.error(error);
    }
   }
  
  render(){
   
    return(

      <main>
        <DefaultHeader />
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/default' exact component={(props)=> <Default movies={this.state.movies}/>} />
        <Route path='/about' exact component={About}/>
      </main>
    );
  };
}

export default App;
