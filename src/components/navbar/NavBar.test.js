import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import React from 'react';
import { MemoryRouter } from 'react-router';

describe("NavBar", () => {

    test('Should have home link', () => {
        render(
            <MemoryRouter initialEntries={[ '/home' ]}>
                <NavBar />
            </MemoryRouter>);

        expect(screen
            .getByText('Inicio')
            .closest('a'))
            .toHaveAttribute('href', '/home')

    })
})