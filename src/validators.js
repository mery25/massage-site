const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const isEmailValid = (email) => {
    return EMAIL_REGEX.test(email)
}

export const emailValidation = email => {
    if (isEmailValid(email)) {
        return null;
    }
    if (email.trim() === "") {
        return "Email is required";
    }
    return "Please enter a valid email";
}