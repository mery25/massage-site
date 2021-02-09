import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import React from 'react';

describe("NavBar", () => {

    const expectedLinks = [
        'Inicio',
        'Sobre mi',
        'Masajes',
        'Testimonios',
        'Tarifas',
        'Ofertas',
        'Contacto'
    ]

    test('Should have expected links', () => {
        render(<NavBar />)

        expectedLinks.forEach(link => {
            expect(screen
                .getByText(link)
                .closest('a'))
                .toBeInTheDocument()
        })


    })

    test('Should have logo link', () => {
        render(<NavBar />)

        expect(screen
            .getByAltText('Logo')
            .closest('a'))
            .toBeInTheDocument()

    })

    test('Should collapse navbar', () => {
        render(<NavBar />)

        const input = screen.getByTestId('toggle-nav-input')
        const nav = screen.getByTestId('navbar-nav')

        // Toggle checkbox
        input.click()
        // Nav should not have collapsed class (by default is collapsed)
        expect(nav.classList.contains('navbar__nav--collapsed')).toBe(false)

       // Toggle checkbox
       input.click()
       // Nav should have collapsed class
       expect(nav.classList.contains('navbar__nav--collapsed')).toBe(true)

    })
})