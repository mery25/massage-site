import React from "react"
import "./AboutMe.sass"
import ScrollSection from "../common/ScrollSection"
import Head from "../common/Head"
import TextSection from "../common/TextSection"
import Divider from "../common/Divider"
import image from "../../assets/images/cris.jpg"

const AboutMe = () => {
    return (
        <ScrollSection id='aboutme' name='aboutme' className="aboutme">
            <Head title="Sobre Mi" />
            <Divider />
            <div className="aboutme__content">
                <img className="aboutme__image" src={image} alt="Cristina Guzmán"/>
                <TextSection text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus esse repellendus pariatur sunt laboriosam ex sint eaque voluptatibus dolorum iure, dolores a quam error officiis provident perspiciatis quaerat reiciendis obcaecati, architecto hic nemo sapiente vitae. Ex at doloremque earum! Officia dicta perspiciatis, possimus fugit obcaecati voluptates ipsa numquam praesentium magnam sint quis earum et quae repudiandae nostrum error eveniet dolorem aliquid ex autem iste magni deserunt perferendis neque. Maxime, blanditiis, perferendis veniam possimus natus id, facere assumenda similique quam nisi consequatur. Animi, cupiditate perferendis nisi officiis inventore sint! Iste quasi optio vero iusto atque numquam ducimus itaque commodi quam culpa." />
            </div>
        </ScrollSection>
    )
}

export default AboutMe