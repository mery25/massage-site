import React from "react"
import "./Products.sass"
import Product from "./product/Product"

const Products = () => {

    const products = [
        {
            title: "Masaje Ayurveda",
            priceAmount: 40,
            features: [
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet."
            ]
        },
        {
            title: "Masaje Descontracturante Parcial",
            priceAmount: 20,
            features: [
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet."
            ]
        },
                {
            title: "Masaje Descontracturante Completo",
            priceAmount: 30,
            features: [
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet."
            ]
        }
    ]

    return (
        <section className="products">
            <h2 className="products__title">Servicios</h2>
            <div className="products__container">
                {
                    products.map(product => 
                        <Product
                            title={product.title}
                            priceAmount={product.priceAmount}
                            features={product.features}
                        />)
                }
            </div>
        </section>
    )
}

export default Products