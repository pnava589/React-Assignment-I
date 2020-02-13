import React from "react";
import MovieItem from "./MovieItem";
class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.movies};
    }
    render(){
        return(
                <div className="col-md-8 offset-md-1 align-self-center text-center bg-light">
                    <br/>
                    <h5 className="col">Search: {this.props.query}</h5>
                    <hr/>
                    
                    <div className="container">
                    <div className="row">
                        <b className="col-md-5 offset-md-1 align-self-center text-center">
                            Title
                        </b>
                        <b className="col-md-3 align-self-center text-center">
                            Year
                        </b>
                        <b className="col-md-1 align-self-center text-left">
                            Rating
                        </b>
                    </div>
                    

                    <div className="container" style={{height: "26em", overflowY: "scroll"}}>
                    {this.props.movies.map((p)=><MovieItem title={p.title} 
                                                                key={p.id} 
                                                                year={p.release_date}
                                                                rating={p.ratings.average}
                                                                poster={p.poster}
                                                                id={p.id}
                                                                addToFavs={this.props.addToFavs}  />)}
                    </div>
                    </div>
                </div>     
        );
    };
}
export default MovieList;