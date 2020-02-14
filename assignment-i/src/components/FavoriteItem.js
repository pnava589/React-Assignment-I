import React from "react";
class FavoriteItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {poster: this.props.poster, title: this.props.title, id: this.props.id};
    };
    remove=()=>{
        this.props.remove(this.state.id);
    }
    render(){
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.state.poster;
        return(
            <div className="col-md-1 align-self-center ">
                <button type="button" className="close" aria-label="Close" onClick={this.remove}>
                    <span aria-hidden="true">&times;</span>
                </button>
                    <img className="img-thumbnail" src={imgUrl} alt={this.state.title} title={this.state.title}/>
            </div>
        );
    }
};
export default FavoriteItem;