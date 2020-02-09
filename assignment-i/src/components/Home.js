import React from "react";
import logo from '../logo.svg';
class Home extends React.Component{
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>new changes made by pedro</code> and save to reload.
                  Edit <code>src/App.js</code> 
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React is fucked up 
                </a>
              </header>
             <div> Juans second change</div>
            </div>
          );
    };
}
export default Home;