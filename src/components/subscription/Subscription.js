import React, {useState} from "react"
import "./Subscription.sass"

const Subscription = ({validateEmail, subscribeEmail}) => {

    const [subscriptionEmail, setSubscriptionEmail] = useState("")

    const onSubmit = (evt) => {
        evt.preventDefault()
        subscribeEmail(subscriptionEmail)
    }

    return (
        <section className="subscription">
            <h3>SUSCRIBETE A MI NEWSLELLETER PARA RECIBIR OFERTAS ESPECIALES</h3>
            <form onSubmit={onSubmit} >
                <input 
                    type="email" 
                    placeholder="Escribe tu email" 
                    aria-label="email-input"
                    value={subscriptionEmail} 
                    onChange={e => setSubscriptionEmail(e.currentTarget.value)} 
                />
                <small></small>
                <input 
                    type="submit" 
                    value="+" 
                    alt="Enviar"
                />
            </form>
        </section>
    )
}

export default Subscription