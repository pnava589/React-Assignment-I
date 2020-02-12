import React from "react";
class MovieItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: this.props.title, year: this.props.year, rating: this.props.rating, poster: this.props.poster, id: this.props.id};
        
    };
    addToFav = () =>{
        
        this.props.addToFavs(this.state.id, this.state.poster);
    };
    render(){
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.state.poster;
        return(
            <div className="row">
                        <div className="col-md-1">
                            <img className="img-thumbnail" src={imgUrl}/>
                        </div>
                        <div className="col-md-5 align-self-center text-center">
                            <h6>{this.state.title}</h6>
                        </div>
                        <div className="col-md-3 align-self-center text-center">
                            {new Date(this.state.year).getFullYear()}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            {this.state.rating}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            <button className="btn btn-primary" onClick={this.addToFav}><i className="fas fa-heart"></i></button>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <button className="btn btn-primary">View</button>
                        </div>
            </div>
        );
    }
}
export default MovieItem;