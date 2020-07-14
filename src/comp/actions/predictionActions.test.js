import { getFixtureID } from './predictionActions';

test('get game id', () => {
  const id = getFixtureID('Real Madrid vs Barcelona', {});
  expect(id).toBeDefined();
});
