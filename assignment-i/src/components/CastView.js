import React from "react";
import ModalImage from "react-modal-image";
class CastView extends React.Component{
   
    render(){
        const posterUrl = "https://image.tmdb.org/t/p/w342"+this.props.cast.profile_path;
        const largeUrl = "https://image.tmdb.org/t/p/w780"+this.props.cast.profile_path;
        console.log(posterUrl);
        return(
                    <div className="col-md-7">
                        <div className="row bg-light">
                            <div className="col-md-12">
                                <br/>
                            </div>
                            <h4 className="col-md-6 text-left">
                                {this.props.cast.name}
                            </h4>
                            <div className="col-md-5 offset-md-1">
                                <button className="btn btn-primary" onClick={this.props.movieDetails}>
                                    Movie Details
                                </button>
                            </div>
                            
                            <ModalImage className="col-md-6" small={posterUrl}
                            large={largeUrl} alt={this.props.cast.name}/>
                        
                            <div className="col-md-6 " style={{paddingTop: "0.5em"}}>
                                <div className="col-md-12 rounded border border-info">
                                    <h6>Details:</h6> 
                                    <div className="col-md-12">
                                      Born: {this.props.cast.birthday}, {this.props.cast.place_of_birth}
                                    </div>
                                    <br/>
                                    <div className="col-md-12">
                                      <a href={"https://www.imdb.com/name/"+this.props.cast.imdb_id}>IMDB Link:</a> 
                                    </div>
                                    <br/>
                                </div>
                                <br/>
                                <div className="col-md-12 rounded border border-info" >
                                    <h6>Biography:</h6> 
                                    <div className="col-md-12" style={{height: "20em", overflowY: "scroll"}}>
                                      {this.props.cast.biography}
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    <br/>
                    </div>
            
        );
    }
}
export default CastView;