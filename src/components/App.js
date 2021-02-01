import './App.sass';
import NavBar from "./navbar/NavBar"
import AboutMe from "./aboutme/AboutMe"
import Massages from "./massages/Massages"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AboutMe />
        <Massages />
      </main>
    </div>
  );
}

export default App;
