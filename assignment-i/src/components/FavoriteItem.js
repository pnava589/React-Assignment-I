import React from "react";
import { Link } from "react-router-dom";

class FavoriteItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {poster: this.props.poster, title: this.props.title, id: this.props.id};
    };
    remove=()=>{
        this.props.remove(this.state.id);
    }
    render(){
        const closeStyle = {
            position: "absolute",
            top: "0px",
            right: "15px",
            paddingTop: "0",
            marginTop: "0",
            marginRight: "2px",
            color: "red"
        }
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.state.poster;
        return(
            <div className="col-md-1 align-self-center">
                <button type="button" style={closeStyle} className="close" aria-label="Close" onClick={this.remove}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Link to={`/details/${this.state.id}`} id={this.state.id}>
                    <img className="img-thumbnail" src={imgUrl} alt={this.state.title} title={this.state.title}/>
                </Link>
                   
            </div>
        );
    }
};
export default FavoriteItem;