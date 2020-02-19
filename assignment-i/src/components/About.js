import React from "react";
import {Modal} from "react-bootstrap";
class About extends React.Component {
constructor(props){
    super(props);
    this.state ={show: this.props.show};
}
close=()=>{
    this.setState({show: false});
}
componentDidUpdate=(prevState,prevProps)=>{
    if(prevProps.show != this.props.show){
        this.setState({show: this.props.show})
    }
}
render() {
 return (
       
        
        <Modal
        size="lg"
        show={this.state.show}
        aria-labelledby="example-modal-sizes-title-lg"
        >
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4"> About </h1>
                    <p>This page provides information regarding this porject and the referenced sources </p>
                </div>

            </div>

            <div className="container">
            
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
                        <li>React-bootstrap-Modal</li>
                        <li>Font Awesome Icons</li>
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
                    <button className="btn btn-primary" onClick={this.close}>Close</button>
                </div>
                <br/>
            </div>
        </Modal>
        
        
        
 );
 }
}
export default About