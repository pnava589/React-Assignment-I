import React from "react";
import TitleForm from './TitleForm';
import { Link } from 'react-router-dom';
class Filter extends React.Component{
    render(){
        return(

            
            <div className="col-md-3 text-center bg-light">
                <br/>
                <h5 className="col">Movie Filters</h5>
                <hr/>
                <form className="container">
                <TitleForm saveInput={this.props.addFilter}/>
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
                        <input className="col"/>
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

                </form>
                
                <Link to='/default' className="col-md-4 offset-md-2 btn btn-primary">Clear</Link>
                
            </div>
        );
    }
}
export default Filter;