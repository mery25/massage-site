import React, {useState} from "react"
import "./Massages.sass"
import Massage from "./massage/Massage"

const Massages = () => {

    const [ currentTab, setCurrentTab ] = useState(0)

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
            description: "Ad provident at nobis, eum fugiat illo molestias eaque quisquam, delectus expedita saepe ut soluta.",
            features: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet."
            ]
        }
    ]

    const buildDisplayedTabContent = () => {
        const massage = massages.filter(massage => massage.id === currentTab)[0]
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
                {
                    massages.map(massage => 
                        <button 
                            key={massage.id} 
                            className="massages__tab"
                            onClick={()=> setCurrentTab(massage.id)}
                        >
                            {massage.tabName}
                        </button>
                    )
                }
            </div>
            <div className="massages__tab-content">
                {buildDisplayedTabContent()}
            </div>
        </section>
    )
}

export default Massages