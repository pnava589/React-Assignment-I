import React from "react";
import MovieItem from "./MovieItem";
class MovieList extends React.Component{
    render(){
        return(
                <div className="col-md-8 offset-md-1 align-self-center text-center bg-light">
                    <h5 clasName="col">List/Matches</h5>
                    <div className="row">
                        <h6 className="col-md-6">
                            Title
                        </h6>
                        <h6 className="col-md-3">
                            Year
                        </h6>
                        <h6 className="col-md-3">
                            Rating
                        </h6>
                    </div>
                    <MovieItem/>
                    <div className="row">
                        {this.props.movies.length + " movies available"}
                    </div>
                    
                </div>     
        );
    };
}
export default MovieList;