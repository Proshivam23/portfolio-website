import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Aboutme />
      <Project />
      <Contactme />
    </div>
  );
}

export default App;
