import React from "react"
import "./CarouselSlide.sass"
import useWindowSize from "../../../hooks/useWindowSize"

const CarouselSlide = ({text, image}) => {
    const ASPECT_RATIO_PICTURE = 1.5
    const [width, height] = useWindowSize()

    const isPortrait = () => height > width
    const aspectRatioScreen = () => isPortrait() ? height / width : width / height

    const getCommonStyle = () => {
        return { bottom: "0", left: '0'}
    } 

    const {src, alt} = image
    
    return (
        <div className="carousel-slide"> {console.log("isPortrait => " + (isPortrait()? "portrait":"landscape") + " aspectratio=> " + aspectRatioScreen())}
            <img                
                style = {getCommonStyle()}
                className={(isPortrait() || aspectRatioScreen() < ASPECT_RATIO_PICTURE) ? "carousel-slide__image--portrait" : "carousel-slide__image--landscape"} 
                src={src} 
                alt={alt}
            />
            <div className="legend">
                <p className="carousel-slide__text">                        
                    {text}           
                </p>
            </div>
        </div>
    )
}

export default CarouselSlide