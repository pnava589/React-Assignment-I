import React from "react";
//import { Link } from 'react-router-dom';
import photo from '../logo.svg';


class About extends React.Component {
 render() {
    
 return (
    <div className = 'banner'
    style = {{ backgroundImage: `url(${photo})`,
    height: '800px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    }}>
        <div >
            <h1>About</h1>
            <h3>More information coming up <br/>Stay tuned</h3>
            <p>
                
                    <button>Browse</button>
                
                
                    <button>About</button>
                
            </p>
        </div>
    </div>
 );
 }
}
export default About