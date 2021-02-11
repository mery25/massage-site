import React from "react"
import "./Products.sass"
import Product from "./product/Product"
import {ScrollSection, Head} from "../common"

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
        <ScrollSection className="products">
            <Head title="Tarifas" />
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
        </ScrollSection>
    )
}

export default Products