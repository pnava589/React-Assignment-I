import React from "react";
import MovieItem from "./MovieItem";
class MovieList extends React.Component{
    render(){
        return(
                <div className="col-md-8 offset-md-1 align-self-center text-center bg-light">
                    <br/>
                    <h5 className="col">List/Matches</h5>
                    <hr/>
                    <div className="row">
                        <b className="col-md-6">
                            Title
                        </b>
                        <b className="col-md-3">
                            Year
                        </b>
                        <b className="col-md-3">
                            Rating
                        </b>
                    </div>
                    <div className="container">

                    
                    {this.props.movies.map((p)=><MovieItem title={p.title} 
                                                                key={p.id} 
                                                                year={p.release_date}
                                                                rating={p.ratings.average}
                                                                poster={p.poster}  />)}
                    
                    </div>
                </div>     
        );
    };
}
export default MovieList;