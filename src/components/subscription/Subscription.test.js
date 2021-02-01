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

    test('Should call submit on click submit button', () => {
        const mockedOnSubscribe = jest.fn()
        render(<Subscription 
            subscribeEmail={mockedOnSubscribe} 
            validateEmail={jest.fn()} 
        />);
    
        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')

        fireEvent.change(emailInput, {
            target: { value: 'm@gmail.com' }
        })
    
        const submitInput = screen
            .getByAltText('Enviar')
            .closest('input')
        fireEvent.click(submitInput)

        expect(mockedOnSubscribe).toBeCalledWith('m@gmail.com')
        
    })

    test('Should add error when email validation fails', () => {
        const mockedValidateEmail = jest.fn()
        mockedValidateEmail.mockImplementation(() => {
            throw new Error("Validation fails");
        });
        render(<Subscription validateEmail={mockedValidateEmail} />);
    
        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')
        fireEvent.change(emailInput, {
            target: { value: 'm@gmail.com' }
        })
    
        expect(screen.queryByText("Validation fails"))
        .not.toBeInTheDocument()

        const submitInput = screen
            .getByAltText('Enviar')
            .closest('input')
        fireEvent.click(submitInput)

        expect(screen.getByText("Validation fails"))
            .toBeInTheDocument()
        
    })

})