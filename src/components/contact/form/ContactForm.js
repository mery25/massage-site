import React, {useState} from "react"
import Input from "../../common/Input"
import "./ContactForm.sass"

const ContactForm = () => {
    const [preferedScheduleInputType, setPreferedScheduleInputType] = useState('text')

    const handleFocusDateTime = evt => {
        setPreferedScheduleInputType('datetime-local')
    }

    const handleOnBlurFocusDateTime = evt => {
        if (evt.target.value === '') {
            setPreferedScheduleInputType('text')
        }
    }

    return (
        <form className="contact-form" autoComplete="off" noValidate>
            <Input
                id="name"
                type="text"
                placeholder="Escribe tu nombre"
                name="name"
                divClassName="contact-form__name"
            />
            <Input
                id="phone"
                type="tel"
                placeholder="Escribe tu telefono"
                name="Phone"
                divClassName="contact-form__phone"
            />
            <Input
                id="email"
                type="email"
                placeholder="Escribe tu email"
                name="Email"
                divClassName="contact-form__email"
            />
            <Input
                id="schedule"
                type={preferedScheduleInputType}
                placeholder="Horario preferente"
                name="schedule"
                onFocus={handleFocusDateTime}
                onBlur={handleOnBlurFocusDateTime}
                divClassName="contact-form__schedule"
            />
            <Input
                id="comment"
                type="textarea"
                placeholder="Escribe un comentario"
                name="comment"
                divClassName="contact-form__comment"
            />
            <Input
                type="submit"
                value="Enviar"
                name="Enviar"
                divClassName="contact-form__submit"
            />
        </form>
    )
}

export default ContactForm