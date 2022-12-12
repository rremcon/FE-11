import React, {useEffect, useState} from "react";
import axios from 'axios';

function Pokemon({url}) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get(url);
                setPokemon(data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [url]);


    return (
        <div className="pokemon-item">
            {pokemon &&
                <>
                    <h3>{pokemon.name}</h3>
                    <img alt="img pokemon" src={pokemon.sprites.front_default}/>
                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <p><strong>Abilities: </strong></p>
                    <ul>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <li key={'${ability.ability.name}-${pokemon.name}'}>
                            {ability.ability.name}
                        </li>
                        )
                        })}
                    </ul>
                </>
            }
        </div>
    );
}

export default Pokemon;