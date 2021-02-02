import "./validators"
import { emailValidation } from "./validators";

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
