import React from "react"
import "./TextSection.sass"

const TextSection = ({text}) => {
    return (
        <React.Fragment>
            <p className="text-section">{text}</p>
        </React.Fragment>
    )
}

export default TextSection