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
            .getByPlaceholderText('Escribe tu telefono')
            .closest('input')).toBeInTheDocument()

        expect(screen
            .getByPlaceholderText('Horario preferente')
            .closest('input')).toBeInTheDocument()
    

        expect(screen
            .getByPlaceholderText('Escribe un comentario')
            .closest('input')).toBeInTheDocument()
        
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

    test('Should set inputs values on inputs when change', () => {
        render(<ContactForm />);

        expectInputToUpdateItsValue('Escribe tu nombre', 'mari')
        expectInputToUpdateItsValue('Escribe tu email', 'm@gmail.com')
        expectInputToUpdateItsValue('Escribe tu telefono', '666335566')
        expectInputToUpdateItsValue('Horario preferente', '09-06-12 09:12:00')
        expectInputToUpdateItsValue('Escribe un comentario', 'bla bla')
        
    })
})