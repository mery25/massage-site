import { render } from '@testing-library/react';
import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router';

test('Renders App sucessfully', () => {
  render(
    <MemoryRouter>
        <App />
    </MemoryRouter>);
});