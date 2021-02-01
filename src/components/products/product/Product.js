import React from "react"
import "./Product.sass"

const Product = ({title, priceAmount, features}) => {
    return (
        <div className="product">
            <h3 className="product__title">{title}</h3>
            <label className="product__price-amount">{priceAmount}€</label>
            <ul className="product__features">
                {
                    features.map( (feature, idx) => 
                        <li className="product__feature" key={idx}>{feature}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Product