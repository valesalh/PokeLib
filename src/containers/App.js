import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import PageButton from '../components/PageButton';
import LimitSelector from '../components/LimitSelector';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor() {
        super();
        this.state = {
            pokedex: [],
            searchfield: "",
            offset: 0,
            limit: 25,
            sprites: {},
            images: [],
        }
    }

    // loadAltImages() {
    //     if(this.state.sprites.hasOwnProperty('other')) {
    //         let keyObj = this.state.sprites['other'];
    //         let toAppend = [];

    //         Object.keys(keyObj).forEach((element) => {
    //             let sprite = keyObj[element];
    //             if(sprite.hasOwnProperty('front_default')) {
    //                 toAppend.push(sprite['front_default']);
    //             }
    //         });

    //         this.setState((state) => ({
    //             images: state.images.concat(toAppend)
    //         }));
    //     }
    // }

    // async fetchSprites(url) {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     const sprites = data.sprites;
    //     return sprites;
    // }

    // onClickSprite = () => {

    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    onClickNext = () => {
        this.setState((state) => ({
            offset: state.offset + state.limit
        }));
    }

    onClickPrev = () => {
        this.state.offset - this.state.limit <= 0 ? this.setState({offset: 0}) :
        this.setState((state) => ({
            offset: state.offset - state.limit
        }));
    }

    onDisplayCountChange = (event) => {
        //console.log(event.target.value);
        this.setState({limit: Number(event.target.value)});
    }

    async fetchData() {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=1008`;
        //let url = `https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}&offset=${this.state.offset}`;
        //console.log(url);
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => this.setState({pokedex: data.results}));
        
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pokedex: data.results});
        return url;
    }

    async componentDidMount() {
        this.fetchData();

        // let url = await this.fetchData();
        // await this.fetchSprites(url).then(response => {
        //     this.setState({sprites: response});
        // });

        // this.loadAltImages();
    }

    render() {
        const { pokedex, searchfield, offset, limit} = this.state;
        const filteredPokemon = pokedex.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        

        return !pokedex.length ? <h1 className='tc'>Loading...</h1> :
        (
            <div className='tc pb4'>
                <h1>Pokemon Library</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <LimitSelector displayCountChange={this.onDisplayCountChange}/>
                <Scroll>
                    <CardList pokemon = {
                        filteredPokemon.slice(offset, offset + limit)} 
                        // onClickSprite={this.onClickSprite}
                        />
                </Scroll>
                <PageButton 
                    offset={this.state.offset} 
                    limit={this.state.limit} 
                    onClickPrev={this.onClickPrev} 
                    onClickNext={this.onClickNext}
                    />
            </div>
        )
    }
}

export default App;