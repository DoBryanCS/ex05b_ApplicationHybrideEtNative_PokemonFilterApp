import { useEffect, useState } from "react";

function DropdownsComponent(props) {
  const [habitats, setHabitats] = useState([]);
  const [species, setSpecies] = useState([]);
  const [poketypes, setPoketypes] = useState([]);

  useEffect(() => {
    async function obtenirHabitats() {
      const url = `https://pokemonsapi.herokuapp.com/habitats`;
      let rep = await fetch(url);
      if (rep.ok) {
        let data = await rep.json();
        setHabitats(data);
      }
    }
    obtenirHabitats();
  }, []);
  useEffect(() => {
    async function obtenirSpecies() {
      const url = `https://pokemonsapi.herokuapp.com/species`;
      let rep = await fetch(url);
      if (rep.ok) {
        let data = await rep.json();
        setSpecies(data);
      }
    }
    obtenirSpecies();
  }, []);
  useEffect(() => {
    async function obtenirPoketypes() {
      const url = `https://pokemonsapi.herokuapp.com/poketypes`;
      let rep = await fetch(url);
      if (rep.ok) {
        let data = await rep.json();
        setPoketypes(data);
      }
    }
    obtenirPoketypes();
  }, []);

  const myStyle = {
    paddingLeft: "20px",
    minWidth: "200px",
  };

  return (
    <div className="container">
      <div className="section">
        <div className="columns is-centered">
          <div
            className="field is-horizontal"
            style={{ paddingLeft: myStyle.paddingLeft }}
          >
            <div className="field-label is-normal">
              <label className="label" htmlFor="habitats">
                Habitat
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: myStyle.minWidth }}>
                  <div className="select is-fullwidth">
                    <select id="habitats" onChange={props.handleChangeHabitat}>
                      <option></option>
                      {habitats.map((habitat) => (
                        <option value={habitat.name} key={habitat.habitatId}>
                          {habitat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="field is-horizontal"
            style={{ paddingLeft: myStyle.paddingLeft }}
          >
            <div className="field-label is-normal">
              <label className="label" htmlFor="species">
                Species
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: myStyle.minWidth }}>
                  <div className="select is-fullwidth">
                    <select id="species" onChange={props.handleChangeSpecies}>
                      <option></option>
                      {species.map((specie) => (
                        <option value={specie.name} key={specie.speciesId}>
                          {specie.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="field is-horizontal"
            style={{ paddingLeft: myStyle.paddingLeft }}
          >
            <div className="field-label is-normal">
              <label className="label" htmlFor="poketypes">
                Poketypes
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ minWidth: myStyle.minWidth }}>
                  <div className="select is-fullwidth">
                    <select id="poketypes" onChange={props.handleChangePoketypes}>
                      <option></option>
                      {poketypes.map((poketype) => (
                        <option value={poketype.name} key={poketype.poketypeId}>
                          {poketype.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DropdownsComponent };
