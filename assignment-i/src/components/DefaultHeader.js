import React from "react";
import { Link } from 'react-router-dom';
import About from "./About";
class DefaultHeader extends React.Component{
    constructor(props){
        super(props);
        this.state ={showAbout: false}
    }
    toggleModal=()=>{
        this.setState({showAbout: true})
        console.log("toggle");
    }
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <Link className="nav-item fas fa-film" to='/home'>
                <i className="text-monospace"> JP Movies</i>
            </Link>
            <button className="btn btn-primary my-2 text-white" onClick={this.toggleModal}>About</button>
            <About show={this.state.showAbout}/>
            
        </nav>
        );
    }
}

export default DefaultHeader;