import React from "react";
import Details from "./Details";

class MovieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: this.props.movie};
    }
   
    render(){
        const posterUrl = "https://image.tmdb.org/t/p/w500"+this.state.movie.poster;
        return(
            <div className="col-md-7">
                <div className="row bg-light">
                    <div className="col-md-12">
                        <br/>
                    </div>
                    <h4 className="col-md-6 text-left">
                        {this.state.movie.title}
                    </h4>
                    <div className="col-md-5 offset-md-1">
                        <button className="btn btn-primary">
                            Add to Favorites
                        </button>
                    </div>
                    
                    <img className="col-md-6" src={posterUrl}/>
                   
                    <div className="col-md-6 ">
                        
                        <div className="col-md-12">
                            <br></br>
                            <h6>Details:</h6>
                            <Details movie={this.state.movie}/>
                        </div>
                        <br/>
                        <div className="col-md-12 rounded border border-info">
                            <h6>Companies:</h6> 
                            <div className="col-md-12">
                                {this.state.movie.production.companies.map(m => m.name+", ")}
                            </div>
                        </div>
                        <br/>
                        <div className="col-md-12 col-md-12 rounded border border-info">
                            <h6>Countries:</h6> 
                            <div className="col-md-12">
                                {this.state.movie.production.countries.map(m => m.name+", ")}
                            </div>
                        </div>
                        <br/>
                        <div className="col-md-12 col-md-12 rounded border border-info">
                            <h6>Keywords:</h6>
                            <div className="col-md-12">
                                {this.state.movie.details.keywords.map(m => m.name+", ")}
                            </div> 
                        </div>
                        <br/>
                        <div className="col-md-12 col-md-12 rounded border border-info">
                            <h6>Genres:</h6>
                            {this.state.movie.details.genres.map(m => m.name+", ")}
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}
export default MovieDetails;