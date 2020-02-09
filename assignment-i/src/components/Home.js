import React from "react";
class Home extends React.Component{
    render(){
        const imgSrc = "./felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
        return(
            <div className="container-fluid"  style = {{ backgroundImage: `url(${imgSrc})`,height: '800px',
            backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',}}>
               <div className="h-100 row align-items-center">
                <div className="col-md-6 offset-md-3">
                      <div className="card text-center">
                        <h5 className="card-header">
                          Movie Browser
                        </h5>
                        <div className="card-body">
                          <div className="card-text">
                            <div className="row">
                            <label className="col-md-2"><b>Title:</b></label><input className="col-md-8" type="text"></input>
                            </div>
                            <br></br>
                            <div className="row text-white">
                              <a className="col-md-4 offset-md-2 btn btn-primary">Show Matching Movies</a>
                              <a className="col-md-3 offset-md-1 btn btn-primary">Show All Movies</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-6 offset-5 text-white">
                    Photo Credit: <a href="https://unsplash.com/@felixmooneeram">Felix Mooneeram</a>
                  </div>
                </div>
            </div>
        );
    };
}
export default Home;
