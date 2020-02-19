import React from "react";
import Details from "./Details";
import Stars from "./Stars";
import ModalImage from "react-modal-image";
class MovieDeailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: this.props.movie};
    }
    componentDidUpdate =(prevProps, prevState) =>{
        if(prevProps.movie.id != this.props.movie.id){
            this.setState({movie: this.props.movie});
        }
    }
    render(){
        const posterUrl = "https://image.tmdb.org/t/p/w342"+this.state.movie.poster;
        const largeUrl = "https://image.tmdb.org/t/p/w780"+this.state.movie.poster;
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
                                <button className="btn btn-primary" onClick={this.props.addToFavs}>
                                    Add to Favorites
                                </button>
                                
                            </div>
                            
                            <ModalImage className="col-md-6" small={posterUrl}
                            large={largeUrl}/>
                        
                            <div className="col-md-6 " style={{height: "35em", overflowY: "scroll"}}>
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
                                        {this.state.movie.production.companies != null && this.state.movie.production.companies.map(m => m.name+", ")}
                                    </div>
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Countries:</h6> 
                                    <div className="col-md-12">
                                        {this.state.movie.production.countries !=null && this.state.movie.production.countries.map(m => m.name+", ")}
                                    </div>
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Keywords:</h6>
                                    <div className="col-md-12">
                                        {this.state.movie.details.keywords != null && this.state.movie.details.keywords.map(m => m.name+", ")}
                                    </div> 
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Genres:</h6>
                                    {this.state.movie.details.genres != null && this.state.movie.details.genres.map(m => m.name+", ")}
                                </div>
                            </div>
                        </div>
                    <br/>
                    </div>
        );
    }
}
export default MovieDeailView;