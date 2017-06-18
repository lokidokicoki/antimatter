'use strict';

import fs from 'fs-extra-promise';
import inquirer from 'inquirer';
import log from './src/logger';
import * as lib from './src/lib';
import clear from 'clear';
//import termkit from 'terminal-kit';
import Promise from 'bluebird';
const termkit = Promise.promisifyAll(require(`terminal-kit`));
let data = null;
let ship; //current active ship
const DOCK = `ships.json`;
let term;
const run = true;

async function _load() {
  try {
    data = await fs.readJsonAsync(DOCK);
  } catch (e) {
    throw new Error(`_load failed:`, e);
  }
}

async function _save() {
  log.info(`save`);
  try {
    fs.writeJsonAsync(DOCK, data);
  } catch (e) {
    throw new Error(`_save failed:`, e);
  }
}
async function _list() {
  clear();
  console.log(`ships:`, ships);
  const menu = [{
    type:    `confirm`,
    name:    `shipList`,
    message: `Back?`
  }];

  const answers = await inquirer.prompt(menu);

  if (answers.confirm) {
    return;
  }
  _list();
}

async function _cargoMenu() {
  clear();

  term.cyan(`Cargo options:\n`);
  const menu = [`List`, `Add`, `Update`, `Remove`, `Back`];
  term.singleColumnMenu(menu, async(err, response)=>{
    term(`\n`).eraseLineAfter.green(
      `#%s selected: %s (%s.%s)\n`,
      response.selectedIndex,
      response.selectedText,
      response.x,
      response.y
    );

    switch (response.selectedText) {
      case `Back`:
        _mainMenu();
        break;
      default:
        _cargoMenu();
        break;
    }
  });
}
async function _crewMenu() {
  clear();

  term.cyan(`Crew options:\n`);
  const menu = [`List`, `Add`, `Update`, `Remove`, `Back`];
  term.singleColumnMenu(menu, async(err, response)=>{
    term(`\n`).eraseLineAfter.green(
      `#%s selected: %s (%s.%s)\n`,
      response.selectedIndex,
      response.selectedText,
      response.x,
      response.y
    );

    switch (response.selectedText) {
      case `Back`:
        _mainMenu();
        break;
      default:
        _crewMenu();
        break;
    }
  });
}
async function _fuelMenu() {
  clear();

  term.cyan(`Fuel options:\n`);
  const menu = [`List`, `Add`, `Update`, `Remove`, `Back`];
  term.singleColumnMenu(menu, async(err, response)=>{
    term(`\n`).eraseLineAfter.green(
      `#%s selected: %s (%s.%s)\n`,
      response.selectedIndex,
      response.selectedText,
      response.x,
      response.y
    );

    switch (response.selectedText) {
      case `Back`:
        _mainMenu();
        break;
      default:
        _fuelMenu();
        break;
    }
  });
}

async function _addShip() {
  clear();
  const newShip = new lib.Ship();
  term.red(`Add new ship:\n`);
  term.cyan(`Name:\n`);
  term.inputField((err, input)=>{
    newShip.name = input;
    term.cyan(`Fuel:\n`);
    term.inputField((err, input)=>{
      newShip.fuel = input;
      term.cyan(`Save [Y|n]?\n`);
      term.yesOrNo({yes: [`y`, `ENTER`],
        no:  [`n`]}, (err, response)=>{
        if (response) {
          ship = newShip;
          data.push(newShip.details);
          _save();
        }
        _shipMenu();
      });
    });
  });
}

function _selectShip() {
  clear();
  if (data.length) {
    term.cyan(`Select ship:\n`);
    const items = data.map(item =>{
      return item.name;
    });

    items.push(`Back`);


    term.singleColumnMenu(items, async(err, response)=>{
      term(`\n`).eraseLineAfter.green(
        `#%s selected: %s (%s.%s)\n`,
        response.selectedIndex,
        response.selectedText,
        response.x,
        response.y
      );
      if (response.selectedText.toLowerCase() ===`back`) {
        _mainMenu();
      }

      if (response.selectedIndex < items.length) {
        ship = data[response.selectedIndex];
        _mainMenu();
      }
    });
  } else {
    _mainMenu();
  }
}
async function _shipMenu() {
  clear();

  term.cyan(`Ship options ${ship?ship.name:``}:\n`);
  const menu = [`Select`, `List`, `Add`, `Update`, `Remove`, `Back`];
  term.singleColumnMenu(menu, async(err, response)=>{
    term(`\n`).eraseLineAfter.green(
      `#%s selected: %s (%s.%s)\n`,
      response.selectedIndex,
      response.selectedText,
      response.x,
      response.y
    );

    switch (response.selectedText.toLowerCase()) {
      case `back`:
        _mainMenu();
        break;
      case `add`:
        _addShip();
        break;
      case `update`:
        _shipMenu();
        break;
      case `remove`:
        _shipMenu();
        break;
      case `select`:
        _selectShip();
        break;
      case `list`:
        console.log(data);
        term.cyan(`back?\n`);
        term.yesOrNo({yes: [`y`, `ENTER`],
          no:  [`n`]}, (err, response)=>{
          console.log(response);
          if (response) {
            _shipMenu();
          }
        });
        break;
      default:
        _shipMenu();
        break;
    }
  });
}
async function _mainMenu() {
  //menu

  //TL
  //ship
  //-> add
  //-> edit
  //-> remove
  //cargo
  //-> list
  //-> add
  //-> edit
  //-> remove
  //crew
  //-> list
  //-> add
  //-> edit
  //-> remove
  //fuel
  //-> list
  //-> add
  //-> edit
  //-> remove
  //-> calc
  //-> jump
  clear();
  term.cyan(`Welcome to Antimatter!\n`);
  term.cyan(`Select option:\n`);
  const menu = [`Ship`, `Cargo`, `Crew`, `Fuel`, `Exit`];

  term.singleColumnMenu(menu, async(err, response)=>{
    term(`\n`).eraseLineAfter.green(
      `#%s selected: %s (%s.%s)\n`,
      response.selectedIndex,
      response.selectedText,
      response.x,
      response.y
    );

    switch (response.selectedText) {
      case `Exit`:
        term.processExit();
        break;
      case `Cargo`:
        _cargoMenu();
        break;
      case `Crew`:
        _crewMenu();
        break;
      case `Fuel`:
        _fuelMenu();
        break;
      case `Ship`:
        _shipMenu();
        break;
      default:
        _mainMenu();
        break;
    }
  });
}

async function main() {
  try {
    term = termkit.createTerminal();
    term.on(`key`, (name, matches, data)=>{
      if (matches.indexOf(`CTRL_C`) >= 0) {
        clear();
        term.green(`ctrl-c recieved...\n`);
        term.processExit();
      }
    });

    //get data
    if (fs.existsSync(DOCK)) {
      await _load();
    } else {
      data = [];
    }

    //while (run) {
    await _mainMenu();
    //}

    //await _save();
  } catch (e) {
    log.error(`Antimatter leak:`, e);
  }
}

main();
