import React from "react";
import {Modal} from "react-bootstrap";
class CastView extends React.Component{
    constructor(props){
        super(props);
        this.state ={show:false};
    }
    close=()=>{
        this.setState({show:false});
    }
    showModal=()=>{
        this.setState({show:true});
    }
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
                            
                            <img className="col-md-6 detail-view" src={posterUrl}
                            alt={this.props.cast.name} onClick={this.showModal}/>
                        
                            <div className="col-md-6 " style={{paddingTop: "0.5em"}}>
                                <div className="col-md-12 rounded border border-dark">
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
                                <div className="col-md-12 rounded border border-dark" >
                                    <h6>Biography:</h6> 
                                    <div className="col-md-12" style={{height: "20em", overflowY: "scroll"}}>
                                      {this.props.cast.biography ==="" && "No info available"}
                                      {this.props.cast.biography}
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    <br/>
                    <Modal size="lg"
                            show={this.state.show}
                            aria-labelledby="example-modal-sizes-title-lg">
                                <div className="container">
                                    <div className="row">
                                    <h2 className="col-md-12">{this.props.cast.name}</h2>
                                    </div>
                                <div className="row">
                                    <img alt={this.props.cast.name} className="col-md-12"src={largeUrl}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <button className="btn btn-primary float-right" onClick={this.close}>Close</button>
                                    </div>
                                    
                                </div>
                            </div>     
                    </Modal>
                    </div>
            
        );
    }
}
export default CastView;