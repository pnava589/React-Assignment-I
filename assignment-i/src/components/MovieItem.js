import React from "react";
import {Link} from "react-router-dom";
class MovieItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: this.props.title, year: this.props.year, rating: this.props.rating, poster: this.props.poster, id: this.props.id};
        
    };
    addToFav = () =>{
        
        this.props.addToFavs(this.state.id, this.state.poster, this.state.title);
    };
    getDetails=() =>{
        this.props.getDetails(this.state.id);
    }
    render(){
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.state.poster;
        return(
            <div className="row">
                        <div className="col-md-1">
                            <Link to={`/details/${this.state.id}`} id={this.state.id}><img className="img-thumbnail" src={imgUrl} alt={this.title}/></Link>
                        </div>
                        <div className="col-md-5 align-self-center text-center">
                            <Link className="text-dark"to={`/details/${this.state.id}`} id={this.state.id}><h6>{this.state.title}</h6></Link>
                        </div>
                        <div className="col-md-3 align-self-center text-center">
                            {new Date(this.state.year).getFullYear()}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            {this.state.rating}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            <button className="btn btn-danger" onClick={this.addToFav}><i className="fas fa-heart"></i></button>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <Link className="btn btn-primary" to={`/details/${this.state.id}`} id={this.state.id}>View</Link>
                        </div>
            </div>
        );
    }
}
export default MovieItem;