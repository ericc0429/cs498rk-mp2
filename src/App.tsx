import './App.css';

import Header from './components/Header';
import Results from './components/Results'
import Search from './components/Search';


function App() {
  return (
    <div className="App">
        <Header />
        <Results />
    </div>
  );
}

export default App;


/*
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';


import Header from '../Header';
import { render } from 'node-sass';

import logo from '../../logo.svg';
import './index.css';
import Search from '../Search';
// import ListView from '../Results/ListView';
// import Gallery from '../Results/Gallery';


//import pokemons from ;

/*
function makeStruct( titles ) {
    var titles = titles.split( ' ' );
    var size = titles.length;
    function constructor() {
        for ( var i = 0; i < size; i++ ) {
            this[ titles[i] ] = arguments[i];
        }
    }
    return constructor;
}
    
    var Pokemon = makeStruct("id name type1 type2 desc");
    var p = new Pokemon(1, 'john', 'au');
    alert(row.speaker); // displays: john
}
*/
/*
function App() {

    /*
    console.log( "Hello" );
    var baseURL = "https://pokeapi.co/api/v2/pokemon?limit=493";
    var response;

    axios.get( baseURL )
        .then( function(response) {
            console.log( response );
        } )
        .catch(function (error) {
            console.log(error);
        });
        //.then( console.log( response ) );
        */
/*
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="../logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
}

export default App;

/*
class App extends Component {

    
    constructor( props ) {
        super( props );
        this.state = { pokemons }
        this.handleSearchUpdates = this.handleSearchUpdate.bind( this );
    }

    handleSearchUpdate( event ) {
        const { value } = event.target;
        const filtered = pokemons.filter( pokemon => (
            pokemon.id.includes( value ) || // Searching by ID (Pokedex Number)
            pokemon.name.toLowerCase().includes( value.toLowerCase() ) || // Searching by name
            pokemon.types.toLowerCase().includes( value.toLowerCase() ) // Search by type
        ) );

        this.setState( { pokemons: filtered } );
    }


    render() {
        return (
            <div className="App">
                <Header />
                <Search onChange={this.handleSearchUpdate} />
                <ListView pokemons={this.state.pokemons} />
            </div>
        )
    }

}

export default App;
*/
