import React from "react"
import "./Offers.sass"
import {Head, ScrollSection} from "../common"

const Offers = ()=> {
    return (
        <ScrollSection name="offer" id="offer" className="offer">
            <Head title="Oferta especial"/>
            <p className="offer__description"><span className="highlighted">50%</span> de descuento en un masaje por traer un amigo o familiar</p>
        </ScrollSection>
    )
}

export default Offers