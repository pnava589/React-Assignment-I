import React from "react";
class FavoritesList extends React.Component{
    render(){
        return(
            <div className="row bg-secondary text-white">
                    <div className="col-md-1 align-self-center text-center bg-secondary">
                        <h5>Favorites</h5>
                    </div>
                    <div className="col-md-1">
                        <div className="card">
                            <img className="card-img" src="https://image.tmdb.org/t/p/w92/wOBKAoUJZb5qTsWv5XXvVV2vUzz.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card">
                            <img className="card-img" src="https://image.tmdb.org/t/p/w92/wOBKAoUJZb5qTsWv5XXvVV2vUzz.jpg"/>
                        </div>
                    </div>
                </div>
        );
    }
};
export default FavoritesList;