import React from "react";
import FavoriteItem from "./FavoriteItem";
class FavoritesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {favorites: this.props.favorites}
    }
    remove=(id)=>{
        const indexOfFav = this.state.favorites.find(f => f.id === id);
        let ind = this.state.favorites.indexOf(indexOfFav);
        this.state.favorites.splice( ind , 1);
        this.setState(this.state);
    }
    render(){
        if(this.props.showFav){
            return(
                <div className="col-md-12">
                    <br/>
                    <div className="row text-white">
                        <div className="col-md-1 align-self-center text-center text-dark">
                                <h5>Favorites</h5>
                            </div>
                            {this.state.favorites.map((f)=><FavoriteItem 
                                                            poster={f.poster}
                                                            key={f.id}
                                                            id={f.id}
                                                            title={f.title}
                                                            remove={this.remove}/>)}
    
                    </div>
                    <button className="btn btn-dark" onClick={this.props.hideFavComp}><i className="fas fa-angle-double-up"></i></button>
                    <hr/>
                    <br/>
                </div>
            );
        }else{
            return(
                <div className="col-md-12">
                    <br/>
                    <button className="btn btn-dark" onClick={this.props.hideFavComp}>
                        <i className="fas fa-angle-double-down"></i>
                    </button>
                    <hr/>
                    <br/>
                </div>
            );
        }
        
    }
};
export default FavoritesList;