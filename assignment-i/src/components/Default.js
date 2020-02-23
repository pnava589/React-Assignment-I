import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites, noResult: false, query: "All Movies",
                        showFav: this.props.showFav,
                        singleMovie: [],
                        showFilter: true};
        
        
    }

    filterMovies=(movieList)=>{
        this.setState({movies: movieList});
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
    setMovies=()=>{
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
    componentDidMount=()=>{
        this.setMovies();
    }
    

    getInitialFilteredMovieList=()=>{
       
        var tempArray=[];
          
          var tempFilter = this.props.filter.params.filter;
          tempArray = this.getFullMovieList().filter(function(e){
            return e.title.toLowerCase().includes(tempFilter.toLowerCase()); 
          });
          return tempArray;
        
         
    }
    sortBy=(e)=>{
        if(e.target.name == "rating"){
            this.state.movies.sort((a,b) =>{ if(a.ratings.average> b.ratings.average){return 1}
                                        if(a.ratings.average< b.ratings.average){return -1}       
                                        return 0;})
        }else{
            this.state.movies.sort((a,b) =>{ if(a[e.target.name]> b[e.target.name]){return 1}
                                        if(a[e.target.name]< b[e.target.name]){return -1}       
                                        return 0;})
        }
    }
    getFullMovieList=()=>{
        let sorted_list = JSON.parse(localStorage.getItem('data'));
        sorted_list.sort((a,b)=>{ if(a.title> b.title) {return 1}
                                    if(a.title< b.title) {return -1}
                                    return 0;
                                })
        return sorted_list; 
    }
    toggleFilter=()=>{
        if(this.state.showFilter) this.setState({showFilter: false});
        else this.setState({showFilter: true});
    }
    render(){
        
        if (this.state.noResult){
            return(
                <div className="container-fluid">
                    <FavoritesList favorites={this.state.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                    <div className="row">
                        <div className="col-md-8 offset-4 bg-danger rounded-pill text-white text-center"><h4>No Movies Related to: "{this.props.filter.params.filter}"</h4></div>
                        {this.state.showFilter && <Filter movies={this.state.movies} addFilter={this.addFilter} resetState={this.resetState} addYearFilter={this.addYearFilter} filterMovies={this.filterMovies}/>}
                        <div className="d-flex align-items-center justify-content-start bg-light">
                            {this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-left" onClick={this.toggleFilter}/>}
                            { !this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-right" onClick={this.toggleFilter}/>}
                        </div>
                        <MovieList movies={this.state.movies} addToFavs={this.props.addToFavs} query={"All Movies"} getDetails={this.props.getDetails} sortBy={this.sortBy}/>
                    </div>
                    
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid">
                    <FavoritesList favorites={this.state.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                    <div className="row">
                        {this.state.showFilter && <Filter movies={this.state.movies} addFilter={this.addFilter} resetState={this.resetState} addYearFilter={this.addYearFilter} filterMovies={this.filterMovies}/>}
                        <div className="d-flex align-items-center justify-content-start bg-light">
                            {this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-left" onClick={this.toggleFilter}/>}
                            { !this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-right" onClick={this.toggleFilter}/>}
                        </div>
                        <MovieList movies={this.state.movies} addToFavs={this.props.addToFavs} query={this.state.query} getDetails={this.props.getDetails} sortBy={this.sortBy}/>
                    </div>
                    
                </div>
            );
        }
        
    }
};

export default Default;