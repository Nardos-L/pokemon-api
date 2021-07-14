import React, { useState } from "react";
const Example = () => {
    const [pokemon, setPokemon] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(response => setPokemon(response.results))

    }

    return (
        <div >
            <input type="submit" value="Fetch Pokemon" onClick={handleClick} />

            {pokemon ? pokemon.map((p, index) => {
                return (
                    <div key={index}>
                        <li>{p.name}</li>
                    </div>
                )
            }) : null}

        </div>
    );
}
export default Example;