import React, {useState} from "react"
import Input from "../../common/Input"
import "./ContactForm.sass"

const ContactForm = () => {
    const [preferedScheduleInputType, setPreferedScheduleInputType] = useState('text')
    const [values, setValues] = useState({
        'name': "",
        'email': "",
        'phone': "",
        'preferedDateTime': "",
        'comment': ""
    })

    const minDateTime = () => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(10)
        tomorrow.setMinutes(0)
        const dateToString = tomorrow.toISOString().slice(0,16)
        return dateToString
    }

    const maxDateTime = () => {
        let tomorrow = new Date();
        tomorrow.setUTCFullYear(tomorrow.getUTCFullYear() + 1)
        tomorrow.setHours(10)
        tomorrow.setMinutes(0)
        const dateToString = tomorrow.toISOString().slice(0,16)
        return dateToString
    }

    const handleFocusDateTime = evt => {
        setPreferedScheduleInputType('datetime-local')
    }

    const handleOnBlurFocusDateTime = evt => {
        if (evt.target.value === '') {
            setPreferedScheduleInputType('text')
        }
    }

    const handleChange = evt => {
        const {name, value} = evt.target
        
        console.log(`${name} = ${value}`)
        setValues(values =>  { 
            return {
                ...values,
                [name]: value
            }
        })
    }

    return (
        <form className="contact-form" autoComplete="off" noValidate>
            <Input
                id="name"
                type="text"
                placeholder="Escribe tu nombre"
                name="name"
                divClassName="contact-form__name"
                value={values["name"]}
                onChange={handleChange}
            />
            <Input
                id="phone"
                type="tel"
                placeholder="Escribe tu telefono"
                name="phone"
                divClassName="contact-form__phone"
                onChange={handleChange}
            />
            <Input
                id="email"
                type="email"
                placeholder="Escribe tu email"
                name="email"
                divClassName="contact-form__email"
                onChange={handleChange}
            />
            <Input
                id="preferedDateTime"
                type={preferedScheduleInputType}
                placeholder="Horario preferente"
                name="preferedDateTime"
                onFocus={handleFocusDateTime}
                onBlur={handleOnBlurFocusDateTime}
                divClassName="contact-form__schedule"
                onChange={handleChange}
                min={minDateTime()}
                max={maxDateTime()}
            />
            <Input
                id="comment"
                type="textarea"
                placeholder="Escribe un comentario"
                name="comment"
                divClassName="contact-form__comment"
                onChange={handleChange}
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