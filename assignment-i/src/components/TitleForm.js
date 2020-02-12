import React from "react";

class TitleForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({input:''});
        console.log(this.props);
    }
    
   
    
    handleChange=(e)=>{
        //console.log("name :"+e.target.name+"value "+e.target.value);
        var userInput = [];
        userInput.value = e.target.value;
        userInput.name = e.target.name;
        this.setState({input:userInput});
        this.props.saveInput(userInput);

    }
    
    render(){
        console.log(this.state.input);
        return(
            <div>
                <div className="row">
                    <h6 className="text-left">Title</h6>
                </div>
                
                <div className="row">
                    <input className="col" name='title' type="text" onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}

export default TitleForm