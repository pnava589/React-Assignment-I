import React from "react";
import Details from "./Details";
import Stars from "./Stars";
import {Modal} from "react-bootstrap";
class MovieDeailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: this.props.movie, show:false};
    }
    componentDidUpdate =(prevProps, prevState) =>{
        if(prevProps.movie.id != this.props.movie.id){
            this.setState({movie: this.props.movie});
        }
    }
    close=()=>{
        this.setState({show:false});
    }
    showModal=()=>{
        this.setState({show:true});
    }
    render(){
        const posterUrl = "https://image.tmdb.org/t/p/w342"+this.state.movie.poster;
        const largeUrl = "https://image.tmdb.org/t/p/w780"+this.state.movie.poster;
        const errorMsg = <h6 className="text-danger">No info available</h6>;
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
                            
                                <img className="col-md-6" onClick={this.showModal} src={posterUrl}
                                alt={this.state.movie.title} />
                            
                             
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
                                        <ul>
                                        {this.state.movie.production.companies !== null && this.state.movie.production.companies.map(m => <li>{m.name}</li>)}
                                        {this.state.movie.production.companies === null && errorMsg}
                                        </ul>
                                        
                                    </div>
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Countries:</h6> 
                                    <div className="col-md-12">
                                        <ul>
                                        
                                        {this.state.movie.production.countries !== null && this.state.movie.production.countries.map(m => <li>{m.name}</li>)}
                                        {this.state.movie.production.countries === null && errorMsg}
                                            
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Keywords:</h6>
                                    <div className="col-md-12">
                                        <ul>
                                        {this.state.movie.details.keywords != null && this.state.movie.details.keywords.map(m => <li>{m.name}</li> )}
                                        {this.state.movie.details.keywords === null && errorMsg}
                                        </ul>
                                    </div> 
                                </div>
                                <br/>
                                <div className="col-md-12 col-md-12 rounded border border-info">
                                    <h6>Genres:</h6>
                                    <div className="col-md-12">
                                        <ul>
                                        {this.state.movie.details.genres != null && this.state.movie.details.genres.map(m => <li>{m.name}</li> )}
                                        {this.state.movie.details.genres === null && errorMsg}
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    <br/>
                    <Modal size="lg"
                            show={this.state.show}
                            aria-labelledby="example-modal-sizes-title-lg">
                                <div className="container">
                                    <div className="row">
                                    <h2 className="col-md-12">{this.state.movie.title}</h2>
                                    </div>
                                <div className="row">
                                    <img className="col-md-12"src={largeUrl}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <a href="#"className="btn btn-primary float-right" onClick={this.close}>Close</a>
                                    </div>
                                    
                                </div>
                            </div>     
                    </Modal>
                    </div>
        );
    }
}
export default MovieDeailView;