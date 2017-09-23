'use strict';

Antimatter.App = class {
  constructor() {
    // properties
    this._manifest = {};
    this._loadBtn = null;
    this._dockingBay = null;
    this._ships = [];

    // internal calls
    this._hooks();
  }

  _hooks() {
    this._loadBtn = document.getElementById(`load`);
    this._loadBtn.addEventListener(`click`, this._loadManifest);
    this._dockingBay = document.getElementById(`docking-bay`);
  }

  listShips(json) {
    console.log(json);
    this._manifest = json;
    for (const s of json) {
      this._ships.push(new Antimatter.Ship(s));
    }


    const list = [];
    for (const s of this._ships) {
      list.push(s.link);
    }
    this._dockingBay.innerHTML = list.join(``);
  }

  _loadManifest(evt) {
    console.log(`load clicked`);
    fetch(`/load`, {method: `get`})
      .then(response =>{
        const contentType = response.headers.get(`content-type`);
        if (contentType && contentType.includes(`application/json`)) {
          return response.json();
        }
        throw new Error(`OOps, incorrect content-type:`, contentType);
      })
      .then(json =>{
        window.app.listShips(json);
      })
      .catch(e =>{
        console.error(e);
      });
  }
};

Antimatter.Ship = class {
  constructor(deets) {
    this.name = deets.name;
    this.fuelCap = deets.fuelCap; // int
    this.fuel = deets.fuel;
    this.crewCap = deets.crewCap; // int
    this.crew = deets.crew; // array
    this.cargoCap = deets.cargoCap; //int, tonnage
    this.cargo = deets.cargo; //array
  }

  get link() {
    return `<li><a href="ship/${this.id}">${this.name}</a></li>`;
  }
};
