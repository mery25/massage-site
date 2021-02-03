import { render, screen, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'
import React from 'react'

describe("Contact Form", () => {

    const expectInputToUpdateItsValue = (inputPlaceholder, valueToUpdate) => {
        const input = screen
            .getByPlaceholderText(inputPlaceholder)
            .closest('input')

        fireEvent.change(input, { target: { value: valueToUpdate } })
        expect(input.value).toBe(valueToUpdate)
    }

    test('Should have name, email, phone, schedule and comments input', () => {
        render(<ContactForm />);

        expect(screen
            .getByPlaceholderText('Escribe tu nombre')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByPlaceholderText('Escribe tu teléfono')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByPlaceholderText('Horario preferente')
            .closest('input')).toBeInTheDocument()
    

        expect(screen
            .getByPlaceholderText('Escribe un comentario')
            .closest('textarea')).toBeInTheDocument()
        
        expect(screen
            .getByDisplayValue('Enviar')
            .closest('input')).toBeInTheDocument()
    })

    test('Should change input type on the prefered schedule on focus', () => {
        render(<ContactForm />);

        const preferedSchedule = screen
            .getByPlaceholderText('Horario preferente')
            .closest('input')

        expect(preferedSchedule.type).toBe('text')

        preferedSchedule.focus()
        expect(preferedSchedule.type).toBe('datetime-local')

        preferedSchedule.blur()
        expect(preferedSchedule.type).toBe('text')

    })

    test('Should set input values on inputs when change', () => {
        render(<ContactForm />);

        expectInputToUpdateItsValue('Escribe tu nombre', 'mari')
        expectInputToUpdateItsValue('Escribe tu email', 'm@gmail.com')
        expectInputToUpdateItsValue('Escribe tu teléfono', '666335566')
        expectInputToUpdateItsValue('Horario preferente', '09-06-12 09:12:00')
        const textArea = screen
            .getByPlaceholderText("Escribe un comentario")
            .closest('textarea')

        fireEvent.change(textArea, { target: { value: "bla bla" } })
        expect(textArea.value).toBe("bla bla")
        
    })

    test('Should validate email and phone when blur', () => {
        const mockedValidateEmail = jest.fn()
        mockedValidateEmail.mockImplementation(() => "Introduce un email válido");

        const mockedValidatePhone = jest.fn()
        mockedValidatePhone.mockImplementation(() => "Introduce un teléfono válido");

        render(<ContactForm validateEmail={mockedValidateEmail} validatePhone={mockedValidatePhone}/>);
    
        const emailInput = screen
            .getByPlaceholderText('Escribe tu email')
            .closest('input')
        fireEvent.change(emailInput, {
            target: { value: '@gmail.com' }
        })
        expect(screen.queryByText("Introduce un email válido")).not.toBeInTheDocument()
    
        fireEvent.blur(emailInput)

        expect(screen.getByText("Introduce un email válido"))
            .toBeInTheDocument()

        
        const phoneInput = screen
            .getByPlaceholderText('Escribe tu teléfono')
            .closest('input')
        fireEvent.change(phoneInput, {
            target: { value: 'a67' }
        })
        expect(screen.queryByText("Introduce un teléfono válido")).not.toBeInTheDocument()
    
        fireEvent.blur(phoneInput)
        expect(screen.getByText("Introduce un teléfono válido"))
            .toBeInTheDocument()
        
    })

    test('Should call submit on click submit button', () => {
        const mockedOnSubmit = jest.fn()
        mockedOnSubmit.mockImplementation(() => null)

        render(<ContactForm 
            subscribeEmail={mockedOnSubmit} 
            validateEmail={jest.fn()} 
            validatePhone={jest.fn()}
        />)
    
        fireEvent.change(screen
            .getByPlaceholderText('Escribe tu nombre'), {
            target: { value: 'mar' }
        })
        fireEvent.change(screen
            .getByPlaceholderText('Escribe tu email'), {
            target: { value: 'm@gmail.com' }
        })
        fireEvent.change(screen
            .getByPlaceholderText('Escribe tu teléfono'), {
            target: { value: '677565678' }
        })
        fireEvent.change(screen
            .getByPlaceholderText('Horario preferente'), {
            target: { value: '06-12-2021T12:23' }
        })
        fireEvent.change(screen
            .getByPlaceholderText('Escribe un comentario'), {
            target: { value: 'Este es mi comentario' }
        })
        fireEvent.click(screen
            .getByDisplayValue('Enviar'))

        expect(mockedOnSubmit).toBeCalledWith({
            nombre: 'mar',
            phone: '677565678',
            email: 'm@gmail.com',
            preferedSchedule: '06-12-2021T12:23',
            comment: 'Este es mi comentario'
        })
        
    })

})