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

        test('Should return `Please enter a valid email` when email is invalid', () => {
            let invalidEmail = 'a.gm.c'
            expect(emailValidation(invalidEmail)).toBe('Please enter a valid email')

            invalidEmail = '@gm.c'
            expect(emailValidation(invalidEmail)).toBe('Please enter a valid email')

            invalidEmail = 'mery@'
            expect(emailValidation(invalidEmail)).toBe('Please enter a valid email')
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
    })
})