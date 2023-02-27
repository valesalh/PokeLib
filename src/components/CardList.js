import React from 'react';
import Card from './Card'

const CardList = ({pokemon}) => {
    return (
        <div>
            {
                pokemon.map((pokemon, index) => {

                    let pokeID = pokemon.url.split('/')[6];

                    return (<Card 
                        key={index} 
                        id={pokeID} 
                        name={pokemon.name}
                        url={pokemon.url}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;