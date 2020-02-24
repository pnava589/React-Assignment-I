import React from "react";
class Stars extends React.Component{
    render(){
    var num = Math.round(this.props.num_stars*2)/2;
    var half = Math.round(num)-num;
    num = num-half
    let stars =[];
    var k;
    for(k = 0 ; k < num; k++){
        stars.push(<label key={k} className="fas fa-star"></label>);
    }
    if(half>0){
        stars.push(<label key= {half} className="fa fa-star-half-alt"></label>);
        num++;
    }
    for(k=num; k<10; k++){
        stars.push(<label key={k}className="far fa-star"></label>)
    }
    return(
        <div className="col-md-12">
            Rating: {stars}
        </div>
    );
    }
    
};
export default Stars;