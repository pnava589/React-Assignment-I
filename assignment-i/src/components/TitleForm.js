import React from "react";

class TitleForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({input:''});
    }
    

    render(){
        return(
            <div>
                <div className="row">
                    <h6 className="text-left">Title</h6>
                </div>
                
                <div className="row">
                    <input className="col" name='title' type="text"/>
                </div>
            </div>
        );
    }
}

export default TitleForm