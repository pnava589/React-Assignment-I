import React from "react";
import CastDetails from "./CastDetails";
import CrewDetails from "./CrewDetails";
class CastCrewDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {cast: true};
    }
    toggle=()=>{
        if(this.state.cast){ this.setState({cast: false}) }
        else{ this.setState({cast: true}) }
        
    }
    render(){
        return(
            <div className="card col-md-12 bg-dark text-white">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item" onClick={this.toggle}>
                            {this.state.cast && <span className="nav-link active" href="#">Cast</span>}
                            {!this.state.cast && <span className="nav-link" href="#">Cast</span>}
                        </li>
                        <li className="nav-item" onClick={this.toggle}>
                            {this.state.cast && <span className="nav-link">Crew</span>}
                            {!this.state.cast && <span className="nav-link active">Crew</span>}
                        </li>
                    </ul>
                </div>
                <div className="card-body" style={{height: "40.5em", overflowY: "scroll"}}>
                    {this.state.cast && <CastDetails cast={this.props.cast}/>}
                    {!this.state.cast && <CrewDetails crew={this.props.crew}/> }
                </div>
            </div>
        );
    }
}
export default CastCrewDetails;