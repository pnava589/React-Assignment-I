import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites};
        
        
    }
    addToFavs = (id,poster) =>{
        let temp = this.state.favorites;
        temp.push({id: id, poster: poster});
        this.setState({favorites: temp});
    }

    addFilter=(input,filterName)=>{
        alert('hello');
      }

    componentDidMount=()=>{
        console.log(this.state.filter);

          var tempArray=[];
          if(typeof (this.props.filter) !== 'undefined'){
          var tempFilter = this.props.filter.params.filter;
          tempArray = this.state.movies.filter(function(e){
            return e.title.toLowerCase().indexOf(tempFilter.toLowerCase()) >= 0; 
          })
          if(tempArray.length > 0){
            this.setState({movies:tempArray});
          }
         
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                <br/>
                <FavoritesList favorites={this.state.favorites} />
                <hr/>
                <br/>
                <div className="row">
                    <Filter addFilter={this.addFilter}/>
                    <MovieList movies={this.state.movies} addToFavs={this.addToFavs}/>
                </div>
            </div>
        );
    }
};

export default Default;