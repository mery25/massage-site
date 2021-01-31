import './App.sass';
import NavBar from "./navbar/NavBar"
import AboutMe from "./aboutme/AboutMe"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
