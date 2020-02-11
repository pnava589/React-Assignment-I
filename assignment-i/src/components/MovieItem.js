import React from "react";
class MovieItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: this.props.title, year: this.props.year, rating: this.props.rating, poster: this.props.poster};
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
                            {this.state.year}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            {this.state.rating}
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            Heart
                        </div>
                        <div className="col-md-1 align-self-center text-center">
                            View
                        </div>
            </div>
        );
    }
}
export default MovieItem;