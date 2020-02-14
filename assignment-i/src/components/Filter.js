import React from "react";
import TitleForm from './TitleForm';
import { Link } from 'react-router-dom';
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={ title:[],
                     before:[]
                   }
        console.log(this.props);
    }
    
    handleChange=(e)=>{
        var userInput = [];
        userInput.value = e.target.value;
        userInput.name = e.target.name;
        this.setTheState(userInput);
        
    }

    setTheState=(input)=>{
    if(input.name=="title"){this.setState({title:input});}
    if(input.name=="before"){this.setState({before:input});}
    
    }

    handlesubmit=()=>{
        console.log(this.state);
        this.props.addFilter(this.state.title); // left off here need to re-think this 
    }

    resetFields=()=>{
        this.myForm.reset();
        this.props.resetState();
    }
    
    render(){
        return(

            
            <div className="col-md-3 text-center bg-light">
                <br/>
                <h5 className="col">Movie Filters</h5>
                <hr/>
                <form className="container" ref={(el)=>this.myForm = el}>
                <TitleForm handleChange={this.handleChange}/>
                    <br/>
                    <div className="row">
                        <h6 className="text-left">Year</h6>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>Before</p>
                        </div>
                        <input className="col" name="before" onChange={this.handleChange}/>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>After</p>
                        </div>
                        <input className="col"/>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>Between</p>
                        </div>
                        <input className="col"/>
                        <input className="col"/>
                    </div>
                    <br/>
                    <div className="row">
                        <h6 className="text-left">Rating</h6>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>Below</p>
                        </div>
                        <input type="range" min="0" max="10" className="col"/>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>Above</p>
                        </div>
                        <input type="range" min="0" max="10" className="col"/>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input type="radio"/>
                        </div>
                        <div className="col-5">
                            <p>Between</p>
                        </div>
                        <input type="range" min="0" max="10" className="col"/>
                        <input type="range" min="0" max="10" className="col"/>
                    </div>

                </form >
                <div className='btn-toolbar'>  
                <a className="col-md-5  btn btn-primary text-white" onClick={this.handlesubmit}>Filter</a>
                <a to='/default' className="col-md-5 btn btn-primary text-white" onClick={this.resetFields}>Clear</a>
                </div>
            </div>
        );
    }
}
export default Filter;