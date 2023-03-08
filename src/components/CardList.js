import React from 'react';
import Card from './Card'

const CardList = ({pokemon}) => {
    return (
        <div>
            {
                pokemon.map((pokemon, index) => {
                    return (<Card 
                        key={index} 
                        id={pokemon.url.split('/')[6]} 
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