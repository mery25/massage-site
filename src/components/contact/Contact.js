import React from "react"
import ContactItems from "./items/ContactItems"
import ContactForm from "./form/ContactForm"
import "./Contact.sass"

const Contact = ({validateEmail, validatePhone, sendContact}) => {
    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <ContactItems className="contact__items" />
            <ContactForm 
                className="contact__form" 
                validateEmail={validateEmail}  
                validatePhone={validatePhone}
                sendContact={sendContact}
            />
        </section>
    )
}

export default Contact