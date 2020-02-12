import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies};
        
        
    }

    componentDidMount=()=>{


        
        console.log(this.state.filter);

          var tempArray=[];
          if(typeof (this.props.filter) !== 'undefined'){
          var tempFilter = this.props.filter.params.filter;
          tempArray = this.state.movies.filter(function(e){
            return e.title.toLowerCase().indexOf(tempFilter.toLowerCase()) > 1; 
          })
          this.setState({movies:tempArray});
        }

          

    }

    /*componentDidMount =()=>{
    var tempArray=[];
        
          tempArray = this.state.movies.filter(function(e){
          return e.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) > 1; 
          })
          .sort((a,b)=>{return a.title>b.title});

          this.setState({movies:tempArray});
        
     
    }*/
    render(){
        return(
            <div className="container-fluid">
                <br/>
                <FavoritesList />
                <hr/>
                <br/>
                <div className="row">
                    <Filter/>
                    <MovieList movies={this.state.movies} />
                </div>
            </div>
        );
    }
};

export default Default;