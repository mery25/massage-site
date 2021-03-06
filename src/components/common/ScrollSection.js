import React from "react"
import { ScrollElement } from "react-scroll"
import "./ScrollSection.sass"

const ScrollSection = ({ children, parentBindings, className, ...otherProps}) => {
    return (
        <section 
            className={"section " + className} 
            {...otherProps}  
            ref={(el) => { parentBindings.domNode = el; }}
        >
            {children}
        </section> 
    )
}

export default ScrollElement(ScrollSection)