import GameSavingLoader from '../gamesavingloader';

// eslint-disable-next-line jest/no-done-callback
test('GameSavingLoader test object', (done) => {
  const correctObject = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  GameSavingLoader.load().then((res) => {
    expect(res).toEqual(correctObject);
    done();
  });
});
