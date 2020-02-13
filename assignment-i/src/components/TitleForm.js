import React from "react";

class TitleForm extends React.Component{
    
    state={input:'',filterName:''};
    
    handleChange=(e)=>{
        //console.log("name :"+e.target.name+"value "+e.target.value);
        this.setState({input:e.target.value},{filterName:e.target.name});
       // saveInput(this.state.input,this.state.filterName);

    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <h6 className="text-left">Title</h6>
                </div>
                
                <div className="row">
                    <input className="col" name=' title' type="text" onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}

export default TitleForm