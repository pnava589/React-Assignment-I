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
        //this.setState( {movies: jsonData } );
        localStorage.setItem('data',JSON.stringify(jsonData));
        
        //console.log(getData[0].id);
        }
        catch (error) {
        console.error(error);
    }
   }

   filterMovies = (data)=>{
    var getData = JSON.parse(localStorage.getItem('data'));
    var filteredData =[];
    var filtered = getData.filter(function(e){
      return e.title.toLowerCase().includes(data.input.toLowerCase());
    })
    
    /*for(var i=0; i<getData.length; i++){
      for(var index=0; index < getData[0]; index++){
        if(data.lowercase())
      }
    }*/


    //console.log(input);
    console.log(filteredData);
    
   


   }
  
  render(){
   
    return(

      <main>
        <DefaultHeader />
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={(props)=> <Home filterMovies={this.filterMovies}/>} />
        <Route path='/default' exact component={(props)=> <Default movies={this.state.movies}/>} />
        <Route path='/about' exact component={About}/>
      </main>
    );
  };
}

export default App;
