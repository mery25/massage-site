import React from "react"
import lotus from "../../assets/images/purple-lotus.png"
import "./Divider.sass"

const Divider = () => {
    return (
        <div className="divider">
            <span></span>
            <span className="divider__image">
                <img src={lotus} alt=""/>
            </span>
            <span></span>
        </div>
    )
}

export default Divider