import React from "react"
import ContactItems from "./items/ContactItems"
import ContactForm from "./form/ContactForm"
import {ScrollSection, Head} from "../common"
import "./Contact.sass"

const Contact = ({validateEmail, validatePhone, sendContact}) => {
    return (
        <ScrollSection id="contact" className="contact">
            <Head title="Contacto"/>
            <ContactForm 
                className="contact__form" 
                validateEmail={validateEmail}  
                validatePhone={validatePhone}
                sendContact={sendContact}
            />
            <ContactItems className="contact__items" />
        </ScrollSection>
    )
}

export default Contact