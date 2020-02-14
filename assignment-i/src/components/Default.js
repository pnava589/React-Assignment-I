import React from "react";
import FavoritesList from "./FavoritesList";
import MovieList from "./MovieList";
import Filter from "./Filter";

class Default extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies:this.props.movies, favorites: this.props.favorites, noResult: false, query: "All Movies",
                        showFav: true};
        
        
    }
    
    addToFavs = (id,poster,title) =>{
        let temp = this.state.favorites;
        temp.push({id: id, poster: poster, title: title});
        this.setState({favorites: temp});
    }

    addFilter=(input)=>{
        //console.log(input); // [value:'a',name: 'title']
       
        var tempArray=[];
        var name = input.name;
        tempArray = this.state.movies.filter(function(e){
        return e[name].toLowerCase().indexOf(input.value.toLowerCase()) >= 0;
          })
        
        this.setState({movies:tempArray});
        

      }

    componentDidMount=()=>{
        //console.log(this.state.filter);

          var tempArray=[];
          if(typeof (this.props.filter) !== 'undefined'){
          var tempFilter = this.props.filter.params.filter;
          tempArray = this.state.movies.filter(function(e){
            return e.title.toLowerCase().indexOf(tempFilter.toLowerCase()) >= 0; 
          })
          if(tempArray.length > 0){
            this.setState({movies:tempArray, query: this.props.filter.params.filter});
          }
          else{
              this.setState({noResult: true, query: this.props.filter.params.filter});
          }

        }
    }
    hideFavComp=()=>{
        if(this.state.showFav){ this.setState({showFav: false}) }
        else{ this.setState({showFav: true}) }
    }
    
    render(){
        if (this.state.noResult){
            return(
                <div className="container-fluid">
                    <br/>
                    {this.state.showFav && <FavoritesList favorites={this.state.favorites} />}
                    <button className="btn btn-primary" onClick={this.hideFavComp}><i className="fas fa-angle-double-down"></i></button>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-8 offset-4 bg-danger rounded-pill text-white text-center"><h4>No Movies Related to: "{this.props.filter.params.filter}"</h4></div>
                        <Filter addFilter={this.addFilter}/>
                        <MovieList movies={this.state.movies} addToFavs={this.addToFavs} query={"All Movies"}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid">
                    <br/>
                    {this.state.showFav && <FavoritesList favorites={this.state.favorites} />}
                    <button className="btn btn-primary" onClick={this.hideFavComp}><i className="fas fa-angle-double-down"></i></button>
                    <hr/>
                    <br/>
                    <div className="row">
                        <Filter addFilter={this.addFilter}/>
                        <MovieList movies={this.state.movies} addToFavs={this.addToFavs} query={this.state.query}/>
                    </div>
                </div>
            );
        }
        
    }
};

export default Default;