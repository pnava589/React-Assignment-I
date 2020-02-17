import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetails from "./MovieDetails";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites, noResult: false, query: "All Movies",
                        showFav: this.props.showFav,
                        singleMovie: []};
        
        
    }

    
    addYearFilter=(filter)=>{
        console.log(this.state.movies);
      
        let tempArray = this.state.movies;
        if(filter.name=='before')
            {
                let results = tempArray.filter((e)=> new Date(e.release_date).getFullYear() < filter.value);
                this.setState({movies:results});
            }

        else if(filter.name=='after')
            {
                let results = tempArray.filter((e)=> new Date(e.release_date).getFullYear() > filter.value);
                this.setState({movies:results});   
            }
        
        }
        
    
    
    resetState=()=>{
        console.log(this.props.filter);
        
        if(typeof(this.props.filter) !== 'undefined'  ){
            this.setState({movies:this.getInitialFilteredMovieList()});
    
        }
        else this.setState({movies:this.getFullMovieList()});
    
    }


    
    

    addFilter=(input)=>{

        console.log(input);
        if(typeof(input.value) !== 'undefined'){
            if(input.value.length !== 0){
                let filteredMovies = this.state.movies.filter((movie)=>{
                    return movie[input.name].toLowerCase().includes(input.value.toLowerCase())
                });
           this.setState({movies:filteredMovies},this.printState());
           //console.log(filteredMovies);
            
       }
       console.log(this.state.movies);
      
     }
    }

    printState=()=>{
        console.log(this.state.movies);
    }

    componentDidMount=()=>{
        console.log(this.props.filter);

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
    
    getDetails=(id)=>{
        const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id="+id;
        fetch(url).then(response => response.json()).then(data => this.setState({singleMovie: data}));
    }
    render(){
        console.log(this.state.movies);
        if (this.state.noResult){
            return(
                <div className="container-fluid">
                    <FavoritesList favorites={this.state.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                    <div className="row">
                        <div className="col-md-8 offset-4 bg-danger rounded-pill text-white text-center"><h4>No Movies Related to: "{this.props.filter.params.filter}"</h4></div>
                        <Filter addFilter={this.addFilter} resetState={this.resetState} addYearFilter={this.addYearFilter}/>
                        <MovieList movies={this.state.movies} addToFavs={this.props.addToFavs} query={"All Movies"} getDetails={this.props.getDetails}/>
                    </div>
                    
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid">
                    <FavoritesList favorites={this.state.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                    <div className="row">
                        <Filter addFilter={this.addFilter} resetState={this.resetState} addYearFilter={this.addYearFilter}/>
                        <MovieList movies={this.state.movies} addToFavs={this.props.addToFavs} query={this.state.query} getDetails={this.props.getDetails}/>
                        {this.state.singleMovie.id > 0 && <MovieDetails movie={this.state.singleMovie} addToFavs={this.addToFavs}/>}
                    </div>
                    
                </div>
            );
        }
        
    }
};

export default Default;