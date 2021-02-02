import React, {useState} from "react"

const SubscriptionForm = ({validateEmail, subscribeEmail}) => {

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
        <form onSubmit={handleSubmit}  autoComplete="off" noValidate>
            <div className="form-group">
                <input 
                    id="email"
                    type="email" 
                    className="form-control required"
                    placeholder="Escribe tu email" 
                    value={subscriptionEmail} 
                    onChange={e => setSubscriptionEmail(e.target.value)} 
                    onBlur={handleBlur}
                    name="Email"
                    required
                />
                <small>{validationError}</small>
            </div>
            <div className="form-group">
                <input 
                    type="submit" 
                    value="+" 
                    alt="Enviar"
                />
            </div>
        </form>
    )
}

export default SubscriptionForm