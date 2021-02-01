import React from "react"
import "./Massages.sass"

const Massages = () => {
    return (
        <section className="massages">
            <h2>Massages</h2>
            <div className="massages__tab-panel">
                <button className="massages__tab">Ayurveda</button>
                <button className="massages__tab">Descontracturante</button>
            </div>
            <div className="massages__tab-content">
                <div className="massage">
                    <h3 className="massage__name">Masaje ayurveda</h3>
                    <img className="massage__image" alt="ayurveda_pic.jpg"></img>
                    <p className="massage__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta quam aspernatur quos cum explicabo dignissimos unde distinctio commodi inventore?</p>
                    <ul className="massage__features">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="massage">
                    <h3 className="massage__name">Masaje relajante descontracturante</h3>
                    <img className="massage__image" alt="descontracturante_pic.jpg"></img>
                    <p className="massage__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta quam aspernatur quos cum explicabo dignissimos unde distinctio commodi inventore?</p>
                    <ul className="massage__features">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Massages