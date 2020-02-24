import React from "react";
import HomeCard from "./HomeCard";
import { CSSTransition } from "react-transition-group"
import "../animation.css"

class Home extends React.Component{
    render(){
        const imgSrc = "./felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
        return(
                 <div className="container-fluid"  style = {{ backgroundImage: `url(${imgSrc})`,height: '900px',
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
                    <div className="h-100 row align-items-center">
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames="animiation"
                    >
                        <HomeCard filterMovies={this.props.filterMovies}/>
                    </CSSTransition>
                        <div className="col-md-6 offset-5 text-white">
                            Photo Credit: <a href="https://unsplash.com/@felixmooneeram">Felix Mooneeram</a>
                        </div>
                    </div>
                </div>
            
           
        );
    };
}
export default Home;
