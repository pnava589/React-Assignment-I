import React from "react";
import Details from "./Details";
import { Link } from "react-router-dom";
import FavoritesList from "./FavoritesList";
import Stars from "./Stars";
import CastCrewDetails from "./CastCrewDetails";

class MovieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: []};
    }
    componentDidMount =() =>{
            const id = this.props.movie.params.id;
            const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id="+id;
            fetch(url).then(response => response.json()).then(data => this.setState({movie: data}));
            
          
    }
    addToFavs=()=>{
        this.props.addToFavs(this.state.movie.id, this.state.movie.poster, this.state.movie.title);
    }
    render(){
        if(this.state.movie.id>0){
        console.log(this.state.movie.id);
        const posterUrl = "https://image.tmdb.org/t/p/w500"+this.state.movie.poster;
        return(
            <div className="container-fluid">
                <FavoritesList favorites={this.props.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row bg-light">
                            <div className="col-md-12">
                                <br/>
                            </div>
                            <h4 className="col-md-6 text-left">
                                {this.state.movie.title}
                            </h4>
                            <div className="col-md-5 offset-md-1">
                                <button className="btn btn-primary" onClick={this.addToFavs}>
                                    Add to Favorites
                                </button>
                                <Link className="btn btn-primary" to="/default">
                                        Close
                                </Link>
                            </div>
                            
                            <img className="col-md-6" src={posterUrl}/>
                        
                            <div className="col-md-6 ">
                                <Stars num_stars={this.state.movie.ratings.average}/>
                                
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
                    <div className="col-md-5" style={{paddingLeft: "2em", paddingRight: "2em"}}>
                        <div className="row bg-light">
                        <CastCrewDetails cast={this.state.movie.production.cast} 
                                        crew={this.state.movie.production.crew}/>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}
export default MovieDetails;