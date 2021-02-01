import React from "react"
import "./Products.sass"

const Products = () => {
    return (
        <section className="products">
            <h2 className="products__title">Servicios</h2>
            <div className="product">
                <h3 className="product__title">Masaje Ayurveda</h3>
                <label className="product__price-amount">40€</label>
                <ul className="product__features">
                    <li className="product__feature">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="product__feature">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li className="product__feature">
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Products