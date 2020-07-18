import React from 'react';
import { render } from '@testing-library/react-native';
import CreateRoom from '../../../src/comp/gamesRoom/CreateRoom';

describe('CreateRoom comp tests', function () {
  test('render CreateRoom comp with given navigation', function () {
    const { baseElement } = render(<CreateRoom />);
    expect(baseElement).toBeDefined();
  });
});
