import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/* const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState();

  return (
    
  )
} */

export default function PokeDex(props) {
  // Use state - pokemon
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState('');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const fetchPokemon = async (pokename) => {
    const pokeLookup = pokename ? pokename : `${getRandomInt(150)}`
    let res;
    try {
      res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeLookup}`);
      let data = await res.json();
      console.log(pokemon);
      setPokemon({
        ...pokemon,
        name: data.name,
        image: data.sprites['front_default'],
        forms: data.forms,
        id: data.id,
        moves: data.moves,
        data
      });
    } catch (e) {
      console.log(e);
      console.log(res);
      if (pokename) alert(`${search} not found`);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleRandomizePokemon = () => {
    fetchPokemon();
  };

  const handleSearchChange = ({target}) => {
    const { value } = target;
    console.log(value);
    setSearch(value);
  }

  const handleSearchPokemon = () => {
    fetchPokemon(search);
  }

  return (
    <>
      <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 text-white'>
      <h1 className='text-7xl text-white'>Pokémon</h1>
      <div className='flex flex-col text-3xl gap-4'>
        <h2 className='flex flex-row text-secondary'>{_.capitalize(pokemon.name)}</h2>
        <img className='flex flex-row object-contain' alt={pokemon.name} src={pokemon.image} />
      </div>
      <label className='text-white'>Abilities:</label>
      <ol className='text-white w-2/3'>
      {pokemon.moves?.map((move, index) => {
        if (index < 8 ) {
        return <li key={move.move.name}>- {_.capitalize(move.move.name)}</li>
        }
        else {
          return null;
      }})
      }
      </ol>
      <button className='bg-transparent hover:bg-blue-200 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleRandomizePokemon}>Random Pokemon</button>
      <div className='flex flex-col-reverse gap-4'>
      <button className=' flex-col bg-transparent hover:bg-blue-200 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleSearchPokemon}>Search Pokemon</button>
      <input className='text-black flex-col gap-6 rounded px-2' type="text" name="pokesearch" value={search} onChange={handleSearchChange}/>
      </div>
    </div> 
    </>
    
  );
}

// Log to console
console.log('Hello console');
