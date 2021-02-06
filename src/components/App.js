import './App.sass';
import Header from "./header/Header"
import NavBar from "./navbar/NavBar"
import AboutMe from "./aboutme/AboutMe"
import Massages from "./massages/Massages"
import Offers from "./offers/Offers"
import Products from "./products/Products"
import Subscription from "./subscription/Subscription"
import Contact from "./contact/Contact"
import Testimonials from "./testimonials/Testimonials"
import { emailValidation, phoneValidation } from '../validators'

function App() {

  const subscribeEmail = (email) => {
    console.log("subscribe email "  + email)
  }

  const sendContact = (contactInfo) => {
    console.dir(contactInfo, {depth: 1})
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <AboutMe />
        <Massages />
        <Offers />
        <Products />
        <Subscription validateEmail={emailValidation} subscribeEmail={subscribeEmail} />
        <Testimonials />
        <Contact validateEmail={emailValidation} validatePhone={phoneValidation} sendContact={sendContact}/>
      </main>
    </div>
  )
}

export default App
