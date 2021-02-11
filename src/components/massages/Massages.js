import React, {useState} from "react"
import "./Massages.sass"
import Massage from "./massage/Massage"
import { Head, ScrollSection } from "../common"
import image1 from "../../assets/images/toa-heftiba-a9pFSC8dTlo-unsplash.jpg"
import image2 from "../../assets/images/wellness-3163090_1920.jpg"
import {CSSTransitionGroup} from "react-transition-group"

const Massages = () => {

    const [ currentTab, setCurrentTab ] = useState(0)
    const [ lastTab, setLastTab ] = useState(-1)

    const massages = [
        {
            id: 0,
            tabName: "Ayurveda",
            title: "Masaje ayurveda",
            image: image2,
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
            image: image1,
            description: "Ad provident at nobis, eum fugiat illo molestias eaque quisquam, delectus expedita saepe ut soluta.",
            features: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet."
            ]
        }
    ]

    const onClick = (id) => {
        if (id !== currentTab) {
            setLastTab(currentTab)
        }
        setCurrentTab(id)
    }

    const buildDisplayedTabContent = () => {
        const massage = massages.filter(massage => massage.id === currentTab)[0]
        return (
            <Massage 
                className={currentTab < lastTab ? "left": "right"}
                key={massage.id}
                title={massage.title}
                image={massage.image}
                description={massage.description}
                features={massage.features}
            />
        )
    }

    const isCurrentTab = (id) => id === currentTab

    return (
        <ScrollSection className="massages">
            <Head title="Masajes"/>
            <div className="massages__tab-panel">
                {
                    massages.map(massage => 
                        <button 
                            key={massage.id} 
                            className={isCurrentTab(massage.id)? "massages__tab--active active": "massages__tab"}
                            onClick={()=> onClick(massage.id)}
                        >
                            {massage.tabName}
                        </button>
                    )
                }
            </div>
            <div className="massages__tab-content">
                 <CSSTransitionGroup
                    transitionName="slide"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {
                            buildDisplayedTabContent()
                        }
                </CSSTransitionGroup>
            </div>
        </ScrollSection>
    )
}

export default Massages