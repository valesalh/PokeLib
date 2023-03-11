import React from 'react';
import Card from './Card'

const CardList = ({pokemon}) => {
    return (
        <div>
            {
                pokemon.map((pokemon, index) => {
                    let id = pokemon.url.split('/')[6];
                    return (<Card 
                        key={id} 
                        id={id} 
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