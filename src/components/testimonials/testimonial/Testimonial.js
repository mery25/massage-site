import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import "./Testimonial.sass"

const Testimonial = ({quote, name}) => {
    return (
        <div className="testimonial">
            <div className="legend">
                <p className="testimonial__quote">                        
                    <FontAwesomeIcon  
                        icon={ faQuoteLeft } 
                        className="testimonial__double-quote"
                    />
                    {quote}           
                    <FontAwesomeIcon  
                        icon={ faQuoteRight } 
                        className="testimonial__double-quote"
                    />
                </p>
                <h5 className="testimonial__name">-{name}</h5>
            </div>
        </div>
    )
}

export default Testimonial