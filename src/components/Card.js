import React, { Component } from 'react';
import Image from './Image';
import 'tachyons';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            sprites: {},
            images: [],
            currentImage: "",
        }
    }

    loadAltImages() {
        if(this.state.sprites.hasOwnProperty('other')) {
            let keyObj = this.state.sprites['other'];
            let toAppend = [];

            Object.keys(keyObj).forEach((element) => {
                let sprite = keyObj[element];
                if(sprite.hasOwnProperty('front_default')) {
                    toAppend.push(sprite['front_default']);
                }
            });

            this.setState((state) => ({
                images: state.images.concat(toAppend)
            }));
        }
    }

    async fetchSprites() {
        let { url } = this.props
        const response = await fetch(url);
        const data = await response.json();
        const sprites = data.sprites;
        return sprites;
    }

    async componentDidMount() {
        let { id } = this.props;
        this.setState({currentImage: [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`]});
        
        await this.fetchSprites().then(response => {
            this.setState({sprites: response});
        });

        this.loadAltImages();
    }

    onClickCard = () => {
        console.log(this.state.images);
        // let rotatedImages = this.state.images;
        // rotatedImages.push(rotatedImages.shift());
        // let current = rotatedImages[0];
        // this.setState({ 
        //     images: rotatedImages,
        //     currentImage: current
        // });
    }

    /* 
        The parent "App" container sees it's limit and offset change, but these changes are not propogated properly to this class
        ...? because it has no concept of the parent classes state?

        can possibly fix this by passing a prop to this class 

        consider making the image a component
    */
    render() {
        let { id, name } = this.props;
        let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <div onClick={this.onClickCard} className="tc ba b--dark-gray ck bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                {/* <img style={{ width: 150, height: 150 }} alt={`${name}`} src={this.state.images[0]} /> */}
                <Image 
                    // currentImage={this.state.currentImage}
                    currentImage={image}
                    onClickImage={this.onClickCard}
                    imageName={name}
                />
                <div>
                    <h2>{name}</h2>
                    {/* <p>{url}</p> */}
                </div>
            </div>
        );
    }
}


// const Card = ({ id, name, url }) => {
//     let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
//     //let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

//     return (
//         <div className="tc ba b--dark-gray ck bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img style={{ width: 150, height: 150 }}alt={`${name}`} src={image} />
//             <div>
//                 <h2>{name}</h2>
//                 {/* <p>{url}</p> */}
//             </div>
//         </div>
//     );
// }

export default Card;