import React from "react"
import "./Massage.sass"
import {TextSection, List} from "../../common"

const Massage = ({className, key, title, image, description, features}) => {

    return (
        <div className={className? `massage active ${className}` : "massage active"} key={key}>
            <img className="massage__image" src={image} alt={title}></img>
            <div className="massage__description">
                <h3 className="massage__name">{title}</h3>
                <TextSection text={description} />
                <List items={features} />
            </div>
        </div>
    )
}

export default Massage