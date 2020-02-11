import React from "react";
import HomeCard from "./HomeCard";
import { Link } from 'react-router-dom';

class Home extends React.Component{

constructor(props){
    super(props);
    
}

    



    render(){
      
        const imgSrc = "./felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
        return(
            <div className="container-fluid"  style = {{ backgroundImage: `url(${imgSrc})`,height: '800px',
            backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',}}>
                <div className="h-100 row align-items-center">
                  <HomeCard filterMovies={this.props.filterMovies}/>
                  <div className="col-md-6 offset-5 text-white">
                    Photo Credit: <a href="https://unsplash.com/@felixmooneeram">Felix Mooneeram</a>
                </div>
                </div>
            </div>
        );
    };
}
export default Home;
