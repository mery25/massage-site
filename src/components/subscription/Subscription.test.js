import { render, screen, fireEvent} from '@testing-library/react'
import Subscription from './Subscription'
import React from 'react'

describe("Subscription", () => {

    test('Should have an email form', () => {
        render(<Subscription />);

        expect(screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByAltText('Enviar')
            .closest('input')).toBeInTheDocument()
    })

    test('Should set email on input when change', () => {
        render(<Subscription />);

        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')

        fireEvent.change(emailInput, { target: { value: 'm@gmail.com' } })
        expect(emailInput.value).toBe('m@gmail.com')
        
    })
})