import React from "react";
class CrewDetails extends React.Component{
    render(){
        this.props.crew.sort((a,b)=>{if(a.department>b.department) {return 1}
                                        if(a.department < b.department){return -1}
                                        if(a.department === b.department){
                                            if(a.name>b.name) return 1;
                                            if(a.name <b.name) return -1
                                            return 0;
                                        }
                                        return 0;
                                    });
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