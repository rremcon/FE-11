import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Pokemon from "./components/Pokemon";
import Button from "./components/Button";


function App() {

const [pokemons, setPokemons] = useState([]);
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
const [toggle, setToggle] = useState(false);
const [error, setError] = useState(false);


useEffect( () => {
    async function fetchData() {
        setToggle(true);
        setError(false);

        try {
            const {data} = await axios.get(url);
            setPokemons(data);
        } catch (err) {
            console.error(err);
            setError(true);
        }
        setToggle(false);
    }
    fetchData();
}, [url]);


  return (
    <section className="pokemon-view">
        {pokemons &&
            <>
                <div className="buttons">
                    <Button
                        disabled={!pokemons.previous}
                        clickHandler={() => setUrl(pokemons.previous)}
                    >
                        Previous
                    </Button>
                    <Button
                        disabled={!pokemons.next}
                        clickHandler={() => setUrl(pokemons.next)}
                    >
                        Next
                    </Button>
                </div>

                {pokemons.results && pokemons.results.map((pokemon) => {
                    return <Pokemon key={pokemon.name} url={pokemon.url}
                    />
                })}
            </>
        }
        {toggle && <p>IN PROGRESS</p>}
        {error && <p>ERROR</p>}
    </section>
  );
}

export default App;
