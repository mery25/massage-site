import { render, screen } from '@testing-library/react';
import ToggleNav from './ToggleNav';
import React from 'react';

describe("ToggleNav", () => {

    test('Should have an input checked', () => {
        render(<ToggleNav active={true}/>);

        const input = screen.getByTestId('toggle-nav-input')
        expect(input.checked).toBe(true)
    })

})