import React from "react";
import DefaultHeader from "./DefaultHeader";

class Default extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                {this.props.movies.length + " movies available"}
            </div>
        );
    }
};

export default Default;