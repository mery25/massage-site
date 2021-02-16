import React from "react"
import "./Subscription.sass"
import SubscriptionForm from "./form/SubscriptionForm"
import {ScrollSection} from "../common"

const Subscription = ({validateEmail, subscribeEmail}) => {

    return (
        <ScrollSection id="subscription" name="subscription" className="subscription">
            <h3 className="subscription__title">SUSCRIBETE A MI NEWSLETTER PARA RECIBIR OFERTAS ESPECIALES</h3>
            <SubscriptionForm validateEmail={validateEmail} subscribeEmail={subscribeEmail}/>
        </ScrollSection>
    )
}

export default Subscription