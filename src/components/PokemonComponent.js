import { useEffect, useState } from "react";

function PokemonComponent(props) {


  return (
    <div id="pokemons" className="row columns is-multiline is-mobile">
    {props.filteredHabitat.map((pokemon) => {
        return (
            <div className="column is-2-desktop is-4-tablet is-full-mobile">
                    <div className="card large" style={{backgroundColor:pokemon.color}}>
                        <div className="card-image" >
                            <figure className="image is-square" >
                                <img src={pokemon.imgURL}
                                    alt={pokemon.name}>
                                </img>
                            </figure>
                        </div>
                            <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4 is-spaced no-padding has-text-centered">{pokemon.name}</p>
                                    <p className="subtitle is-7"><b><span style={{color:'black'}}>Species : </span></b><span style={{color:'black'}}>{pokemon.species.name}</span></p>
                                    <p className="subtitle is-7"><b><span style={{color:'black'}}>Habitat : </span></b><span style={{color:'black'}}>{pokemon.habitat.name}</span></p>
                                    <p className="subtitle is-7"><b><span style={{color:'black'}}>Poketypes : </span></b>{pokemon.poketypes.map(poketype => (<span style={{color:'black'}}>{poketype.name}/</span>))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })}
    </div>
        
      
  );
}

export { PokemonComponent };
