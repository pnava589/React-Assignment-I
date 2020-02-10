import React from "react";
class MovieList extends React.Component{
    render(){
        return(
                <div className="col-md-8 align-self-center text-center bg-light border border-dark">
                    <h5 clasName="col">List/Matches</h5>
                    <div className="col">
                        {this.props.movies.length + " movies available"}
                    </div>
                    <div className="col">
                        
                    </div>
                    
                </div>     
        );
    };
}
export default MovieList;