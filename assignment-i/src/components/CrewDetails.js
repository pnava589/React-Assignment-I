import React from "react";
class CrewDetails extends React.Component{
    render(){
        return(
            <div className="row">
                    {this.props.crew.map(c=> <div className="col-md-12">
                                                <div className="row" style={{marginBottom: "1em"}}>
                                                    <div className="col-md-4 align-self-center">
                                                        {c.department} 
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        {c.job} 
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                       {c.name}
                                                    </div>
                                                </div>
                                            </div> )}
            </div>
        );
    }
}
export default CrewDetails;