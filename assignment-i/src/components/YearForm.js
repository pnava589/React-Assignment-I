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
                        <input type="radio" name='year' value='before' ref={this.beforeRadio} onClick={this.checkButton}/>
                    </div>
                    <div className="col-5">
                        <p>Before</p>
                    </div>
                    <input className="col" name="before" type="number"ref={this.beforeText} onChange={this.handleChangeInYear}/>
                </div>
                <div className="row ">
                    <div className="col-1">
                        <input type="radio" name='year' value='after' ref={this.afterRadio} onClick={this.checkButton}/>
                    </div>
                    <div className="col-5">
                        <p>After</p>
                    </div>
                    <input className="col" name='after' type="number" ref={this.afterText}onChange={this.handleChangeInYear}/>
                </div>
                <div className="row">
                    <div className="col-1">
                        <input type="radio"  name='year' value='between' ref={this.betweenRadio} />
                    </div>
                    <div className="col-5">
                        <p>Between</p>
                    </div>
                    <input className="col" name="between" type="number" onChange={this.handleChangeInYear} ref={this.betweenAbove}/>
                    <input className="col" name="between1" type="number" onChange={this.handleChangeInYear} ref={this.aboveBetween}/>
                </div>
                <br/>
            </div>);
    }
}
export default YearForm;