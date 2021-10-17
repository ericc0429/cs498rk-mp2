import React, { Component } from 'react';
import axios from 'axios';
//import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';

import './styles.scss';
//import { render } from 'node-sass';

class Search extends Component<any, any> {

    //
    constructor( props: any ) {
        super( props );
        this.state = { value: '' };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange( event: any ) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit( event: any ) {
        alert('A name was submitted: ' + this.state.value);
        
        //event.preventDefault();
    }
  
    render() {

        return (

            <form onSubmit={this.handleSubmit}>

                <label>
                    Search:<br />
                    <input
                        type="text"
                        className="Search-input"
                        placeholder="Pokemon Name/ID/Type"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>

                <input
                    type="submit"
                    className="Search-button"
                    value="Search"
                />

            </form>

        );

    }
    // FROM 
}

/*
class Search extends Component {

    render() {
        return(
            <div className='Search'>
                Hello Search
            </div>
        )
    }

/*

function Search() {

    return (
        <div className='Search'>
            Hello Search
        </div>
    );
    /*
    return (
        <input
            type="text"
            name="input"
        />
    );
    
}
*/

export default Search;