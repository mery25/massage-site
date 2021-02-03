import "./validators"
import { emailValidation, phoneValidation } from "./validators";

describe("Validations logic", () => {
    describe("Email validation logic", () => {

        test('Should return null when the email is valid', () => {
            const validEmail = 'm@gmail.com'
            expect(emailValidation(validEmail)).toBeNull()
        })

        test('Should return `Email is required` when email is empty', () => {
            let emptyEmail = ' '
            expect(emailValidation(emptyEmail)).toBe('Email is required')
        })

        test('Should return `Introduce un email válido` when email is invalid', () => {
            let invalidEmail = 'a.gm.c'
            expect(emailValidation(invalidEmail)).toBe('Introduce un email válido')

            invalidEmail = '@gm.c'
            expect(emailValidation(invalidEmail)).toBe('Introduce un email válido')

            invalidEmail = 'mery@'
            expect(emailValidation(invalidEmail)).toBe('Introduce un email válido')
        })
    })

    describe("Phone validation logic", () => {
        test('Should return null when the phone is valid', () => {
            let validPhone = '+34 677453289'
            expect(phoneValidation(validPhone)).toBeNull()

            validPhone = '677453289'
            expect(phoneValidation(validPhone)).toBeNull()

            validPhone = '0034677453289'
            expect(phoneValidation(validPhone)).toBeNull()
        })

        test('Should return `Phone is required` when phone is empty', () => {
            let emptyPhone = ' '
            expect(phoneValidation(emptyPhone)).toBe('Phone is required')
        })

        test('Should return `Introduce un teléfono válido` when phone is invalid', () => {
            let invalidPhone = 'd903'
            expect(phoneValidation(invalidPhone)).toBe('Introduce un teléfono válido')

            invalidPhone = '677455678c'
            expect(phoneValidation(invalidPhone)).toBe('Introduce un teléfono válido')

            invalidPhone = '0003d44567'
            expect(phoneValidation(invalidPhone)).toBe('Introduce un teléfono válido')

            invalidPhone = '0003(44)567'
            expect(phoneValidation(invalidPhone)).toBe('Introduce un teléfono válido')
        })
    })
})