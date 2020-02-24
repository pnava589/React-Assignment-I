import React from "react";
import FavoritesList from "./FavoritesList";
import CastCrewDetails from "./CastCrewDetails";
import CastView from "./CastView";
import MovieDeailView from "./MovieDetailView";
import { Link } from "react-router-dom";

class MovieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: [], movieDets: true, cast: [], castId: 0};
    }
    castView=(e)=>{
        const id = e.target.value;
        const url = "https://api.themoviedb.org/3/person/"+id+"?api_key=c79963923fcbed164629915d65ccdfba";
        fetch(url).then(response => response.json()).then(data => this.setState({cast: data, movieDets: false}));
    
    }
    movieDetails=()=>{
        this.setState({movieDets: true});
    }
    componentDidMount =() =>{
            this.props.displayLoading(true);
            const id = this.props.movie.params.id;
            const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id="+id;
            fetch(url).then(response => response.json())
            .then(data => {this.setState({movie: data}); this.props.displayLoading(false)})
            .catch(error=>{console.error(error); this.props.displayLoading(false)});
    }
    componentDidUpdate =(prevProps, prevState) =>{
        if(prevProps.movie.params.id !== this.props.movie.params.id){
            const id = this.props.movie.params.id;
            const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id="+id;
            fetch(url).then(response => response.json()).then(data => this.setState({movie: data}))
            .catch(error=>{console.error(error); this.props.displayLoading(false)});
        }
    }
    addToFavs=()=>{
        this.props.addToFavs(this.state.movie.id, this.state.movie.poster, this.state.movie.title);
    }
    render(){
        if(this.state.movie.id>0){
        return(
            <div className="container-fluid">
                <FavoritesList favorites={this.props.favorites} hideFavComp={this.props.hideFavComp} showFav={this.props.showFav}/>
                <div className="row">
                   <div className="row col-md-12 justify-content-end" style={{marginBottom: "1em"}}>
                            <Link className="btn btn-primary" to="/default">
                                            Show All Movies
                            </Link>
                   </div>
                        
                    {!this.state.movieDets &&<CastView movieDetails={this.movieDetails} cast={this.state.cast} castId={this.state.castId}/>}
                    {this.state.movieDets && <MovieDeailView movie={this.state.movie} addToFavs={this.addToFavs}/>}
                    <div className="col-md-5" style={{paddingLeft: "2em", paddingRight: "2em"}}>
                        <div className="row bg-light">
                        <CastCrewDetails cast={this.state.movie.production.cast} 
                                        crew={this.state.movie.production.crew}
                                        castDetails={this.castView}/>
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