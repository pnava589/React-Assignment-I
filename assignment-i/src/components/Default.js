import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";
import { CSSTransition } from "react-transition-group";
import data from "../movies-brief.json"
class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites, noResult: false, query: "All Movies",
                        showFav: this.props.showFav,
                        filter: "",
                        singleMovie: [],
                        showFilter: true
                    };
    }
    filterMovies=(movieList, query)=>{
        if(movieList.length === 0){
            this.setState({noResult: true, filter: query});
        }else this.setState({movies: movieList, noResult: false, query: query});
        
    }
    resetState=()=>{
        if(typeof(this.props.filter) !== 'undefined'  ){
            this.setState({movies:this.getInitialFilteredMovieList()});
        }else this.setState({movies:this.getFullMovieList(), noResult: false, query: "All Movies"});
    }
    setMovies=()=>{
        if(typeof (this.props.filter) !== 'undefined'){
            if(this.getInitialFilteredMovieList().length > 0){
              this.setState({movies:this.getInitialFilteredMovieList(), query: this.props.filter.params.filter});
            }
            else{
                let filter = '"Title: '+this.props.filter.params.filter+'"'
                this.setState({noResult: true, filter: filter});
                this.setState({movies:this.getFullMovieList()})
            }
        }else this.setState({movies:this.getFullMovieList()});
    }
    async componentDidMount() {
        this.props.displayLoading(true);
        if(JSON.parse(localStorage.getItem('data')) == null){
            console.log("Local sotrage empty");
            try {
              const url = "https://wwww.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
              const response = await fetch(url);
              const jsonData = await response.json();
              //this.setState( {movies: jsonData } );
              localStorage.setItem('data',JSON.stringify(jsonData));
              this.setState({movies:JSON.parse(localStorage.getItem('data'))});
              }
              catch (error) {
                localStorage.setItem('data',JSON.stringify(data));
                this.setState({movies: data});
              }
        }
        else this.setState({movies:JSON.parse(localStorage.getItem('data'))});
        this.setMovies();
        this.props.setMovies(this.state.movies);
        this.props.displayLoading(false);
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
        if(e.target.name === "rating"){
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
                                });
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
                        <div className="col-md-8 offset-4 bg-danger rounded-pill text-white text-center"><h4>No Results for:{this.state.filter}</h4></div>
                        <CSSTransition
                        in={this.state.showFilter}
                        unmountOnExit
                        timeout={100}
                        classNames="animiation"
                        >
                            <Filter movies={this.state.movies} resetState={this.resetState} filterMovies={this.filterMovies}/>
                        </CSSTransition>
                        <div className="d-flex align-items-center justify-content-start bg-light">
                            {this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-left" onClick={this.toggleFilter}/>}
                            { !this.state.showFilter && <button className="btn btn-dark border fas fa-angle-double-right" onClick={this.toggleFilter}/>}
                        </div>
                        <MovieList movies={this.state.movies} addToFavs={this.props.addToFavs} query={this.state.query} getDetails={this.props.getDetails} sortBy={this.sortBy}/>
                    </div>
                    
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid" >
                    <FavoritesList favorites={this.state.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                    <div className="row">
                        <CSSTransition
                        in={this.state.showFilter}
                        unmountOnExit
                        timeout={100}
                        classNames="animiation"
                        >
                            <Filter movies={this.state.movies} resetState={this.resetState} filterMovies={this.filterMovies}/>
                        </CSSTransition>
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