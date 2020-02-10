import React from "react";
import DefaultHeader from "./DefaultHeader";

class Default extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.movies);
    }
    render(){
        return(
            <div>
                Pedro
            </div>
        );
    }
};

export default Default;