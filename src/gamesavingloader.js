import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((resp) => json(resp))
      .then((resp) => JSON.parse(resp))
      .catch((err) => err);
  }
}
