import { render, screen, fireEvent} from '@testing-library/react'
import SubscriptionForm from './SubscriptionForm'
import React from 'react'

describe("Subscription Form", () => {

    test('Should have an email form', () => {
        render(<SubscriptionForm />);

        expect(screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByDisplayValue('+')
            .closest('input')).toBeInTheDocument()
    })

    test('Should set email on input when change', () => {
        render(<SubscriptionForm />);

        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')

        fireEvent.change(emailInput, { target: { value: 'm@gmail.com' } })
        expect(emailInput.value).toBe('m@gmail.com')
        
    })

    test('Should call submit on click submit button', () => {
        const mockedOnSubscribe = jest.fn()
        mockedOnSubscribe.mockImplementation(() => null)

        render(<SubscriptionForm 
            subscribeEmail={mockedOnSubscribe} 
            validateEmail={jest.fn()} 
        />)
    
        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')

        fireEvent.change(emailInput, {
            target: { value: 'm@gmail.com' }
        })
    
        const submitInput = screen
            .getByDisplayValue('+')
            .closest('input')
        fireEvent.click(submitInput)

        expect(mockedOnSubscribe).toBeCalledWith('m@gmail.com')
        
    })

    test('Should add error when email validation fails', () => {
        const mockedValidateEmail = jest.fn()
        mockedValidateEmail.mockImplementation(() => "Introduce un email válido");
        render(<SubscriptionForm validateEmail={mockedValidateEmail} />);
    
        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')
        fireEvent.change(emailInput, {
            target: { value: 'm@gmail.com' }
        })
    
        expect(screen.queryByText("Introduce un email válido")).not.toBeInTheDocument()

        const submitInput = screen
            .getByDisplayValue('+')
            .closest('input')
        fireEvent.click(submitInput)

        expect(screen.getByText("Introduce un email válido"))
            .toBeInTheDocument()
        
    })

})