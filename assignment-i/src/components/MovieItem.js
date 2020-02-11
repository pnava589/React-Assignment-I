import React from "react";
class MovieItem extends React.Component{
    render(){
        return(
            <div className="row">
                        <div className="col-md-6">
                            Title
                        </div>
                        <div className="col-md-3">
                            Year
                        </div>
                        <div className="col-md-3">
                            Rating
                        </div>
            </div>
        );
    }
}
export default MovieItem;