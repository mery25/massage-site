import React from "react"
import "./Subscription.sass"
import SubscriptionForm from "./form/SubscriptionForm"

const Subscription = ({validateEmail, subscribeEmail}) => {

    return (
        <section className="subscription">
            <h3>SUSCRIBETE A MI NEWSLELLETER PARA RECIBIR OFERTAS ESPECIALES</h3>
            <SubscriptionForm validateEmail={validateEmail} subscribeEmail={subscribeEmail}/>
        </section>
    )
}

export default Subscription