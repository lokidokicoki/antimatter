'use strict';

import fs from 'fs-extra-promise';
import inquirer from 'inquirer';
import log from './src/logger';
import Ship from './src/ship';

let data = null;
let ship; //current active ship
const DOCK = `ships.json`;

async function _load() {
  try {
    data = await fs.readJsonAsync(DOCK);
  } catch (e) {
    throw new Error(`_load failed:`, e);
  }
}

async function _save() {
  try {
    fs.writeJsonAsync(DOCK, data);
  } catch (e) {
    throw new Error(`_save failed:`, e);
  }
}

async function _loop() {


}

async function main() {
  try {
    log.info(`Welcome to Antimatter!`);

    //get data
    if (fs.existsSync(DOCK)) {
      await _load();
    } else {
      data = [];
    }

    await _loop();

    await _save();
  } catch (e) {
    log.error(`Antimatter leak:`, e);
  }
}

main();
