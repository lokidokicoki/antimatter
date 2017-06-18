'use strict';

export class Ship {
  constructor() {
    this.name = ``;
    this.fuel = 0;
    this.capacity = 0;
    this.crew = [];
    this.cargo = [];
  }

  get details() {
    return {
      name:     this.name,
      fuel:     this.fuel,
      capacity: this.capacity,
      crew:     this.crew,
      cargo:    this.cargo
    };
  }
}

export class Crew {
  constructor() {
    this.name=``,
    this.rank=``,
    this.gender=``,
    this.race=``,
    this.position=``;
  }
}

export class Cargo {
  constructor() {
    this.item=``;
    this.tonnage=0;
    this.cpt=0;
  }
}
