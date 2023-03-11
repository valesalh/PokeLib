import React, { Component } from 'react';
import 'tachyons';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            sprites: {},
            images: [],
            current: "",
        }
    }

    async fetchSprites() {
        const response = await fetch(this.props.url);
        const data = await response.json();

        if(data.sprites.hasOwnProperty('other')) {
            let toAppend = [];

            let obj = data.sprites.other;
            Object.keys(obj).forEach((item) => {
                if(obj[item].hasOwnProperty('front_default')) {
                    toAppend.push(obj[item]['front_default']);
                }
            });

            this.setState({ images: [data.sprites["front_default"]].concat(toAppend) });
        }
    }

    async componentDidMount() {
        await this.fetchSprites();
    }

    onClickCard = () => {
        let rotatedImages = this.state.images;
        rotatedImages.push(rotatedImages.shift());
        this.setState({ 
            images: rotatedImages,
        });
    }

    render() {
        let { name } = this.props;

        return (
            <div style ={{cursor: 'pointer'}} onClick={this.onClickCard} className="tc ba b--dark-gray ck bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                <img style={{ width: 150, height: 150 }} alt={`${name}`} src={this.state.images[0]} />
                <div>
                    <h2>{name}</h2>
                    {/* <p>{url}</p> */}
                </div>
            </div>
        );
    }
}

export default Card;