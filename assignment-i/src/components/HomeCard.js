import React from "react";
import { Link } from 'react-router-dom';

class HomeCard extends React.Component{ 
  constructor(props){
    super(props);
    this.state={input:'',buttonReference:''};
    //this.buttonReference = React.createRef();
  }
  handleChange=(e)=>{
    
    e.preventDefault();
    let newReference = [];
    newReference.userInput = e.currentTarget.value;
    //console.log(newReference);
    this.setState({input:newReference});
  }

  render(){
    const isEnabled = this.state.input.length > 0;
    console.log(this.state.input);
    return(<div className="col-md-6 offset-md-3">
    <div className="card text-center">
      <h5 className="card-header">
        Movie Browser
      </h5>
      <div className="card-body">
        <div className="card-text">
          <form >
            <div className="row">
          <label className="col-md-2"><b>Title:</b></label><input className="col-md-8" name="input"  onChange={this.handleChange}></input>
          </div>
          <br></br>
          <div className="text-white row">
            <Link to={`/default/${this.state.input.userInput}`} className="col-md-4 offset-md-2 btn btn-primary"  name="matching" >Show Matching Movies</Link>
            <Link to='/default' className="offset-md-1 btn btn-primary" name='all' value=" ">Show All Movies</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
</div>);
  }
                
}
export default HomeCard;

/*
<Link to='/default' className="col-md-4">
              <button className="offset-md-1 btn btn-primary" type='submit'>Show All Movies</button>
            </Link>
*/