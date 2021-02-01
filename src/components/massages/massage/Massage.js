import React from "react"
import "./Massage.sass"

const Massage = ({title, image, description, features}) => {

    return (
        <div className="massage">
            <h3 className="massage__name">{title}</h3>
            <img className="massage__image" src={image} alt={title}></img>
            <p className="massage__description">{description}</p>
            <ul className="massage__features">
                {
                    features.map( (feature, idx) => <li key={idx}>{feature}</li>)
                }
            </ul>
        </div>
    )
}

export default Massage