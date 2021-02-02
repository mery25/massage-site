import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ContactItem.sass"

const ContactItem = ({text, icon}) => {
    return (
        <li className="contact-item">
            <FontAwesomeIcon  icon={ icon } className="contact-item__icon"/>
            <span className="contact-item__text">{text}</span>
        </li>
    )
}

export default ContactItem