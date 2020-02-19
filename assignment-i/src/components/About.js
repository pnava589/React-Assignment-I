import React from "react";

class About extends React.Component {
 render() {
    
 return (
        <div>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4"> About </h1>
                <p>This page provides information regarding this porject and the referenced sources </p>
            </div>

        </div>

        <div className="container">
        <div className="row">
            <div className="blog-main">
                
            <h1 className="blog-post">Team Members</h1>
                <ul>
                    <li>Juan Jimenez</li>
                    <li>Pedro Navas</li>
                </ul>
                <hr/>
                <h1 className="blog-post">Resources</h1>
                <ul>
                    <li>Bootstrap Documentation</li>
                    <li>React-modal-image</li>
                </ul>
                <hr/>
                <h1 className="blog-post">Github Link</h1>
                <a href="https://github.com/pnava589/React-Assignment-I.git">Repo</a>

                <hr/>
                <h1 className="blog-post">Technology Used</h1>
                <ul>
                    <li>Bootstrap for styiling</li>
                    <li>React</li>
                    <li>PHP API's</li>

                </ul>
                <hr/>
            </div>
        </div>
        </div>
        
        </div>
 );
 }
}
export default About