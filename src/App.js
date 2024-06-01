import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Aboutme />
      <Project />
    </div>
  );
}

export default App;
