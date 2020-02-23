import React from "react";
class RatingForm extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                        <h6 className="text-left">Rating</h6>
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio" name='rating' value ='below' ref={this.belowRadio}/>
                        </div>
                        <div className="col-5">
                            <p>Below</p>
                        </div>
                        
                        <input type="range" min="1" max="9" name="below" className="col" ref={this.belowText} onChange={this.handleChangeInRating}/>
                        
                    </div>
                    <div className="row ">
                        <div className="col-1">
                            <input type="radio" name='rating' value="above" ref={this.aboveRadio}/>
                        </div>
                        <div className="col-5">
                            <p>Above</p>
                        </div>
                        <input type="range" name="above" min="1" max="9" className="col" ref={this.aboveText}/>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input type="radio" name='rating' value="in" ref={this.inRadio}/>
                        </div>
                        <div className="col-5">
                            <p>Between</p>
                        </div>
                        <input type="range" name="in" ref={this.betweenIn} min="1" max="9" className="col"/>
                        <input type="range" name="in1" ref={this.AboveIn} min="1" max="9" className="col"/>
                    </div>
            </div>
        )
    }
}
export default RatingForm;