import React from "react";
class Details extends React.Component{
    render(){
        const tmdbUrl = "https://www.themoviedb.org/movie/"+this.props.movie.tmdb_id;
        const imdbUrl ="https://www.imdb.com/title/"+this.props.movie.imdb_id;
        return(
            <div style={{height: "10em", overflowY: "scroll"}}>
            <div className="col-md-12">
                <u>Release Date:</u> {this.props.movie.release_date}
            </div>
            <div className="col-md-12">
                <u>Run Time:</u> {this.props.movie.runtime} Minutes
            </div>
            <div className="col-md-12">
                <u>Revenue:</u> {this.props.movie.revenue}
            </div>
            <div className="col-md-12">
                <u>Tagline:</u> {this.props.movie.tagline}
            </div>
            <div className="col-md-12">
               <u>Overview:</u> {this.props.movie.details.overview}
            </div>
            <div className="col-md-12">
            <a href={imdbUrl}>IMDB link</a>
            </div>
            <div className="col-md-12">
                <a href={tmdbUrl}>TMDB link</a>
            </div>
            <div className="col-md-12">
                <u>Ratings</u>
            </div>
        </div>
        );
    }
    
}
    
export default Details;