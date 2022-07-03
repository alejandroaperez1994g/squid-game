import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import Catalog from "./components/Catalog/Catalog";
import Series from "./components/Series/Series";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <Features />
      <Catalog />
      <Series />
    </div>
  );
}

export default App;
