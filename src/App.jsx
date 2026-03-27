import AOS from "aos";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Certificates from "./components/Certificates/Certificates";

AOS.init();

function App() {
  return (
      <div className="App">
        <NavBar />
        <Header />
        <MyProjects />
        <AboutMe />
        <Certificates />
      </div>
  );
}

export default App;
