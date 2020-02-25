import React from 'react';

import './App.css';
import './components/About'
import Home from './components/Home';
import Default from './components/Default';
import { Route } from 'react-router-dom';
import DefaultHeader from './components/DefaultHeader';
import MovieDetails from './components/MovieDetails';
import {Modal} from "react-bootstrap";
import loading from "./loading.gif";
import { CSSTransition } from "react-transition-group";
import "./animation.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies:[], favorites:[], singleMovie: [], showFav: true, loaded: false};
  }
  setMovies=(movies)=>{
    this.setState({movies:movies});
  }
  addToFavs = (id,poster,title) =>{
    let check = this.state.favorites.find(f=> f.id === id);
    if(check == null){
      let temp = this.state.favorites;
      temp.push({id: id, poster: poster, title: title});
      this.setState({favorites: temp});
    }
    else{
      alert(title+" is already in your favorites");
    }
  }
  hideFavComp=(current)=>{
      if(this.state.showFav){ this.setState({showFav: false}) }
      else{ this.setState({showFav: true}) }
  }
  displayLoading=(value)=>{
    this.setState({loaded: value});
  }
  render(){
   
    return(

      <main>
        
        <DefaultHeader/>
        <Modal
          size="sm"
          show={this.state.loaded}
          centered
        >
          <div className="row justify-content-center bg-transparent align-middle">
            <img alt="loading" src={loading}/>
          </div>
        </Modal>
        <Route path='/' exact render={({props})=><Home filterMovies={this.filterMovies}/>} />
                    
        <Route path='/home' exact render={(props)=><Home filterMovies={this.filterMovies}/>} />
        <Route path='/default' exact render={({match})=><CSSTransition
                                                          in={match!=null}
                                                          appear={true}
                                                          timeout={300}
                                                          unmountOnExit
                                                          classNames="fade">
                                                      <Default movies={this.state.movies}
                                                                          displayLoading={this.displayLoading}
                                                                          setMovies={this.setMovies}
                                                                          favorites={this.state.favorites} 
                                                                          addToFavs={this.addToFavs}
                                                                          showFav={this.state.showFav}
                                                                          hideFavComp={this.hideFavComp}/>
                                                    </CSSTransition>}/>
        <Route path="/default/:filter" render={({match})=><CSSTransition
                                                            in={match!=null}
                                                            appear={true}
                                                            timeout={300}
                                                            unmountOnExit
                                                            classNames="fade">
                                                            <Default movies={this.state.movies}
                                                                          filter={match}
                                                                          setMovies={this.setMovies} 
                                                                          displayLoading={this.displayLoading}
                                                                          favorites={this.state.favorites} 
                                                                          addToFavs={this.addToFavs}
                                                                          showFav={this.state.showFav}
                                                                          hideFavComp={this.hideFavComp}/>
                                                            </CSSTransition>}/>
        <Route path="/details/:id" exact render={({match})=><MovieDetails movie={match} 
                                                                          movies={this.state.movies}
                                                                          displayLoading={this.displayLoading}
                                                                          favorites={this.state.favorites} 
                                                                          addToFavs={this.addToFavs}
                                                                          showFav={this.state.showFav}
                                                                          hideFavComp={this.hideFavComp}/>}/>
      </main>
    );
  }
}

export default App
