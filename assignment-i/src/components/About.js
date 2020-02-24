import React from "react";
import {Modal} from "react-bootstrap";
class About extends React.Component {
constructor(props){
    super(props);
    this.state ={show: this.props.show};
}
close=()=>{
    this.props.toggle();
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
                        <li><b>Bootstrap Documentation </b> </li>
                        <p>Acted as a main source for our styiling. For more information <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/'>click here</a> </p>
                        <li><b> React-bootstrap-Modal </b>  </li>
                        <p>Reference to use Modals (also known as pop-ups). For more information <a href='https://react-bootstrap.github.io/components/modal/'>click here</a> </p>
                        <li> <b> React-router</b></li>
                        <p>Reference used to learn how to work with Router component speically to add dynamic routes or Links in a SPA. For more information <a href='https://reacttraining.com/react-router/'>click here</a> </p> 
                        <li><b>React-transition-group</b></li>
                        <p>Reference used to install and define transition of modules. For more information <a href='https://reactcommunity.org/react-transition-group/'>click here</a> </p>
                        <li><b> Lodash array methods</b> </li>
                        <p>Reference used primarily to use array manipulation methods existing in the lodash module. For more information <a href='https://lodash.com/docs/'>click here</a> </p>
                        <li><b>TMDB API</b></li>
                        <p>The Movie DataBase API allowed us to get a TMDB link for each movie. For more information <a href='https://developers.themoviedb.org/3/getting-started/introduction/'>click here</a> </p>
                        <li><b>  IMDB Links </b></li>
                        <p>The IMBD links allows us to provide links to IMBD for every movie using the IMBD for each movie. For more information <a href='https://developers.themoviedb.org/3/getting-started/introduction/'>click here</a> </p>
                        <li><b>  Font Awesome Icons</b></li>
                        <p>Reference used to choose our logo for the header of the site. For more information <a href='https://fontawesome.com/icons?d=gallery/'>click here</a> </p>
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