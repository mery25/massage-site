import React from "react"
import ContactItem from "./ContactItem"
import IFrame from "../../common/IFrame"
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import "./ContactItems.sass"

const ContactItems = () => {
    return (
        <ul className="contact-items">
            <ContactItem
                text="Lunes - Viernes   9:00am - 6:00pm"
                icon={faClock} 
            />
            <ContactItem
                text="+34 677673123"
                icon={faPhoneAlt} 
            />
            <a className="contact-items__link" href="maito:cris.gu@gmail.com">
                <ContactItem
                    text="cris.guz@gmail.com"
                    icon={faEnvelope} 
                />
            </a>
            <ContactItem
                text="Calle 5, 56 Valencia"
                icon={faMapMarkerAlt} 
            />
            <IFrame
                className="contact-items__map"
                title="Mapa de Valencia"
                source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.306310689679!2d-0.4616216619124423!3d39.590880092311274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605cc7cf2903df%3A0x2ee3c82f25c67a13!2zQ2FsbGUgSm9zw6kgR2FzY8OzbiwgNjAsIDQ2MTE3IELDqXRlcmEsIFZhbGVuY2lh!5e0!3m2!1ses!2ses!4v1612270227167!5m2!1ses!2ses"
                width="600" 
                height="450"
            />
            <ContactItem
                text="Calle José Gascón, 60  Bétera, Valencia"
                icon={faMapMarkerAlt} 
            />
            <IFrame
                className="contact-items__map"
                title="Mapa de Valencia"
                source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.306310689679!2d-0.4616216619124423!3d39.590880092311274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605cc7cf2903df%3A0x2ee3c82f25c67a13!2zQ2FsbGUgSm9zw6kgR2FzY8OzbiwgNjAsIDQ2MTE3IELDqXRlcmEsIFZhbGVuY2lh!5e0!3m2!1ses!2ses!4v1612270227167!5m2!1ses!2ses"
                width="600" 
                height="450"
            />
        </ul>
    )
}

export default ContactItems