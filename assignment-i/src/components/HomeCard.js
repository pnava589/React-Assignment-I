import React from "react";
import { Link } from 'react-router-dom';

class HomeCard extends React.Component{ 
  constructor(props){
    super(props);
    this.state={input:''};
    
  }

  handleChange=(e)=>{
    
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit=(e)=>{
    e.preventDefault();
    const data = this.state;
    this.props.filterMovies(data);
    
   
  }



  render(){
    const {input} = this.state
    return(<div className="col-md-6 offset-md-3">
    <div className="card text-center">
      <h5 className="card-header">
        Movie Browser
      </h5>
      <div className="card-body">
        <div className="card-text">
          <form  onSubmit={this.handleSubmit}>
            <div className="row">
          <label className="col-md-2"><b>Title:</b></label><input className="col-md-8" name="input" onChange={this.handleChange}></input>
          </div>
          <br></br>
          <div className="text-white row">
            <button className="col-md-4 offset-md-2 btn btn-primary" type='submit'>Show Matching Movies</button>
            
              <button className="offset-md-1 btn btn-primary" type='submit' name='title'>Show All Movies</button>
            
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