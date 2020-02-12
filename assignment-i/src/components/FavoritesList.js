import React from "react";
import FavoriteItem from "./FavoriteItem";
class FavoritesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {favorites: this.props.favorites}
    }
    render(){
        return(
            <div className="row text-white">
                   <div className="col-md-1 align-self-center text-center text-dark">
                        <h5>Favorites</h5>
                    </div>
                    {this.state.favorites.map((f)=><FavoriteItem 
                                                    poster={f.poster}
                                                    key={f.id}/>)}

                </div>
        );
    }
};
export default FavoritesList;