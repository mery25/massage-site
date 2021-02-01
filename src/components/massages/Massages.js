import React from "react"
import "./Massages.sass"
import Massage from "./massage/Massage"

const Massages = () => {

    const massages = [
        {
            id: 0,
            tabName: "Ayurveda",
            title: "Masaje ayurveda",
            image: "./ayurveda-pic.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta quam aspernatur quos cum explicabo dignissimos unde distinctio commodi inventore?",
            features: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet."
            ]
        },
        {
            id: 1,
            tabName: "Descontracturante",
            title: "Masaje relajante descontracturante",
            image: "./descontracturante-pic.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta quam aspernatur quos cum explicabo dignissimos unde distinctio commodi inventore?",
            features: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet."
            ]
        }
    ]

    const buildDisplayedTabContent = () => {
        //TODO change to use state
        const massage = massages[0]
        return (
            <Massage 
                title={massage.title}
                image={massage.image}
                description={massage.description}
                features={massage.features}
            />
        )
    }

    return (
        <section className="massages">
            <h2>Massages</h2>
            <div className="massages__tab-panel">
                <button className="massages__tab">Ayurveda</button>
                <button className="massages__tab">Descontracturante</button>
            </div>
            <div className="massages__tab-content">
                {buildDisplayedTabContent()}
            </div>
        </section>
    )
}

export default Massages