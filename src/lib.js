'use strict';

export class Ship {
  constructor(opts={name:     ``,
    fuel:     0,
    capacity: 0,
    crew:     [],
    cargo:    []}) {
    this.name = opts.name;
    this.fuel = opts.fuel;
    this.capacity = opts.capacity;
    this.crew = opts.crew;
    this.cargo = opts.cargo;
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
