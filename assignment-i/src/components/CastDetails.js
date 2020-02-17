import React from "react";
class CastDetails extends React.Component{
    render(){
        return(
            <div className="row">
                    {this.props.cast.map(c=> <div className="col-md-12">
                                                <div className="row" style={{marginBottom: "1em"}}>
                                                    <div className="col-md-4 align-self-center">
                                                        {c.character} 
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        {c.name} 
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        <button className="btn btn-primary" value={c.id} 
                                                                        onClick={this.props.castDetails}>
                                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> )}
            </div>
        );
    }
}
export default CastDetails;