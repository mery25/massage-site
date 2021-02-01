import { render, screen } from '@testing-library/react';
import Massages from './Massages';
import React from 'react';

describe("Messages", () => {

    test('Should have two tabs', () => {
        render(<Massages />);

        expect(screen
            .getByText('Ayurveda')
            .closest('button')).toBeInTheDocument()

        expect(screen
            .getByText('Descontracturante')
            .closest('button')).toBeInTheDocument()
    })
})