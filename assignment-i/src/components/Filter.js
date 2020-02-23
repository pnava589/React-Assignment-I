import React from "react";
import TitleForm from './TitleForm';
import { Link } from 'react-router-dom';
import * as cloneDeep from "lodash/cloneDeep";
import YearForm from "./YearForm";
import RatingForm from "./RatingForm";
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={ title:[],
                     between:[],
                     yearFilter:[],
                     ratingRadio:'',
                     movies: []
                   }      

    }
    filterMovies=()=>{
        let movieList = cloneDeep(this.props.movies);
        let newList = cloneDeep(this.props.movies);
        if(this.myForm.title.value!==""){
            newList = movieList.filter(this.title);
        }
        if(this.myForm.year.value!==""){
            newList =  newList.filter(this.year);
        }
        if(this.myForm.rating.value!==""){
            newList =  newList.filter(this.rating);
        }
        console.log(newList);
        this.props.filterMovies(newList);

    }
    title=(value)=>{
        return value.title.toLowerCase().includes(this.myForm.title.value.toLowerCase());
    }
    year=(value)=>{
        if(this.myForm.year.value=== "after")
        return value.release_date > this.myForm[this.myForm.year.value].value;
        else if(this.myForm.year.value=== "before")
        return value.release_date < this.myForm[this.myForm.year.value].value;
        else 
        return value.release_date > this.myForm[this.myForm.year.value].value && 
                value.release_date < this.myForm[this.myForm.year.value+"1"].value;
    }
    rating=(value)=>{
        if(this.myForm.rating.value=== "above")
        return value.ratings.average > this.myForm[this.myForm.rating.value].value;
        else if(this.myForm.rating.value=== "below")
        return value.ratings.average < this.myForm[this.myForm.rating.value].value;
        else 
        return value.ratings.average > this.myForm[this.myForm.rating.value].value && 
                value.ratings.average < this.myForm[this.myForm.rating.value+"1"].value;
    }
    resetFields=()=>{
        this.myForm.reset();
        let emptyArray = [];
        this.setState({yearFilter:emptyArray,title:emptyArray},this.props.resetState());
        //this.props.resetState();
    }
    
    render(){
        return(
            <div className="col-md-3 text-center bg-light">
                <br/>
                <h5 className="col">Movie Filters</h5>
                <hr/>
                <form className="container" ref={(el)=>this.myForm = el}>
                    <TitleForm/>
                    <YearForm/>
                    <RatingForm/>    
                </form >
                <br/>
                <hr/>
                <br/>
                <div className='btn-toolbar'>  
                    <a className="col-md-5  btn btn-dark text-white " onClick={this.filterMovies}>Filter</a>
                    <a to='/default' className="col-md-5 btn btn-dark text-white offset-md-1" onClick={this.resetFields}>Clear</a>
                </div>
            </div>
        );
    }
}
export default Filter;