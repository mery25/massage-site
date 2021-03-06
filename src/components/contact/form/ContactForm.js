import React, { useState } from "react"
import { Input, Notification } from "../../common"
import "./ContactForm.sass"

const ContactForm = ({ validateEmail, validatePhone, sendContact }) => {

    const initialFormValues = {
        'name': "",
        'email': "",
        'phone': "",
        'preferedDateTime': "",
        'comment': ""
    }
    const initialValidationErrors = {
        'email': "",
        'phone': "",
    }
    const [preferedScheduleInputType, setPreferedScheduleInputType] = useState('text')
    const [values, setValues] = useState(initialFormValues)
    const [validationErrors, setValidationErrors] = useState(initialValidationErrors)

    const [notification, setNotification] = useState({
        text: "",
        type: null
    })


    const minDateTime = () => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(10)
        tomorrow.setMinutes(0)
        const dateToString = tomorrow.toISOString().slice(0, 16)
        return dateToString
    }

    const maxDateTime = () => {
        let tomorrow = new Date();
        tomorrow.setUTCFullYear(tomorrow.getUTCFullYear() + 1)
        tomorrow.setHours(10)
        tomorrow.setMinutes(0)
        const dateToString = tomorrow.toISOString().slice(0, 16)
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

    const setValidationError = (name, value) => {
        setValidationErrors(validationErrors => {
            return {
                ...validationErrors,
                [name]: value
            }
        })
    }

    const validate = (name, value) => {
        if (name === 'email')
            return validateEmail(value)

        if (name === 'phone')
            return validatePhone(value)

    }

    const handleBlur = evt => {

        const { name, value } = evt.target;

        setValidationError(name, '')

        const error = validate(name, value)

        setValidationError(name, error)

    }

    const handleChange = evt => {
        const { name, value } = evt.target

        setValues(values => {
            return {
                ...values,
                [name]: value
            }
        })
    }

    const clearForm = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
        setValues({ ...initialFormValues })
        setValidationErrors({ ...initialValidationErrors })
    }

    const setNotificationValues = error => {
        if (error) {
            setNotification({
                type: "error",
                text: `Error: ${error}`
            })
        }
        else {
            setNotification({
                type: "success",
                text: "Enviado correctamente!"
            })
        }
    }

    const handleNotificationDelete = () => {
        setNotification({type: null})
    }

    const handleSubmit = evt => {
        evt.preventDefault()

        setValidationError('phone', '')
        setValidationError('email', '')

        let error = validate('phone', values['phone'])
        if (error) {
            setValidationError('phone', error)
            setNotificationValues("Datos inválidos")
            return
        }

        error = validate('email', values['email'])
        if (error) {
            setValidationError('email', error)
            setNotificationValues("Datos inválidos")
            return
        }

        sendContact(values)
        clearForm()
        setNotificationValues()
    }

    const createNotification = () => {
        return (
                <Notification
                    type={type} 
                    text={text} 
                    autoDelete="true" 
                    autoDeleteTime="1200"
                    onDelete={handleNotificationDelete}
                />
        )
    }
    const { type, text } = notification
    return (
        <form className="contact-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
            <p className="contact-form__title">Rellena éste formulario para pedir cita.</p>
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
                placeholder="Escribe tu teléfono"
                name="phone"
                divClassName="contact-form__phone"
                onChange={handleChange}
                errorText={validationErrors['phone']}
                error={validationErrors['phone'] !== ''}
                onBlur={handleBlur}
            />
            <Input
                id="email"
                type="email"
                placeholder="Escribe tu email"
                name="email"
                divClassName="contact-form__email"
                onChange={handleChange}
                errorText={validationErrors['email']}
                error={validationErrors['email'] !== ''}
                onBlur={handleBlur}
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
            <textarea
                id="comment"
                placeholder="Escribe un comentario"
                name="comment"
                className="contact-form__comment"
                onChange={handleChange}
                wrap="hard"
            />
            <Input
                type="submit"
                value="Enviar"
                name="Enviar"
                divClassName="contact-form__submit"
            />
            {type && createNotification()}
        </form>
    )
}

export default ContactForm