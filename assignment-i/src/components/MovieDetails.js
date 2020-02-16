import React from "react";

class MovieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: this.props.movie};
    }
    render(){
        return(
            <div className="col-md-6">
                <div className="row bg-light">
                    <h4 className="col-md-12 text-left">
                        {this.state.movie.title}
                    </h4>
                    
                    <img className="col-md-5" src="https://image.tmdb.org/t/p/w500/w9Z7A0GHEhIp7etpj0vyKOeU1Wx.jpg"/>
                   
                    <div className="col-md-6 offset-md-1">
                        Bio and shit
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}
export default MovieDetails;