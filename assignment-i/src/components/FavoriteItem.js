import React from "react";
class FavoriteItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {poster: this.props.poster, title: this.props.title};
    };
    render(){
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.state.poster;
        return(
            <div className="col-md-1 align-self-center ">
                            <img className="img-thumbnail" src={imgUrl} alt={this.state.title}/>
            </div>
        );
    }
};
export default FavoriteItem;