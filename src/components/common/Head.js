import React from "react"
import "./Head.sass"

const Head = ({title}) => {
    return (
        <div className="head">
            <h2 className="head__title">{title}</h2>
        </div>
    )
}

export default Head