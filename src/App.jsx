import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <Features />
      <Catalog />
    </div>
  );
}

export default App;
