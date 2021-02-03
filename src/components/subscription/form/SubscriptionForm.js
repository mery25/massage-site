import React, {useState} from "react"
import "./SubscriptionForm.sass"
import Input from "../../common/Input"

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
        <form className="subscription-form" onSubmit={handleSubmit}  autoComplete="off" noValidate>
            <Input 
                id="email"
                type="email" 
                className="form-control required"
                placeholder="Escribe tu email" 
                value={subscriptionEmail} 
                onChange={e => setSubscriptionEmail(e.target.value)} 
                onBlur={handleBlur}
                name="Email"
                error={validationError !== ""}
                errorText={validationError}
            />
            <Input 
                type="submit" 
                value="+" 
                name="Enviar"
            />
        </form>
    )
}

export default SubscriptionForm