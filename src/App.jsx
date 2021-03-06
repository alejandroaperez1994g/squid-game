import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import Catalog from "./components/Catalog/Catalog";
import Series from "./components/Series/Series";
import BottomSection from "./components/BottomSection/BottomSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <Features />
      <Catalog />
      <Series />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
