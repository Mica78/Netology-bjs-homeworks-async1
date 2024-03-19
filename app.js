import GameSavingLoader from './src/gamesavingloader';

GameSavingLoader.load().then((saving) => saving, (err) => err);
