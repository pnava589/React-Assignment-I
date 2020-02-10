import React from "react";

const HomeCard = () => 
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
                  </div>;

export default HomeCard;