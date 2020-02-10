import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="container-fluid">
                <FavoritesList />
                <br/>
                <div className="row">
                    <Filter/>
                    <MovieList movies={this.props.movies} />
                </div>
            </div>
        );
    }
};

export default Default;