import './App.sass';
import NavBar from "./navbar/NavBar"
import AboutMe from "./aboutme/AboutMe"
import Massages from "./massages/Massages"
import Offers from "./offers/Offers"
import Products from "./products/Products"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AboutMe />
        <Massages />
        <Offers />
        <Products />
      </main>
    </div>
  );
}

export default App
