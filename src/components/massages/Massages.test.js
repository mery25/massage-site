import { render, screen } from '@testing-library/react';
import Massages from './Massages';
import React from 'react';

describe("Massages", () => {

    test('Should have two tabs', () => {
        render(<Massages />);

        expect(screen
            .getByText('Ayurveda')
            .closest('button')).toBeInTheDocument()

        expect(screen
            .getByText('Descontracturante')
            .closest('button')).toBeInTheDocument()
    })

    test('Should show massage content for the massage tab pressed', () => {
        render(<Massages />);

        const ayurvedaTab = screen
            .getByText('Ayurveda')
            .closest('button')

        ayurvedaTab.click()

        expect(screen
            .getByText('Masaje ayurveda')
            .closest('h3')).toBeInTheDocument()

        expect(screen
            .queryByText('Masaje relajante descontracturante')).toBeNull()


        const descontracturanteTab = screen
            .getByText('Descontracturante')
            .closest('button')

        descontracturanteTab.click()

        expect(screen
            .getByText('Masaje relajante descontracturante')
            .closest('h3')).toBeInTheDocument()

        expect(screen
            .queryByText('Masaje ayurveda')).toBeNull()

    })
})