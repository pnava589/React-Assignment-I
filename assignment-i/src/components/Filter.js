import React from "react";
import TitleForm from './TitleForm';
import { Link } from 'react-router-dom';
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={ title:[],
                     yearFilter:[]
                     
                   }
        this.beforeRadio = React.createRef(); 
        this.afterRadio = React.createRef();
        this.betweenRadio = React.createRef();
 
        console.log(this.props);
    }

    checkButton=(e)=>{
        e.checked = true;
    }
    
    handleChangeInTitle=(e)=>{
        
        console.log(this.beforeRadio);
        var userInput = [];
        userInput.value = e.target.value;
        userInput.name = e.target.name;
        this.setState({title:userInput});
        
        
    }

    handleChangeInYear=(e)=>{
        
        var radios = [this.beforeRadio,this.afterRadio,this.betweenRadio];
        var userInput = [];
        userInput.value = e.target.value;
        userInput.name = e.target.name;
        let checkedYearFilter = radios.find((e)=>e.current.checked === true);

        if(checkedYearFilter !== 'undefined')
        {
            if(e.target.name == checkedYearFilter.current.value)
            {
                
                this.setState({yearFilter:userInput});            
            }  
       }
        
    }


    handlesubmit=()=>{
        console.log(this.state);
        this.props.addFilter(this.state.title); 
         this.props.addYearFilter(this.state.yearFilter);
    }

    resetFields=()=>{
        this.myForm.reset();
        this.props.resetState();
    }
    
    render(){
        //console.log("before year "+this.state.yearFilter.value);
        return(

            
            <div className="col-md-3 text-center bg-light">
                <br/>
                <h5 className="col">Movie Filters</h5>
                <hr/>
                <form className="container" ref={(el)=>this.myForm = el}>
                <TitleForm handleChange={this.handleChangeInTitle}/>
                    <br/>
                    <div className="row">
                        <h6 className="text-left">Year</h6>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio" name='year' value='before' ref={this.beforeRadio} onClick={this.checkButton}/>
                        </div>
                        <div className="col-5">
                            <p>Before</p>
                        </div>
                        <input className="col" name="before" onChange={this.handleChangeInYear}/>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio" name='year' value='after' ref={this.afterRadio} onClick={this.checkButton}/>
                        </div>
                        <div className="col-5">
                            <p>After</p>
                        </div>
                        <input className="col" name='after' onChange={this.handleChangeInYear}/>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input type="radio"  name='year' value='between' ref={this.betweenRadio} onClick={this.checkButton}/>
                        </div>
                        <div className="col-5">
                            <p>Between</p>
                        </div>
                        <input className="col" name="between" onChange={this.handleChangeInYear}/>
                        <input className="col" name="between" onChange={this.handleChangeInYear}/>
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
                <br/>
                <hr/>
                <br/>
                <div className='btn-toolbar'>  
                <a className="col-md-5  btn btn-primary text-white " onClick={this.handlesubmit}>Filter</a>
                <a to='/default' className="col-md-5 btn btn-primary text-white offset-md-1" onClick={this.resetFields}>Clear</a>
                </div>
            </div>
        );
    }
}
export default Filter;