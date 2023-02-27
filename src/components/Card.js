import React from 'react';

const Card = ({ id, name, url }) => {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    //let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    return (
        <div className="tc ba b--dark-gray ck bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <img style={{ width: 150, height: 150 }}alt={`${name}`} src={image} />
            <div>
                <h2>{name}</h2>
                {/* <p>{url}</p> */}
            </div>
        </div>
    );
}

export default Card;