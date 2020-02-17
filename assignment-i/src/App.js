import React from 'react';

import './App.css';
import './components/About'
import Home from './components/Home';
import Default from './components/Default';
import { Route } from 'react-router-dom';
import About from './components/About';
import DefaultHeader from './components/DefaultHeader';
import MovieDetails from './components/MovieDetails';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies:[], favorites:[], singleDetail: []};
  }
  
  async componentDidMount() {
    if(JSON.parse(localStorage.getItem('data')) == null){
        console.log("Local sotrage empty");
        try {
          const url = "http://wwww.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
          const response = await fetch(url);
          const jsonData = await response.json();
          //this.setState( {movies: jsonData } );
          localStorage.setItem('data',JSON.stringify(jsonData));
          this.setState({movies:JSON.parse(localStorage.getItem('data'))});
          }
          catch (error) {
          console.error(error);
          }
    }
    else this.setState({movies:JSON.parse(localStorage.getItem('data'))});
   
    
   }

   addToFavs = (id,poster,title) =>{
    let temp = this.state.favorites;
    temp.push({id: id, poster: poster, title: title});
    this.setState({favorites: temp});
    }
  render(){
   
    return(

      <main>
        
        <DefaultHeader />
        
        <Route path='/' exact render={(props)=><Home filterMovies={this.filterMovies}/>} />
        <Route path='/home' exact render={(props)=><Home filterMovies={this.filterMovies}/>} />
        <Route path='/default' exact render={(props)=><Default movies={this.state.movies} favorites={this.state.favorites} addToFavs={this.addToFavs}/>} />
        <Route path="/default/:filter" render={({match})=><Default movies={this.state.movies} filter={match} favorites={this.state.favorites} addToFavs={this.addToFavs}/>} />
        <Route path="/details/:id" exact render={({match})=><MovieDetails movie={match} favorites={this.state.favorites} addToFavs={this.addToFavs}/>}/>
        
        <Route path='/about' exact component={About}/>
        
      </main>
    );
  }
}

export default App
