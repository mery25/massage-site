import React from "react"
import "./Product.sass"
import {List} from "../../common"

const Product = ({title, priceAmount, features}) => {
    return (
        <div className="product">
            <h3 className="product__title">{title}</h3>
            <label className="product__price-amount">{priceAmount}€</label>
            <List className="product__features" items={features}/>
        </div>
    )
}

export default Product