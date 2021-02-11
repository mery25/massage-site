import React from "react"
import "./List.sass"

const List = ({className, items}) => {
    return (
        <ul className={`list ${className}`}>
            {
                items.map( (item, idx) => 
                    <li key={idx} className="list__item">{item}</li>
                )
            }
        </ul>
    )
}

export default List