import React from "react"
import "./CarouselSlide.sass"
import useWindowSize from "../../../hooks/useWindowSize"

const CarouselSlide = ({title, text, link, image}) => {
    const ASPECT_RATIO_PICTURE = 1.5
    const [width, height] = useWindowSize()

    const isPortrait = () => height > width
    const aspectRatioScreen = () => isPortrait() ? height / width : width / height
    const getDisplayImageAsPortrait = () => height > width || aspectRatioScreen() < ASPECT_RATIO_PICTURE
    const roundPx = (px) => Math.round((px + Number.EPSILON) * 100) / 100
    const getStyle = () => {

        if (getDisplayImageAsPortrait()) {
            const widthImage = height * ASPECT_RATIO_PICTURE
            const pxToTranslateToLeft = (widthImage - width) / 2 * -1
            const roundedPx = roundPx(pxToTranslateToLeft)
            return { bottom: "0", left: roundedPx + "px"}
        }

        const heightImage = width / ASPECT_RATIO_PICTURE
        const pxToTranslateToBottom = (heightImage - height) / 2 * -1
        const roundedPx = roundPx(pxToTranslateToBottom)
        return { bottom: roundedPx +"px", left: "0"}

    }

    const {src, alt} = image
    const {href, label} = link

    return (
        <div className="carousel-slide">
            <img                
                style = {getStyle()}
                className={getDisplayImageAsPortrait() ? "carousel-slide__image--portrait" : "carousel-slide__image--landscape"} 
                src={src} 
                alt={alt}
            />
            <div className="legend">
                <h2 className="carousel-slide__title">{title}</h2>
                <p className="carousel-slide__text">                        
                    {text}           
                </p>
                <a className="carousel-slide__link" href={href}>{label}</a>
            </div>
        </div>
    )
}

export default CarouselSlide