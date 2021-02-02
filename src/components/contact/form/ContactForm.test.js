import { render, screen} from '@testing-library/react'
import ContactForm from './ContactForm'
import React from 'react'

describe("Contact Form", () => {

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

})