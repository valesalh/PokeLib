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
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    onClickNext = () => {
        this.setState(state => ({
            offset: state.offset + state.limit,
        }));
    }

    onClickPrev = () => {
        this.setState(state => ({
            offset: state.offset - state.limit <= 0 ? 0 : state.offset - state.limit
        }));
    }

    onDisplayCountChange = (event) => {
        this.setState({limit: Number(event.target.value)});
    }

    async fetchPokedex() {
        // let url = `https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}&offset=${this.state.offset}`;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1008`);
        const data = await response.json();
        this.setState({pokedex: data.results});
    }

    async componentDidMount() {
        await this.fetchPokedex();
    }

    render() {
        const { pokedex, searchfield, offset, limit} = this.state;
        const filteredPokemon = pokedex.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        }).slice(offset, offset + limit);

        return !pokedex.length ? <h1 className='tc'>Loading...</h1> :
        (
            <div className='tc pb4'>
                <h1>Pokemon Library</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <LimitSelector displayCountChange={this.onDisplayCountChange}/>
                <Scroll>
                    <CardList 
                        pokemon = {filteredPokemon} 
                        />
                </Scroll>
                <PageButton 
                    offset={offset} 
                    limit={limit} 

                    onClickPrev={this.onClickPrev} 
                    onClickNext={this.onClickNext}
                    />
            </div>
        )
    }
}

export default App;