import React from 'react';

import './App.css';
import './components/About'
import Home from './components/Home';
import Default from './components/Default';
import { Route } from 'react-router-dom';
import About from './components/About';
import DefaultHeader from './components/DefaultHeader';
import * as cloneDeep from '../node_modules/lodash/cloneDeep.js';

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
        //this.setState( {movies: jsonData } );
        localStorage.setItem('data',JSON.stringify(jsonData));
        
        }
        catch (error) {
        console.error(error);
    }
   }

   

   filterMovies =(data)=>{
    
      var getData = JSON.parse(localStorage.getItem('data'));
      var tempArray=[];
      if(data.typeOfSearch == 'matching'){
      tempArray = getData.filter(function(e){
      return e.title.toLowerCase().indexOf(data.userInput.toLowerCase()) > 1; 
      })
      this.setState({movies:tempArray});
      
      }
      else this.setState({movies:getData});
   
  }
  
  render(){
   
    return(

      <main>
        <DefaultHeader />
        
        <Route path='/home' exact render={(props)=><Home filterMovies={this.filterMovies}/>} />
        
        <Route path='/default' exact render={(props)=><Default movies={this.state.movies}/>} />
        
        <Route path='/about' exact component={About}/>
      </main>
    );
  }
}

export default App
