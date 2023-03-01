import React from 'react';
import Card from './Card'

const CardList = ({pokemon, onClickSprite}) => {
    return (
        <div>
            {
                pokemon.map((pokemon, index) => {
                    return (<Card 
                        key={index} 
                        id={pokemon.url.split('/')[6]} 
                        name={pokemon.name}
                        url={pokemon.url}
                        // onClickSprite={onClickSprite}
                        // currentImage={currentImage}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;