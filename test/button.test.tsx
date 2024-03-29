import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button variant='primary' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
