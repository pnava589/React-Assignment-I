import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites, noResult: false, query: "All Movies",
                        showFav: true};
        
        
    }

    resetState=()=>{

        if(this.props.filter !== 'undefined'){
            this.setState({movies:this.getInitialFilteredMovieList()});
    
        }
        else this.setState({movies:this.getFullMovieList()});
    
    }


    
    addToFavs = (id,poster,title) =>{
        let temp = this.state.favorites;
        temp.push({id: id, poster: poster, title: title});
        this.setState({favorites: temp});
    }

    addFilter=(input)=>{
        
        let filteredMovies = this.state.movies.filter((movie)=>{
            return movie[input.name].toLowerCase().includes(input.value.toLowerCase())
        });
        this.setState({movies:filteredMovies});
        
    }

    componentDidMount=()=>{

        if(typeof (this.props.filter) !== 'undefined'){
          if(this.getInitialFilteredMovieList().length > 0){
            this.setState({movies:this.getInitialFilteredMovieList(), query: this.props.filter.params.filter});
          }
          else{
              this.setState({noResult: true, query: this.props.filter.params.filter});
          }
         }
         else this.setState({movies:this.getFullMovieList()});
        }
    

    getInitialFilteredMovieList=()=>{
       
        var tempArray=[];
          
          var tempFilter = this.props.filter.params.filter;
          tempArray = this.getFullMovieList().filter(function(e){
            return e.title.toLowerCase().includes(tempFilter.toLowerCase()); 
          });
          return tempArray;
        
         
    }

    getFullMovieList=()=>{
    
        return JSON.parse(localStorage.getItem('data')); 
    }

   
    render(){
        if (this.state.noResult){
            return(
                <div className="container-fluid">
                    <br/>
                    {this.state.showFav && <FavoritesList favorites={this.state.favorites} />}
                    <button className="btn btn-primary" onClick={this.hideFavComp}><i className="fas fa-angle-double-down"></i></button>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-8 offset-4 bg-danger rounded-pill text-white text-center"><h4>No Movies Related to: "{this.props.filter.params.filter}"</h4></div>
                        <Filter addFilter={this.addFilter} resetState={this.resetState}/>
                        <MovieList movies={this.state.movies} addToFavs={this.addToFavs} query={"All Movies"}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid">
                    <br/>
                    {this.state.showFav && <FavoritesList favorites={this.state.favorites} />}
                    <button className="btn btn-primary" onClick={this.hideFavComp}><i className="fas fa-angle-double-down"></i></button>
                    <hr/>
                    <br/>
                    <div className="row">
                        <Filter addFilter={this.addFilter} resetState={this.resetState}/>
                        <MovieList movies={this.state.movies} addToFavs={this.addToFavs} query={this.state.query}/>
                    </div>
                </div>
            );
        }
        
    }
};

export default Default;