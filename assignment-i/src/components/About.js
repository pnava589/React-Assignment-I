import React from "react";
//import { Link } from 'react-router-dom';
import photo from '../logo.svg';


class About extends React.Component {
 render() {
    
 return (
        <div>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3"> About </h1>
                
                
                <p>This page provides information regarding this porject and the referenced sources </p>

            </div>

        </div>

        <div className="container">
        <div className="row">
            <div className="col-md-6 blog-main">
                
            <h1 className="blog-post">Team Members</h1>
                <ul>
                    <li>Juan Jimenez</li>
                    <li>Pedro Navas</li>
                </ul>
                <h1 className="blog-post">Resources</h1>
                <ul>
                    <li>Bootstrap Documentation</li>
                    
                </ul>
                
            </div>
        </div>
        </div>
        
        </div>
 );
 }
}
export default About