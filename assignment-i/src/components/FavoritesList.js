import React from "react";
class FavoritesList extends React.Component{
    render(){
        return(
            <div className="row text-white">
                   <div className="col-md-1 align-self-center text-center text-dark">
                        <h5>Favorites</h5>
                    </div>
                    <div className="col-md-1 align-self-center ">
                            <img className="img-thumbnail" src="https://image.tmdb.org/t/p/w92/wOBKAoUJZb5qTsWv5XXvVV2vUzz.jpg"/>
                    </div>
                    <div className="col-md-1">
                            <img className="img-thumbnail" src="https://image.tmdb.org/t/p/w92/wOBKAoUJZb5qTsWv5XXvVV2vUzz.jpg"/>
                    </div>

                </div>
        );
    }
};
export default FavoritesList;