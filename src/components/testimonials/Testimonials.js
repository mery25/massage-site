import React from "react"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Testimonials.sass'
import Testimonial from "./testimonial/Testimonial"

const Testimonials = () => {
    const quotes = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam quae neque atque accusantium at ratione enim ducimus tempore, nobis, modi eligendi unde odit doloremque magnam, natus beatae. Obcaecati, quod!",
            name: "CARMEN GONZALEZ"
        },
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas laborum sed cupiditate rem voluptas! Animi, repudiandae! Asperiores consequuntur labore ipsam qui pariatur recusandae culpa quidem possimus, molestiae minus dolorem earum facere.",
            name: "CARLOS VILLALOBOS"
        },
        {
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda labore facere maiores sunt vero rerum iusto nisi numquam molestias.",
            name: "ROSANA ORTEGA"
        }
    ]
    return (
        <section className="testimonials">
            <h2 className="testimonials__title">Testimonios</h2>
            <Carousel 
                className="testimonials__carousel" 
                showArrows={true} 
                showStatus={false} 
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={30000}
            >
                {quotes.map(elem => (
                    <Testimonial 
                        quote={elem.quote}
                        name={elem.name}
                    />
                ))}
            </Carousel>
        </section>
    )
}

export default Testimonials