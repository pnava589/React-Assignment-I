import React from "react";
class YearForm extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <div className="row">
                    <h6 className="text-left">Year</h6>
                </div>
                <div className="row ">
                    <div className="col-1">
                        <input type="radio" name='year' value='before' />
                    </div>
                    <div className="col-5">
                        <p>Before</p>
                    </div>
                    <input className="col" name="before" type="number"/>
                </div>
                <div className="row ">
                    <div className="col-1">
                        <input type="radio" name='year' value='after' />
                    </div>
                    <div className="col-5">
                        <p>After</p>
                    </div>
                    <input className="col" name='after' type="number" />
                </div>
                <div className="row">
                    <div className="col-1">
                        <input type="radio"  name='year' value='between' />
                    </div>
                    <div className="col-5">
                        <p>Between</p>
                    </div>
                    <input className="col" name="between" type="number" />
                    <input className="col" name="between1" type="number"/>
                </div>
                <br/>
            </div>);
    }
}
export default YearForm;