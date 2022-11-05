import React, { Component, useEffect } from "react";
import { DropdownsComponent } from "./components/DropdownsComponent";
import { PokemonComponent } from "./components/PokemonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterHabitat: "",
      filterSpecies: "",
      filterPoketypes: "",
      pokemons: [],
    };
  }

  componentDidMount() {
    fetch(`https://pokemonsapi.herokuapp.com/pokemons`)
      .then((rep) => rep.json())
      .then((data) => {
        this.setState({ pokemons: data });
      });
  }

  handleChangeHabitat = (e) => {
    this.setState({ filterHabitat: e.target.value });
    console.log(e.target.value);
  };

  handleChangeSpecies = (e) => {
    this.setState({ filterSpecies: e.target.value });
    console.log(e.target.value);
  };

  handleChangePoketypes = (e) => {
    this.setState({ filterPoketypes: e.target.value });
    console.log(e.target.value);
  };

  render() {
    let filteredHabitat = this.state.pokemons;
    if (this.state.filterHabitat !== "") {
      filteredHabitat = filteredHabitat.filter((a) => {
        return a.habitat.name.includes(this.state.filterHabitat);
      });
    }
    if (this.state.filterSpecies !== "") {
      filteredHabitat = filteredHabitat.filter((a) => {
        return a.species.name.includes(this.state.filterSpecies);
      });
    }
    if (this.state.filterPoketypes !== "") {
      filteredHabitat = filteredHabitat.filter((a) => {
        for (let index = 0; index < a.poketypes.length; index++) {
          if (a.poketypes[index].name === this.state.filterPoketypes) {
            return a.poketypes[index].name === this.state.filterPoketypes;
          }
        }
      });
    }
    return (
      <>
        <DropdownsComponent
          handleChangeHabitat={this.handleChangeHabitat}
          handleChangeSpecies={this.handleChangeSpecies}
          handleChangePoketypes={this.handleChangePoketypes}
        />
        <PokemonComponent filteredHabitat={filteredHabitat} />
      </>
    );
  }
}

export default App;
