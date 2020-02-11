import React from "react";
import { Link } from 'react-router-dom';

class HomeCard extends React.Component{ 
  constructor(props){
    super(props);
    this.state={input:''};
    this.inputName = React.createRef();
    console.log(this.props.filterMovies);
    
    
  }

 

  handleSubmit=(e)=>{
    
    e.preventDefault();
    let newReference = [];
    newReference.userInput = this.inputName.current.value;
    newReference.typeOfSearch = e.target.name;
    console.log(this.props);
    this.props.filterMovies(newReference);
    
  }





  render(){
    
    return(<div className="col-md-6 offset-md-3">
    <div className="card text-center">
      <h5 className="card-header">
        Movie Browser
      </h5>
      <div className="card-body">
        <div className="card-text">
          <form >
            <div className="row">
          <label className="col-md-2"><b>Title:</b></label><input className="col-md-8" name="input" ref={this.inputName}></input>
          </div>
          <br></br>
          <div className="text-white row">
            <Link to='/default' onClick={this.handleSubmit} >
            <button className="col-md-4 offset-md-2 btn btn-primary" type='submit' name="matching" >Show Matching Movies</button>
            </Link>
            
              <button className="offset-md-1 btn btn-primary" type='submit' name='all' onClick={this.handleSubmit}>Show All Movies</button>
              
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