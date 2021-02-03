const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const isEmailValid = (email) => {
    return EMAIL_REGEX.test(email)
}
const isPhoneValid = (phone) => {
    return PHONE_REGEX.test(phone)
}

export const emailValidation = email => {
    if (isEmailValid(email)) {
        return null;
    }
    if (email.trim() === "") {
        return "Email is required";
    }
    return "Introduce un email válido";
}

export const phoneValidation = phone => {
    if (isPhoneValid(phone)) {
        return null;
    }
    if (phone.trim() === "") {
        return "Phone is required";
    }
    return "Introduce un teléfono válido";
}