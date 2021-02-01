import './App.sass';
import NavBar from "./navbar/NavBar"
import AboutMe from "./aboutme/AboutMe"
import Massages from "./massages/Massages"
import Offers from "./offers/Offers"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AboutMe />
        <Massages />
        <Offers />
      </main>
    </div>
  );
}

export default App
