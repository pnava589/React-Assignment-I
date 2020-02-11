import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies};
        
    }
    render(){
        return(
            <div className="container-fluid">
                <br/>
                <FavoritesList />
                <hr/>
                <br/>
                <div className="row">
                    <Filter/>
                    <MovieList movies={this.state.movies} />
                </div>
            </div>
        );
    }
};

export default Default;