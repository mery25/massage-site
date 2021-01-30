import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import React from 'react';
import { MemoryRouter } from 'react-router';

describe("NavBar", () => {

    const expectedLinks = [
        { text: 'Inicio', path: "/home"},
        { text: 'Sobre mi', path: "/aboutme"},
        { text: 'Masajes', path: "/massages"},
        { text: 'Tarifas', path: "/prices"},
        { text: 'Oferta', path: "/offer"},
        { text: 'Contacto', path: "/contact"},

    ]

    test('Should have expected links', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>);

        expectedLinks.forEach(link => {
            expect(screen
                .getByText(link.text)
                .closest('a'))
                .toHaveAttribute('href', link.path)
        })


    })

    test('Should have logo link', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>);

        expect(screen
            .getByAltText('Logo')
            .closest('a'))
            .toHaveAttribute('href', "/home")

    })
})