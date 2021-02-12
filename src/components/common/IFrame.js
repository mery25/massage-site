import React from "react"
import "./IFrame.sass"

const IFrame = ({className, title, source, width, height}) => {
    return (
        <div className={className ? `iframe-container ${className}`: "iframe-container"}>       
            <iframe title={title} className="iframe"
                src={source} 
            />         
        </div>
    )
}

export default IFrame