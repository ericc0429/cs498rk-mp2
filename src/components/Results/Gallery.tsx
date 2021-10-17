import React, { Component } from 'react';
//import { BrowserRouter, Link } from 'react-router-dom';

import './styles.scss';


class Gallery extends Component<{}, { pokemons: string }> {

    render() {
        return (
            <div className="Gallery">
                Gallery View
                {/*
                {this.props.pokemons.map( ( pokemon ) => (
                    <div className="Gallery-item" key={pokemon.id}>

                        <div className="Gallery-symbol">
                            {pokemon.sprites}
                        </div>

                        <div className="Gallery-id">
                            {pokemon.name}
                        </div>
                    </div>
                )
                ) }
                */}
            </div>
        )
    }

}

export default Gallery;