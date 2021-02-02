import React, {useState} from "react"
import "./Subscription.sass"

const Subscription = ({validateEmail, subscribeEmail}) => {

    const [subscriptionEmail, setSubscriptionEmail] = useState("")
    const [validationError, setValidationError] = useState("")

    const handleSubmit = evt => {
        evt.preventDefault()
        setValidationError('')

        const error = validateEmail(subscriptionEmail)
        if (error) {
            setValidationError(error)
            return
        }

        subscribeEmail(subscriptionEmail)
    }

    const handleBlur = evt => {
        const { value } = evt.target;
    
        setValidationError('')

        const error = validateEmail(value);

        setValidationError(error)
    }


    return (
        <section className="subscription">
            <h3>SUSCRIBETE A MI NEWSLELLETER PARA RECIBIR OFERTAS ESPECIALES</h3>
            <form onSubmit={handleSubmit}  autoComplete="off" noValidate>
                <div className="form-group">
                    <input 
                        id="email"
                        type="email" 
                        className="form-control required"
                        placeholder="Escribe tu email" 
                        aria-label="email-input"
                        value={subscriptionEmail} 
                        onChange={e => setSubscriptionEmail(e.target.value)} 
                        onBlur={handleBlur}
                        name="email"
                        required
                    />
                </div>
                <small>{validationError}</small>
                <div className="form-group">
                    <input 
                        type="submit" 
                        value="+" 
                        alt="Enviar"
                    />
                </div>
            </form>
        </section>
    )
}

export default Subscription