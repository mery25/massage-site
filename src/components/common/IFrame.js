import React from "react"
import "./IFrame.sass"

const IFrame = ({source, width, height}) => {
    return (
        <div className="iframe-container">       
            <iframe className="iframe"
                src={source} 
            />         
        </div>
    )
}

export default IFrame