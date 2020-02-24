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
                     yearFilter:[],
                     movies: []
                   }
    }
    filterMovies=()=>{
        let movieList = cloneDeep(this.props.movies);
        let newList = cloneDeep(this.props.movies);
        let query= this.createQueryString();
        if(this.myForm.title.value!==""){
            newList = movieList.filter(this.title);
        }
        if(this.myForm.year.value!==""){
            newList =  newList.filter(this.year);
        }
        if(this.myForm.rating.value!==""){
            newList =  newList.filter(this.rating);
        }
        this.props.filterMovies(newList,query);
    }
    createQueryString=()=>{
        let s = '"';
        if(this.myForm.title.value!==""){
            s += "Title: "+this.myForm.title.value+". "
        }
        if(this.myForm.year.value!==""){
            if(this.myForm.year.value==="between"){
                s +=  "Year "+this.myForm.year.value+": "+this.myForm[this.myForm.year.value].value+"-"+this.myForm[this.myForm.year.value+"1"].value+". "
            }
            else s +=  "Year "+this.myForm.year.value+": "+this.myForm[this.myForm.year.value].value+". ";
        }
        if(this.myForm.rating.value!==""){
            if(this.myForm.rating.value==="in"){
                s +=  "Rating between: "+this.myForm[this.myForm.rating.value].value+"-"+this.myForm[this.myForm.rating.value+"1"].value+"."
            }else s +=  "Rating "+this.myForm.rating.value+": "+this.myForm[this.myForm.rating.value].value+".";
        }
        s+= '"';
        return s;
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
                    <Link to='/default' className="col-md-5 btn btn-dark text-white offset-md-1" onClick={this.resetFields}>Clear</Link>
                </div>
            </div>
        );
    }
}
export default Filter;