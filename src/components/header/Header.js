import React from "react"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "./Header.sass"
import CarouselSlide from "./slide/CarouselSlide"

const Header = () => {
    const slidesContent = [
        {
            image: {
                src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                alt: "Masaje relajante descontracturante"
            },
            link: {
                href: "#massages",
                label: "Leer más"
            },
            title: "Relájate y elimina tensiones",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cum."
        },
        {
            image: {
                src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                alt: "Ayurveda"
            },
            link: {
                href: "#massages",
                label: "Leer más"
            },
            title: "Elimina bloqueos de energia",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        }
    ]
    return (
        <header className="header">
            <Carousel 
                className="header__carousel" 
                showArrows={true} 
                showStatus={false} 
                showThumbs={false}
             /*    autoPlay={true} */
                infiniteLoop={true}
                interval={30000}
            >
                {slidesContent.map(elem => (
                    <CarouselSlide 
                        image={elem.image}
                        title={elem.title}
                        text={elem.text}
                        link={elem.link}
                    />
                ))}
            </Carousel>
        </header>
    )
}

export default Header